import React from "react";
import EventCard from "../components/EventCard/Eventcard";
import EventHead from "../components/Eventheadsection/EventHead";

const Events = () => {
  const events = [
    {
      title: "Research 101.",
      description: "An exclusive series of programs designed for both novice and advanced learners, featuring sessions led by renowned research experts from various top institutes worldwide",
      imgSrc: "https://via.placeholder.com/452x567",// Replace with actual image URL
      to: "/event/Research-101" 
    },
    {
      title: "Fireside Chat",
      description: "Experience the thrill, where leading researchers share their personal journeys in research and engage in interactive discussions with our community members",
      imgSrc: "https://via.placeholder.com/452x567",
      to: "/event/Fireside-Chat"
    },
    {
      title: "Summit",
      description: "An event with thrilling workshops and contests that brings together researchers, and students from diverse fields to discuss and learn about the latest trends and methodologies in research.",
      imgSrc: "https://via.placeholder.com/452x567",
      to: "/event/Summit"
    },
    {
      title: "Project Luminar",
      description: "",
      imgSrc: "https://via.placeholder.com/452x567",
      to: "/event/Project-Luminar"
    },
    {
      title: "Carnival",
      description: "",
      imgSrc: "https://via.placeholder.com/452x567",
      to: "/event/Carnival"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EventHead eventname={"EVENTS"}/>
      <div className="events-section px-8 py-8">
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {events.map((event, index) => (
            <a href={event.to}>
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    imgSrc={event.imgSrc}
                />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
