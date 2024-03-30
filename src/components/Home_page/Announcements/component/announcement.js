import { Link } from "react-router-dom";

function Announcement() {
  
  return (
    <div className="container mx-auto">
      <header className="flex justify-between pt-8 Heading-header">

  <div className=" border-l-8 md:border-l-[100px] lg:border-l-[200px] border-l-red-700 p-1">
    {/* Content for the title */}
    <h1 className="text-xl px-2 font-bold text-gray-800">Announcement</h1>
  </div>

  <div className="pr-20 md:pr-[60px] lg:pr-[100px] self-center">
  <Link
     to="/events-section"
      rel="noreferrer noopener"
      className="relative self-center bg-red-700 text-white hover:text-yellow-400 px-4 py-2 rounded-full before:rounded-full transition-colors before:absolute before:bg-yellow-400 before:inset-0 before:-z-[1] before:h-full before:w-full before:border-4 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-yellow-300"
    >
      View&gt;&gt;
      </Link>
</div>
</header>
      
    </div>
  );
}




export default Announcement;

