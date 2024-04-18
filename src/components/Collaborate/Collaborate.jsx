import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

function Collaborate() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('collaborate');
            if (!section) return;

            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // You can adjust this threshold as needed
            const threshold = windowHeight * 0.9;

            setIsVisible(sectionTop < threshold);
        };

   
        window.addEventListener('scroll', handleScroll);

  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="collaborate" className="bg-white py-5 sm:py-10 lg:py-20 flex flex-col justify-center items-center">
                <div className="bg-white w-full roboto-slab-500 sm:text-2xl p-8 text-2xl lg:text-3xl flex flex-col justify-center items-center space-y-2 sm:space-y-3 lg:space-y-4">
                    <h1 className="text-[#040404] font-medium">Want to</h1>
                    <h1 className="font-semibold bg-gradient-to-r from-[#DFA23A] via-[#FFC660] to-[#E3AF52] bg-clip-text text-3xl md:text-4xl lg:text-5xl text-transparent">
                        {isVisible && (
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
                        )}
                    </h1>
                </div>

                <button className="relative border-2 z-10 border-red-800 bg-transparent py-3 px-6 font-medium uppercase text-3xl lg:w-70 md:w-3/4 sm:w-3/4 w-3/4 text-red-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 inline-block">
                    Contact Us
                </button>
            </div>
        </>
    );
}

export default Collaborate;
