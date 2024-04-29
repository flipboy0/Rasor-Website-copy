import React from 'react'
import Img1 from "./Assets/Final.png"
import Img2 from "./Assets/GSOC.svg"
import Img3 from "./Assets/E1.png"
import YouTube from "./Youtube-1.png"
import "./Events.css"

const data = [
    {
      title: "Event 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
      image: Img3,
      link: "https://www.youtube.com/watch?v=6YbBmqUnoQM",
      
    },
    {
      title: "Event 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
      image: Img2,
      link: "https://www.youtube.com/watch?v=6YbBmqUnoQM",
    }
]


const Events = () => {
  return (
    <div className='events flex w-full h-[85vh] bg-[#861D1D]'>
        <div className='flex flex-col w-full h-full pr-[80px] px-[40px] pb-[80px] border-r-2 border-white'>
            <div className='flex justify-center relative py-10 w-full'>
                <h1 className='text-white text-4xl '>
                    UPCOMING EVENTS
                </h1>
                <button className='bg-white p-2 rounded-lg absolute right-0 top-10'>
                <svg width="40" height="40" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.7849 7.12502V8.62502H39.2849H48.4991V12.4688V16.3125H1.49915V12.4688V12.4688L1.49919 8.62502H10.7134H12.2134V7.12502V1.50002H16.3563V7.12502V8.62502H17.8563H32.142H33.642V7.12502V1.5L37.7849 1.50001V7.12502ZM1.49915 51.6563V22.875H48.4991V54.5V55.5H1.49927L1.49915 51.6563Z" stroke="#861D1D" stroke-width="3"/>
                    <rect x="7" y="29" width="10" height="4" fill="#861D1D"/>
                    <rect x="21" y="29" width="8" height="4" fill="#861D1D"/>
                    <rect x="7" y="44" width="10" height="4" fill="#861D1D"/>
                    <rect x="21" y="44" width="8" height="4" fill="#861D1D"/>
                    <rect x="33" y="29" width="10" height="4" fill="#861D1D"/>
                    <rect x="33" y="44" width="10" height="4" fill="#861D1D"/>
                </svg>

                </button>

                
            </div>
            <div className='flex gap-[60px] h-[80%] justify-center pt-10'>
                {
                    data.map((item) => {
                        return (
                            <Card item={item} />
                        )
                    })  
                }
                
            </div>

        </div>

    </div>
  )
}

export const Card = ({ item }) => {
    return (
      <div>
          <div class="card rounded-lg w-[340px] h-[427px] sm:w-[390px] sm:h-[490px] shadow-md overflow-hidden relative">
              <div className="w-[340px] h-[427px] sm:w-[390px] sm:h-[490px] rounded-lg shadow-md overflow-hidden relative">
                  <img src={item.image} className="poster duration-[400ms] w-full h-full object-scale-down " />
              </div>
              
            
              <div class="faustina-300 card-body rounded-lg w-full h-full absolute top-0 bg-[#000000b6] backdrop-blur-[5px]  text-[#fff] p-[30px] flex flex-col justify-center right-[-100%] duration-[450ms]">
                  <h1 class="text-4xl">{item.title}</h1>
                  <p class="text-xl roboto-condensed-300 leading-[25px] mt-[40px] pb-10">{item.description}</p>
  
                  <a href={item.link} className="text-[#bf3838] roboto-condensed-300 text-xl flex items-center justify-center bg-[#fff] rounded-[5px] py-2">
                    <button className="flex items-center">Watch on 
                      <img className='w-[32px] h-[20px] pl-2 pr-1' src={YouTube} />
                    YouTube</button>
                  </a>
  
              </div>
              
          </div>
        
         
      </div>
    );
  };

export default Events