import React from "react";

const Sidebar = ({ open }) => {
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Home", src: "Chat" },
    { title: "About", src: "User", gap: true },
    { title: "Events", src: "Calendar" },
    { title: "Research Summit", src: "Search" },
    { title: "Teams", src: "Chart" },
    { title: "Blog", src: "Folder", gap: true },
    { title: "Newsletter", src: "Setting" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } bg-dark-purple h-screen p-5 pt-8 fixed top-0 right-0 duration-300`}
    >
      <img
        src="/assets/control.png" // Updated path
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        alt="Toggle Sidebar"
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="/assets/logo.png" // Updated path
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
          alt="Logo"
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Inside RaSoR
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`/assets/${Menu.src}.png`} alt={Menu.title} /> {/* Updated path */}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
