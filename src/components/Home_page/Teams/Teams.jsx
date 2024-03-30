import React,{ useState } from "react";
import data from "./users.json"
import styles from "./Teams.module.css"
import linkedinIcon from "./img_src/linkedin.png";

import EmailIcon from "./img_src/emailllll.png"



const ProfileCard = ()=>{

    const poc = data[0];
    const coordinator = data[1];
    const coreMem = data[2];
 
    const [selectedDept, setSelectedDept] = useState("All");
    const [showAll, setShowAll] = useState(false);
    

    const departments = ["All", "Design", "Technical", "Public Relation", "Content", "Event"];
    const isSelected = (department)=> selectedDept===department;
    const handleDeptSelect = (department)=>setSelectedDept(department);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    return(
        <div className={`${styles.fontfamily}`}>
            <p className='my-5 py-5 text-5xl text-center bg-[#851815] text-white mt-0 font-normal font-mono'>Meet the <span className='font-extrabold text-[#DFA43A]'>TEAM.</span></p>
            <br />
            <div className="hidden lg:flex justify-center mb-12 gap-5">
                {
                    departments.map(department=>(
                        <div key={department}
                        className={`px-5 py-1 rounded cursor-pointer text-lg uppercase font-sans font-bold
                                    ${isSelected(department) ? 'bg-[#DFA43A] text-black' : 'hover:bg-gray-300'}
                                    transition-colors`}
                        onClick={() => handleDeptSelect(department)}
                    >
                        {department}

                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center lg:hidden">
                <select 
                    className="form-select appearance-none w-11/12 mb-5 p-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#DFA43A] focus:outline-none"
                    value={selectedDept}
                    onChange={(e) => handleDeptSelect(e.target.value)}
                >
                    {departments.map(department => (
                        <option key={department} value={department}>{department}</option>
                    ))}
                </select>
            </div>
            {selectedDept==="All" &&            
            (<div>
                <div className="flex justify-center gap-10">
                    {poc.POCs.map(member=>(
                        <div className={styles.teamCard}>
                            <img src={`https://drive.google.com/thumbnail?id=${member.photo}`} alt={member.name} className={styles.avatar} />
                            <div className="text-xl nameContainer text-center font-bold">
                                <h4 key={member}>{member.name}</h4>
                            </div>
                            <p className='uppercase text-[#851815] font-bold'>{member.position}</p>
                            <span className="flex mt-4 justify-between">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                                </a>
                                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={EmailIcon} alt="LinkedIn" className="w-[22px] h-[22px]" />
                                </a>
                                </span>
                        </div> ))
                    }
                </div>
                <h1 className="text-black font-bold text-xl rounded my-10 text-center ">Coordinators</h1>
                <div className={`${styles.teamGrid} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}>
                    {coordinator.coordinators.map(member=>(
                        <div className={styles.teamCard}>
                            <img src={`https://drive.google.com/thumbnail?id=${member.photo}`} alt={member.name} className={styles.avatar} />
                            <div className="text-xl nameContainer text-center font-bold">
                            
                                <h4 key={member}>{member.name}</h4>
                            </div>
                            <p className='uppercase text-[#851815] font-bold'>{member.department}</p>
                            <span className="flex mt-4 justify-between">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                                </a>
                                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={EmailIcon} alt="LinkedIn" className="w-[22px] h-[22px]" />
                                </a>
                            </span>
                        </div>))
                    }
                </div>
                {showAll && (
            <div>
                 <h1 className="text-black font-bold text-xl rounded my-10 text-center ">Core Members</h1>
                <div className={`${styles.teamGrid} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}>
                    {coreMem["core members"].map(member => (
                        <div className={styles.teamCard} key={member.name}>
                            <img src={`https://drive.google.com/thumbnail?id=${member.photo}`} alt={member.name} className={styles.avatar} />
                            <div className="text-xl nameContainer text-center font-bold">
                                <h4>{member.name}</h4>
                            </div>
                            <p className='uppercase text-[#851815] font-bold'>{member.department}</p>
                            <span className="flex mt-4 justify-between">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                                </a>
                                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={EmailIcon} alt="LinkedIn" className="w-[22px] h-[22px]" />
                                </a>
                            </span>
                        </div>))
                    }
                </div>
            </div>)               
                }
                <div className="text-center mt-2">
                    <button className="text-black font-bold text-xl mb-5 py-2 px-4 rounded"
                    onClick={toggleShowAll}>
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
                    
            </div>)}
            {
                selectedDept!=="All" &&(
            <div className={`${styles.teamGrid} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10`}>
            {coordinator.coordinators.filter(member=>member.department===selectedDept).map(member=>(
                        <div className={styles.teamCard}>
                            <img src={`https://drive.google.com/thumbnail?id=${member.photo}`} alt={member.name} className={styles.avatar} />
                            <div className="text-xl nameContainer text-center font-bold">
                            
                                <h4 key={member}>{member.name}</h4>
                            </div>
                            <p className='uppercase text-[#851815] font-bold'>{member.position}</p>
                            <span className="flex mt-4 justify-between">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                                </a>
                                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={EmailIcon} alt="LinkedIn" className="w-[22px] h-[22px]" />
                                </a>
                            </span>
                        </div>))
                    }
                    {coreMem["core members"].filter(member=>member.department===selectedDept).map(member=>(
                        <div className={styles.teamCard}>
                            <img src={`https://drive.google.com/thumbnail?id=${member.photo}`} alt={member.name} className={styles.avatar} />
                            <div className="text-xl nameContainer text-center font-bold">
                            
                                <h4 key={member}>{member.name}</h4>
                            </div>
                            <p className='uppercase text-[#851815] font-bold'>{member.position}</p>
                            <span className="flex mt-4 justify-between">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                                </a>
                                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                                    <img src={EmailIcon} alt="LinkedIn" className="w-[22px] h-[22px]" />
                                </a>
                            </span>
                        </div>))
                    }
            </div>)
            }
        </div>
    )
}

export default ProfileCard;