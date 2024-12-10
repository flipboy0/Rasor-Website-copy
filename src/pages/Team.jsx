import React from "react";
import Watermark from "../components/Watermark/Watermark";
import Member from "../components/Member/Member";
import Secretary from "../components/Secretary/Secretary";
import Deputy from "../components/Deputy/Deputy";

const coreTeam = [
  {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'}, {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'}, {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'},
  {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'}, {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'},
]

const coordinators = [
  {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'}, {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'}, {name: 'Suprava', avatar: '/member.png', linkedIn: 'https://www.google.com', mail: 'https://www.google.com'},
]

const Team = () => {
  return (
    <div>
      <div>
        <Watermark message="our team" />
        <h1 className="text-2xl font-bold text-center py-8 uppercase">
          our team
        </h1>
      </div>

      <hr className="border-[0.5px] border-[#861D1D]" />

      <div className="py-8 flex items-center justify-evenly">
        <Secretary />
        <Deputy />        
      </div>

      <hr className="border-[0.5px] border-[#DFA43A]" />

      <div>
        <div className="p-8 flex flex-col items-center">
          <h1 className="p-4 my-4 mb-16 border-2 border-[#DFA43A] inline-block uppercase text-[18px] tracking-[10px] font-extralight">
            Co-ordinators
          </h1>
          <div className="grid grid-cols-4 gap-24 gap-x-28 py-4">
            {
              coordinators.map((member, key) => (
                <Member key={key} name={member.name} avatar={member.avatar} linkedIn={member.linkedIn} mail={member.mail} />
              ))
            }
          </div>
        </div>
      </div>

      <hr className="border-[0.5px] border-[#DFA43A]" />

      <div>
        <div className="p-8 flex flex-col items-center">
          <h1 className="p-4 my-4 mb-16 border-2 border-[#DFA43A] inline-block uppercase text-[18px] tracking-[10px] font-extralight">
            core team
          </h1>
          <div className="grid grid-cols-4 gap-24 gap-x-28 py-4">
            {
              coreTeam.map((member, key) => (
                <Member key={key} name={member.name} avatar={member.avatar} linkedIn={member.linkedIn} mail={member.mail} />
              ))
            }
          </div>
        </div>
      </div>

      <hr className="border-[4px] border-[#DFA43A]" />

    </div>
  );
};

export default Team;
