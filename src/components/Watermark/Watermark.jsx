import React from 'react';

const Watermark = (props) => {
  return (
    <div className="relative">
      <h1 className="tracking-wider text-center font-bold absolute inset-x-0 top-0 text-9xl bg-gradient-to-b from-black to-slate-50 inline-block text-transparent bg-clip-text opacity-5 pointer-events-none uppercase">
        {props.message ? props.message : "SOCIETY'S MESSAGE"}
      </h1>
    </div>
  );
};

export default Watermark;
