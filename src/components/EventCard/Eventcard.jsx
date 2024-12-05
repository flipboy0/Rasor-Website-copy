import React from 'react';

const EventCard = ({ title, description, imgSrc }) => {
  return (
    <div className="w-72 border border-gray-200 rounded-lg shadow-lg overflow-hidden m-8">
      <img src={imgSrc} alt={title} className="w-[453] h-[567] object-cover" />
      <div className="p-4 border-2 border-b-8 border-yellow-500">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm"> {description.split(" ").slice(0, 15).join(" ")}{description.split(" ").length > 15 && " ..."}</p>
      </div>
    </div>
  );
};

export default EventCard;

