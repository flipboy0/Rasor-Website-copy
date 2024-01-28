import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  return (
    <header className="flex flex-wrap pt-8 Heading-header">
  <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 bg-red-700 p-4">
    {/* Content for the colored block */}
  </div>

  <div className="w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
    {/* Content for the title */}
    <h1 className="text-xl font-bold text-gray-800">{props.text}</h1>
  </div>

  <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 place-items-end">
  {/* Content for the link */}
  <div className="text-right place-content-end">
    <a
      href={props.View}
      target="_blank"
      rel="noreferrer noopener"
      className="relative bg-red-700 text-white hover:text-yellow-400 px-4 py-2 rounded-full before:rounded-full transition-colors before:absolute before:bg-yellow-400 before:inset-0 before:-z-[1] before:h-full before:w-full before:border-4 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-yellow-300"
    >
      View&gt;&gt;
    </a>
  </div>
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
