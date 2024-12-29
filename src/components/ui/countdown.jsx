import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-01-14";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = ({ isAnimeComplete }) => {

  console.log(isAnimeComplete)

  return (
    <div className={`${isAnimeComplete ? `bg-gradient-to-br from-dark-blue via-light-blue to-orange-100 p-px` : `border-white-100 backdrop-blur-sm border-[1px]`}`}
    >
      <div className={`mx-auto flex w-full max-w-5xl items-center ${isAnimeComplete ? `bg-primary` : `bg-transparent`}`}>
        <CountdownItem unit="Day" text="days" cn={'border-r-[1px]'}/>
        <CountdownItem unit="Hour" text="hours" cn={'border-r-[1px]'} />
        <CountdownItem unit="Minute" text="minutes" cn={'border-r-[1px]'} />
        <CountdownItem unit="Second" text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text, cn }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className={`flex h-24 w-1/2 flex-col items-center justify-center gap-1 ${cn} border-white-100 font-mono md:h-36 md:gap-2 pointer-events-none`}>
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl font-medium text-white md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs font-light text-slate-400 md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;

const useTimer = (unit) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};