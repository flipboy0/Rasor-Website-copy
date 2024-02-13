
function App() {
  return (
    <div className='bg-[#851815] py-10 flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center gap-y-10 px-5 w-[1300px]'>
        <div className=''>
          <h1 className='text-md md:text-xl lg:text-2xl text-white text-center faustina-400 '>
          For monthly updates subscribe to our 
          <span className='faustina-700'> NEWSLETTER</span>
        </h1>
        </div>
        <div className='flex flex-row gap-x-5'>
          <input type="email" id="email" className="bg-[#F7F7F7] px-5 border border-gray-300 text-[#777777] rounded-[10px] focus:ring-blue-500 focus:border-blue-500 w-full" placeholder="Your email here" required
          />
          <button className="md:w-[450px] md:h-[50px] w-[300px] h-[50px] hover:bg-[#dc9f2c] text-white text-2xl shadow-md py-2 px-4 border bg-[#DFA43A] hover:border-transparent rounded-[10px]">
                      Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
