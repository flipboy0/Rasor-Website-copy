import React, { useState, useEffect } from "react";

const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

function useCountUp({ endValue, duration = 1000 }) {
  const countTo = parseInt(endValue, 10);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      return;
    }
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(Math.floor(countTo * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter); // Cleanup interval on unmount or re-render
  }, [start, countTo, duration]);

  return { count, setStart }; // Return setStart along with count
}

export default function Counter(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('collaborate');
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // You can adjust this threshold as needed
      const threshold = windowHeight * 0.9;

      setIsVisible(sectionTop < threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { count, setStart } = useCountUp({ endValue: props.value, duration: 2000 });

  useEffect(() => {
    if (isVisible) {
      setStart(true);
    }
  }, [isVisible, setStart]);

  return (
    <>
      <div className="counter flex w-full py-10 justify-around bg-[#861D1D]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-5xl font-semibold">{count}</p>
          <p className="text-white text-xl">{props.label}</p>
        </div>
      </div>
    </>
  );
}
