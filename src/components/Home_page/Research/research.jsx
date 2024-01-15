import Paradox from "./css/assets/paradox.png"
import Rasor from "./css/assets/Rasor.png"
import Mask from "./css/assets/Mask_copy.png"
import "./css/research.css"



function Research(){
    return(
        
<div className="research-bg p-20">
    
    <div className="bg-white rounded-[15px] shadow-2xl md:flex justify-center space-x-[33px]">
        <div className="grid-flow-col grid-cols-1">
            <div className="md:pl-20 pt-10 flex md:flex-row flex-col-reverse" >
                <div className="faustina text-black sm:text-7xl text-5xl md:text-left text-center pl-5 pr-5">
                    Research Summit’23
                </div>
                <div className="shrink-0 flex space-x-[-30px] md:justify-start md:items-start items-center justify-center">
                    <img className="w-30 h-20" src={Paradox}/>
                    <img className="w-30 h-20 bottom-0" src={Rasor} />
                </div>
            </div>
            <h2 className="roboto-condensed text-gray-400 sm:text-3xl md:text-left text-2xl md:pl-20 pt-5 pl-10 pr-10 text-center">
                    Lorem ipsumdolor sit amet
            </h2>
            <div className="roboto-condensed pl-20 pt-5 pr-10">
                <h2 className="text-xl sm:text-2xl text-[#515151] overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur. Purus magna urna lorembr
                    vel rhoncus. Nulla et tristique volutpat lectus euismod ullamcorper.
                    Ac ipsum rhoncus laoreet quis a. Lorem fermentum posuere in nunc.
                    Velit vehicula est diam nulla convallis.<br />                    
                </h2>
                <h2 className="text-[#851815] underline text-2xl">
                    <a href="#">Know more</a>
                </h2>
                
            </div>
            <div className="inter md:pl-20 pt-10 flex flex-col items-center space-y-5 md:pb-[100px]">
                <button className="md:w-[450px] md:h-[50px] w-[300px] h-[50px] hover:bg-[#dc9f2c] text-white text-2xl shadow-md py-2 px-4 border bg-[#DFA43A] hover:border-transparent rounded">
                    Register
                </button>
                <button className="md:w-[450px] md:h-[50px] w-[300px] h-[50px] bg-transparent hover:bg-gray-100 text-[#DFA43A] text-2xl shadow-md  py-2 px-4 border border-[#DFA43A] hover:border-transparent rounded">
                    Download brochure
                </button>
                
            </div>
            
        </div>
    
      <div className="overflow-hidden rounded-t-lg rounded-l-lg">
        <img src={Mask} className="lg:h-full lg:w-full h-10 invisible lg:visible "/>
      </div>
      
    </div>
  </div>
    )
}

export default Research