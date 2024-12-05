import React from "react";
import EventHead from "../Eventheadsection/EventHead";
import EventCard from "../EventCard/Eventcard";

const transformToEmbedUrl = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0]; // Extract video ID
  return `https://www.youtube.com/embed/${videoId}`;
};

const EventPage = ({ eventName, description, cards }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gray-100 pb-8 px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <EventHead eventname={eventName} />
          <p className="mt-4 text-2xl text-gray-700">{description}</p>
        </div>
        <div className="mt-8 border-t-2 border-yellow-400 max-w-4xl mx-auto"></div>

        {/* Background Circles */}
        <div className="absolute -top-10 left-0 w-40 h-40 bg-yellow-300 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute -top-10 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-[100px]"></div>
      </div>

      <div className="text-center max-w-4xl my-16 mx-auto relative z-10">
        <h1 className="text-4xl font-medium">EVENTS</h1>
      </div>

      <div className="events-section px-8 py-8">
        <div className="flex flex-col gap-12 mx-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-8 items-center mx-16 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex-1">
                <EventCard
                  title={card.title}
                  description={card.description}
                  imgSrc={card.image}
                />
              </div>

              <div className="flex-1">
                <div className="relative z-10 pt-[56.25%] mr-8">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={transformToEmbedUrl(card.link)}
                    title={card.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="relative z-20 p-4 h-32 bg-gray-50/95 border-t border-gray-200 mr-8" >
                  <h1 className="text-2xl font-semibold">
                    <span className="text-black-500">{card.title}</span>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
