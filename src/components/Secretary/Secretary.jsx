import React from "react";

const Secretary = () => {
  return (
    <div className="select-none p-4 gap-4 flex items-center justify-center">
      <h2 className="uppercase text-[24px] tracking-[10px] font-extralight">
        Secretary
      </h2>
      <div className="flex flex-col">
        <div>
          <img
            src="/secretary.png"
            className="w-[240px] h-[346px]"
            alt=""
            srcset=" "
          />
        </div>
        <div>
          <h2 className="uppercase text-center p-2 text-lg font-bold text-[#861D1D] tracking-[0.66px]">
            Suprava Dutta
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <img src="/linkedin.svg" alt="" onClick={() => {window.open("https://www.google.com")}} className="hover:cursor-pointer h-[20px] w-[20px]" />
          <img src="/mail.svg" alt="" onClick={() => {window.open("https://www.google.com")}} className="hover:cursor-pointer h-[20px] w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Secretary;
