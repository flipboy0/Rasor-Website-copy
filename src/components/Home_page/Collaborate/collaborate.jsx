import "./css/collaborate.css"

function Collaborate(){
    return(
        <>
            <div className="my-[100px] flex flex-col justify-center items-center space-y-[90px]">
                <div className="roboto-slab-500 sm:text-7xl text-6xl lg:text-8xl flex flex-col justify-center items-center space-y-[30px]">
                    <h1 className="text-[#040404]">Want to</h1>
                    <h1 className="bg-gradient-to-r from-[#DFA23A] via-[#FFC660] to-[#E3AF52] bg-clip-text text-transparent">COLLABORATE?</h1>
                </div>
                
                <button className="roboto-slab-400 text-5xl lg:w-[1000px] md:w-[750px] sm:w-[600px]  w-[450px] h-[120px] hover:bg-[#dc9f2c] text-white shadow-md py-2 px-4 border bg-[#DFA43A] hover:border-transparent rounded-3xl">
                    Contact US
                </button>
            </div>
        </>
    )
}

export default Collaborate