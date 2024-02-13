import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
  },
];

function Announcement() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900, // Medium screen size
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screen size
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <header className="flex justify-between pt-8 Heading-header">

  <div className=" border-l-8 md:border-l-[100px] lg:border-l-[200px] border-l-red-700 p-1">
    {/* Content for the title */}
    <h1 className="text-xl px-2 font-bold text-gray-800">Announcement</h1>
  </div>

  <div className="pr-20 md:pr-[60px] lg:pr-[100px] self-center">
  <a
      href="www.google.com"
      target="_blank"
      rel="noreferrer noopener"
      className="relative self-center bg-red-700 text-white hover:text-yellow-400 px-4 py-2 rounded-full before:rounded-full transition-colors before:absolute before:bg-yellow-400 before:inset-0 before:-z-[1] before:h-full before:w-full before:border-4 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-yellow-300"
    >
      View&gt;&gt;
    </a>
</div>
</header>
      <div className='w-[85%] m-auto '>
        <div className="mt-20 ">
          <Slider {...settings}>
          {data.map((d, index) =>  (<a key={index} href="https://example.com">
              <div key={d.name} className="bg-white h-[400px] text-black rounded-xl mb-20 shadow-lg hover:shadow-2xl hover:bg-stone-300">
                <div className='h-56 bg-[#851815] flex justify-center items-center rounded-t-xl'>
                  <img src={d.img} alt="" className="object-cover object-center h-full w-full rounded-t-xl" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center overflow-hidden overflow-ellipsis">{d.review}</p>
                </div>
              </div></a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}




export default Announcement;

