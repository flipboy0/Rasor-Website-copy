import React from "react";
import { useParams } from "react-router-dom";
import EventPage from "../components/SubEvent/EventPage";
import eventData from "../data/eventdata";

const SubEvent = () => {
  const { eventId } = useParams();
  const event = eventData[eventId];

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <EventPage eventName={event.title} description={event.description} cards={event.cards}/>
    </div>
  );
};

export default SubEvent;
