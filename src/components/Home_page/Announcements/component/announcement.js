import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
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
    prevArrow: <div className="slick-prev bg-red-900">&#9664;</div>,
    nextArrow: <div className="slick-next bg-red-900">&#9654;</div>,
    autoplay: true, 
    responsive: [
      {
        breakpoint: 768, // Medium screen size
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
    <div className="container mx-auto flex pt-8">
    <div className="box w-20 h-8 bg-[#A11D19] ml-0 m-2"></div>
    <div className="name w-40 h-8 m-2">
        <h2 className="text-2xl font-bold">Announcements</h2>
    </div>
    <div className="link w-3/5 h-8 m-2">
        <a href="https://www.w3schools.com" className="block text-[#A11D19] underline p-2 mb-2 text-right">View all{">>"}</a>
    </div>
</div>
    <div className='w-3/4 m-auto '>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (<a href="https://example.com">
            <div key={d.name} className="bg-white h-[400px] text-black rounded-xl mb-20 shadow-lg hover:shadow-2xl ">
              <div className='h-56 bg-[#851815] flex justify-center items-center rounded-t-xl'>
    <img src={d.img} alt="" className="object-cover object-center h-full w-full rounded-t-xl" />
</div>
<div className="flex flex-col items-center justify-center">
    <p className="text-xl font-semibold">{d.name}</p>
    <p className="text-center">{d.review}</p>
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

