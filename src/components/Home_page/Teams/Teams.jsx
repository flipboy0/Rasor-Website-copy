"use client"
import React, { useEffect, useState } from 'react';
import membersData from './users.json';
import styles from './Teams.module.css';

const ProfileCard = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('All');

    useEffect(() => {
        setTeamMembers(membersData);
    }, []);

    const roles = ["All", "Graphic", "Technical", "Public Relation", "Content"];
    const isSelected = (role) => selectedRole === role;

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const filteredMembers = selectedRole === 'All'
        ? teamMembers
        : teamMembers.filter(member => member.role === selectedRole);

    return (
        <div className={styles.fontfamily}>
            <p className='my-5 py-5 text-5xl text-center bg-[#851815] text-white mt-0 font-normal font-mono'>Meet the <span className='font-extrabold text-[#DFA43A]'>TEAM.</span></p>
            <br />
            <div className="flex justify-center mb-12 gap-5">
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
            <div className={styles.teamGrid}>
                {filteredMembers.map(member => (
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
        </div>
    );
};

export default ProfileCard;
