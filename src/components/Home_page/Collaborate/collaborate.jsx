import React from 'react';
import Typewriter from 'typewriter-effect';

function Collaborate() {
    return (
        <>
            <div id="collaborate" className="bg-[#fff] my-5 sm:my-10 lg:my-20 flex flex-col justify-center items-center space-y-3 sm:space-y-5 lg:space-y-10">
                <div className=" bg-white w-full roboto-slab-500 sm:text-2xl text-2xl lg:text-3xl flex flex-col justify-center items-center space-y-2 sm:space-y-3 lg:space-y-4">
                    <h1 className="text-[#040404] font-medium">Want to</h1>
                    <h1 className="font-semibold bg-gradient-to-r from-[#DFA23A] via-[#FFC660] to-[#E3AF52] bg-clip-text text-3xl md:text-4xl lg:text-5xl text-transparent">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('COLLABORATE?')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('ASSOCIATE?')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('GROW?')
                                    .pauseFor(2000)
                                    .start();
                            }}
                        />
                    </h1>
                </div>

                <button className=" relative z-[1] -top-1 -left-1 bg-indigo-800 py-2.5 px-5 font-medium  text-white transition-all before:absolute before:top-1 before:left-1 before:h-full before:w-full before:border-2 before:border-indigo-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                    Contact Us
                </button>
            </div>
        </>
    );
}

export default Collaborate;
