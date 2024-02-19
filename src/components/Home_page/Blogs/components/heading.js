import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  return (
    <header className="flex flex-wrap justify-between pt-8 Heading-header">


  <div className=" md:border-l-[200px] lg:border-l-[400px] border-l-red-700 p-2">
    {/* Content for the title */}
    <h1 className="text-xl pl-2 font-bold text-gray-800">{props.text}</h1>
  </div>

  <div className=" pr-20 md:pr-[130px] lg:pr-[200px] self-center">
  <a
      href={props.View}
      target="_blank"
      rel="noreferrer noopener"
      className="relative self-center bg-red-700 text-white hover:text-yellow-400 px-4 py-2 rounded-full before:rounded-full transition-colors before:absolute before:bg-yellow-400 before:inset-0 before:-z-[1] before:h-full before:w-full before:border-4 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-yellow-300"
    >
      View&gt;&gt;
    </a>
</div>
</header>
  );
};

Heading.defaultProps = {
  text: 'Published Blog',
  View: 'https://example.com',
};

Heading.propTypes = {
  text: PropTypes.string,
  View: PropTypes.string,
};

export default Heading;
