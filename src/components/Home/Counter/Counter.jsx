import React, {useState, useEffect} from "react";

const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

function useCountUp({ endValue, duration = 1000}) {
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
  }, [start]);

  return { count, setStart };
}

export default function Counter(props) {
    
    const { count, setStart } = useCountUp({ endValue: props.value, duration: 2000 });
    
    return (
        <>
            <div className="flex w-full py-10 justify-around bg-[#861D1D]">
                
                    <div className="">
                        <p className="text-white">{count}</p>
                        <p className="text-white">{props.label}</p>
                    </div>
                
            </div>
            <button className="counter__button" onClick={() => setStart(true)}>
                Start Counting
            </button>
        </>
    );
}