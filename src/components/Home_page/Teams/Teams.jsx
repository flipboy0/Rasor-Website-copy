"use client"
import React, { useEffect, useState } from 'react';
import membersData from './users.json';
import styles from './Teams.module.css';

const ProfileCard = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const [maxDisplay, setMaxDisplay] = useState(5); // New state for max display

    // Function to update maxDisplay based on screen width
    const updateMaxDisplay = () => {
        if (window.innerWidth >= 1280) { // lg screen size
            setMaxDisplay(5);
        } else if (window.innerWidth >= 1024) { // lg screen size
            setMaxDisplay(4);
        } else if (window.innerWidth >= 768) { // md screen size
            setMaxDisplay(3);
        } else {
            setMaxDisplay(2); // sm screen size
        }
    };

    useEffect(() => {
        setTeamMembers(membersData);
        window.addEventListener('resize', updateMaxDisplay);
        updateMaxDisplay(); // Initial update on component mount

        return () => {
            window.removeEventListener('resize', updateMaxDisplay);
        };
    }, []);

    const roles = ["All", "Graphic", "Technical", "Public Relation", "Content"];
    const isSelected = (role) => selectedRole === role;

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const filteredMembers = selectedRole === 'All'
        ? teamMembers
        : teamMembers.filter(member => member.role === selectedRole);

    // Filter and slice logic combined
    const displayedMembers = showAll 
        ? filteredMembers 
        : filteredMembers.slice(0, maxDisplay);

     // Toggle function for showAll
     const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    return (
        <div className={styles.fontfamily}>
            <p className='my-5 py-5 text-5xl text-center bg-[#851815] text-white mt-0 font-normal font-mono'>Meet the <span className='font-extrabold text-[#DFA43A]'>TEAM.</span></p>
            <br />
            <div className="hidden lg:flex justify-center mb-12 gap-5">
                {roles.map(role => (
                    <div
                        key={role}
                        className={`px-5 py-1 rounded cursor-pointer text-lg uppercase font-sans font-bold
                                    ${isSelected(role) ? 'bg-[#DFA43A] text-black' : 'hover:bg-gray-300'}
                                    transition-colors`}
                        onClick={() => handleRoleSelect(role)}
                    >
                        {role} Team
                    </div>
                ))}
            </div>
            <div className="flex justify-center lg:hidden">
                <select 
                    className="form-select appearance-none w-11/12 mb-5 p-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#DFA43A] focus:outline-none"
                    value={selectedRole}
                    onChange={(e) => handleRoleSelect(e.target.value)}
                >
                    {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
            </div>
            <div className={`${styles.teamGrid} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}>
                {displayedMembers.map(member => (
                    <div key={member.userId} className={styles.teamCard}>
                        <img src={member.avatarUrl} alt={member.name} className={styles.avatar} />
                        <div className="nameContainer text-center font-bold">
                            {member.name.split(' ').map((part, index) => (
                                <h4 key={index}>{part}</h4>
                            ))}
                        </div>
                        <p className='uppercase text-[#851815] font-bold'>{member.profession}</p>
                        <br /><br />
                    </div>
                ))}
            </div>
            {filteredMembers.length > maxDisplay && (
                <div className="text-center mt-2">
                    <button
                        className="text-black font-bold text-xl mb-5 py-2 px-4 rounded"
                        onClick={toggleShowAll}
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;
