import YouTube from "./Youtube-1.png"
import "./Card.css"

const Card = ({ item }) => {
    return (
      <div className='border-[6px] border-white'>
          <div class="card w-[340px] h-[427px] sm:w-[390px] sm:h-[490px] shadow-md overflow-hidden relative">
              <div className="img w-[340px] h-[427px] sm:w-[390px] sm:h-[490px] shadow-md overflow-hidden relative">
                  <img src={item.image} className="poster duration-[400ms] w-full h-full object-scale-down" />
              </div>
              <div class="faustina-300 card-body w-full h-full absolute top-0 bg-[#000000b6] backdrop-blur-[5px]  text-[#fff] p-[30px] flex flex-col justify-center right-[-100%] duration-[450ms]">
                  <h1 class="text-4xl">{item.title}</h1>
                  <p class="text-xl roboto-condensed-300 leading-[30px] mt-[40px] pb-10">{item.description}</p>
  
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

  export default Card;