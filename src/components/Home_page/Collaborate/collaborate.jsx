import React from "react";

function Collaborate() {
    return (
        <>
            <div className="my-5 sm:my-10 lg:my-20 flex flex-col justify-center items-center space-y-5 sm:space-y-10 lg:space-y-20">
                <div className="roboto-slab-500 sm:text-4xl text-3xl lg:text-5xl flex flex-col justify-center items-center space-y-2 sm:space-y-4 lg:space-y-6">
                    <h1 className="text-[#040404] font-medium">Want to</h1>
                    <h1 className="font-semibold bg-gradient-to-r from-[#DFA23A] via-[#FFC660] to-[#E3AF52] bg-clip-text text-transparent">COLLABORATE?</h1>
                </div>

                <button className="relative border-2 border-red-800 bg-transparent py-3 px-6 font-medium uppercase text-3xl lg:w-70 md:w-3/4 sm:w-3/4 w-3/4 text-red-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 inline-block">
                    Contact Us
                </button>
            </div>
        </>
    );
}

export default Collaborate;
