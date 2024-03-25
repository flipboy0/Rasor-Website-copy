import { Tab, Listbox } from "@headlessui/react";
import { CheckIcon } from '@heroicons/react/20/solid'
import './index.css'
import GS_E1 from './assets/GettingStarted/Final.png'
import R101_E1 from './assets/Research101/E1.png'
import R101_E2 from './assets/Research101/E2.png'
import R101_E3 from './assets/Research101/E3.png'
import FC_E1 from './assets/FiresideChat/E1.png'
import RX_E1 from './assets/ResearchXplore/E1.png'
import YouTube from './assets/Youtube.png'


import { useEffect, useState } from "react";
//const DriveImage = id => `https://drive.google.com/u/0/uc?id=${id}&export=download`;



const EventTabs = () => {
  const categories = {
    "Getting Started": {
      description:
        "Start your journey as a member of RaSoR, through these specially curated videos",
      cards: [
        {
          title: "Orientation",
          description:
            "Why and What’s Rasor, What drives the founders and Why they started it | What we have for YOU - The Orientation",
          link: "https://www.youtube.com/watch?v=ucsNu-1jeKk",
          image: GS_E1,
          priority: true,
        },
      ],
    },

    "Research 101": {
      description:
        "An exclusive series of programs designed for both novice and advanced learners, featuring sessions led by renowned research experts from various top institutes worldwide",

      cards: [
        {
          title: "Episode 1",
          description:
            "Professor Ganapathy Krishnamurthi, a renowned researcher in Biomedical Engineering, conducting our first event Research 101 session",
          link: null,
          image: R101_E1,
          priority: false,
        },
        {
          title: "Episode 2",
          description:
            "Dr. Sarika Mahajan, an academician, trainer and Finance Professor at JBIMS, covered Literature Review and Hypothesis Development",
          link: "https://www.youtube.com/watch?v=8BFQr0K-qM0",
          image: R101_E2,
          priority: false,
        },
        {
          title: "Episode 3",
          description:
            "Dr. Atul Shiva, Associate Professor of Management at Chandigarh University, covered Research tools and Softwares",
          link: "https://www.youtube.com/watch?v=0S_pI5Lugec",
          image: R101_E3,
          priority: false,
        },
      ],
    },
    "Fireside Chat": {
      description:
        "Experience the thrill, where leading researchers share their personal journeys in research and engage in interactive discussions with our community members",
      cards: [
        {
          title: "Episode 1",
          description:
            "Abhinandan Sethi, an upcoming research intern from Lakehead University, Canada and one of our  own BS Student.This interactive session covered his aspiration, suggestion and guidance on how to get research internships.",
          link: "https://www.youtube.com/watch?v=cB9bZ4L8PwU",
          image: FC_E1,
          priority: false,
        },
      ],
    },
    "Research Xplore": {
      description:
        "An in-depth exploration of various research fields by distinguished research professionals, our programs cater to all levels of expertise.",

      cards: [
        {
          title: "Episode 1",
          description:
            "Juan Rocamonde, a Cambridge University Graduate and Founder at Vertebra AI talks about the latest trends and developments in AI safety, as well as the ethical and safety concerns that arise with the growing use of this powerful technology, future of AI and its impact on society.",
          link: "https://www.youtube.com/watch?v=E_jtvWxBm2Y",
          image: RX_E1,
          priority: false,
        },
      ],
    },
    // "Research Summit": {
    //   description:
    //     "An event with thrilling workshops and contests that brings together researchers, and students from diverse fields to discuss and learn about the latest trends and methodologies in research.",

    //   cards: [],
    // },
  }

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.matchMedia("screen and (width < 640px)"));
//   }, []);

const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  window.addEventListener('resize', handleResize);

 
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); 





const [selectedCategory, setSelectedCategory] = useState("Getting Started");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };



  return (
    <section className='pt-[120px] flex flex-col justify-center px-10 event-tabs gap-8 overflow-hidden m-4'>
      {!isMobile && (<Tab.Group >
        <Tab.List className={`${isMobile ? "flex flex-col mt-10":"flex border-2 border-black"} justify-center text-center rounded-[50px]  text-black items-center h-[50px]`}>
          {Object.keys(categories).map((category, index) => (
            <Tab key={category}
              className={({selected})=>
              `${selected ? 'bg-white text-black' : 'bg-[#fff]' } ${isMobile ? "":`${index === 0 ? 'rounded-l-[50px]':'border-l-2 border-black'} ${index === ((Object.keys(categories).length)-1) ? 'rounded-r-[50px]' : ''}`} text-3xl hover:bg-[#f87171] hover:text-white flex-grow h-full`
              }
              >
              <h2 >{category}</h2>
            </Tab>
          ))}
        </Tab.List>
        <div>
        <Tab.Panels className='flex flex-col rounded-lg sm:h-[110vh] overflow-auto'>

            {Object.keys(categories).map((category, idx) => (
              <Tab.Panel key={idx} className='p-8 flex flex-col items-center justify-center'>
                <div>
                  <h1 className="pt-10 text-2xl font-bold">
                    {category}
                  </h1>
                </div>
                <div className="flex justify-center">
                {categories[category].description && <Banner item={categories[category]} />}
                </div>
                <div className="flex gap-x-[66px] ">
                   
                {categories[category].cards && categories[category].cards.map((item, i) => (
                  <Card item={item} key={i} />
                ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>)}
      <div className="flex justify-center">
      {isMobile && (<Listbox value={selectedCategory} onChange={handleCategorySelect}>
        <Listbox.Button className="border w-[60%] md:w-[40%] flex gap-3 justify-center border-gray-300 bg-white rounded-md shadow-sm px-4 py-2">
          {selectedCategory} <p>🔽</p>
        </Listbox.Button>
        <Listbox.Options className="w-[60%] sm:w-[40%] absolute z-10 mt-2 bg-white rounded-md shadow-lg">
          {Object.keys(categories).map((category, index) => (
            <Listbox.Option
              key={index}
              value={category}
              className={({ active }) =>
                `${active ? "text-white bg-indigo-600" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-3 pr-9`
              }
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`${
                      selected ? "font-semibold" : "font-normal"
                    } block truncate`}
                  >
                    {category}
                  </span>
                  {selected ? (
                    <span
                      className={`${
                        active ? "text-white" : "text-indigo-600"
                      }
                                absolute inset-y-0 right-0 flex items-center pr-4`}
                    >
                      <CheckIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>)}
      </div>

        {isMobile && (<div className="p-8 flex flex-col items-center justify-center">
        <div>
                  <h1 className="pt-10 text-2xl font-bold">
                    {selectedCategory}
                  </h1>
                </div>
        {selectedCategory && (
        <div className="flex justify-center">
          <Banner item={categories[selectedCategory]} />
        </div>
      )}

      <div className="flex flex-col gap-y-[66px]">
        {selectedCategory &&
          categories[selectedCategory].cards.map((item, index) => (
            
            <Card key={index} item={item} />

          ))}
      </div>
        </div>)}
      
    </section>
  );
};

export const Banner = ({item})=>{
    return(
        <div className="border-x-2 px-2 lg:w-1/2 md:w-3/4 w-full my-10 py-5">
            <p className=" roboto-condensed-300 text-[#515151] text-xl text-center">
                {item.description}
            </p>
        </div>
    )
}


export const Card = ({ item }) => {
  return (
    <div>
        <div class="card rounded-lg  w-[390px] sm:h-[490px] shadow-md overflow-hidden relative">
            <div className=" w-[390px] sm:h-[490px] rounded-lg shadow-md overflow-hidden relative">
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

export default EventTabs;
