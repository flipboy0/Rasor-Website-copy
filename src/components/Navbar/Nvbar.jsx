import React, { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const navData = ["Home", "About", "Event", "Contact Us", "Join Us"];

    const handleItemClick = (item) => {
        setActiveLink(item);
    };

    return (
        <div className="flex flex-row justify-around shadow-sm shadow-red-100 my-2 w-full">
            <div className="flex flex-row gap-[4vw] p-[2vh] font-thick text-2xl">
                {navData.map((item, index) => (
                    <h1
                        className={`hover:text-red-800 hover:font-bold  ${activeLink === item ? 'text-red-800 font-bold underline underline-offset-8' : ''}`}
                        key={index}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
