import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  return (
    <header className="flex flex-wrap pt-8 Heading-header">
  <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 bg-red-700 p-4">
    {/* Content for the colored block */}
  </div>

  <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
    {/* Content for the title */}
    <h1 className="text-xl font-bold text-gray-800">{props.text}</h1>
  </div>

  <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 place-items-end">
    {/* Content for the link */}
    <a
      href={props.View}
      target="_blank"
      rel="noreferrer noopener"
      className="text-red-700 hover:bg-red-700 hover:text-white hover:shadow-md transition duration-300 ease-in-out px-4 py-2 rounded-full text-right self-end"
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
