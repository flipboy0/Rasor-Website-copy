// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='w'>
      <h1>For monthly updates, subscribe to our NEWSLETTER</h1>
      </div>
      <div className="l  mx-auto p-6 rounded-md  overflow-hidden">

      <div className="box relative bg-transparent flex items-center ">
        <input
          className="mail w-full px-4 py-2 border rounded-full focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out bg-white"
          id="inputBar"
          type="text"
          placeholder="Your Email Here..."
        />
        <button className="but ml-3 px-4 py-2 bg-blue-500 text-white rounded-full  focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out">
          Subscribe
        </button>
      </div>
    </div>


    
    </div>
  );
}

export default App;
