import { useState, useRef, useEffect } from "react";
import "./App.css";

const reels = [
  {
    id: 1,
    title: "Reel Content 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sit ",
   },
    {
    id: 2,
    title: "Reel Content 2",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sit ",
  },
  {
    id: 3,
    title: "Reel Content 3",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sit ",
  },
  {
    id: 4,
    title: "Reel Content 4",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sit ",
  },
  {
    id: 5,
    title: "Reel Content 5",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sitconsectetur adipiscing elit. Lorem ipsum dolor sit ",
  }
];
const App = () => {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const startYPosition = useRef(0);
  const ReelsRef = useRef([]);
  const containerRef = useRef(null);

  const handleMove = (y) => {
    const offset = y - startYPosition.current;
    const reel = ReelsRef.current[index];
    const currentScrollPosition = reel.scrollTop;
    const scrollBottom = reel.scrollHeight - reel.clientHeight;
    const hasScrollbar = reel.scrollHeight > reel.clientHeight;

  //600

    if (hasScrollbar) {
      if (currentScrollPosition > scrollBottom - 1) {
        setDragOffset(offset);
      } else if(offset > 10 && currentScrollPosition ===0){
        setDragOffset(offset);
      }
      else {
        setDragOffset(0);
      }
    } else {
      setDragOffset(offset);
    }
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientY);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientY);
  };

  const handleMouseDown = (e) => {
    startYPosition.current = e.clientY;
  };

  const handleTouchStart = (e) => {
    startYPosition.current = e.touches[0].clientY;
  };

  const resetScroll = () => {
    const reel = ReelsRef.current[index];
    if (reel) {
      reel.scrollTop = 0;
    }
  };

  const handleMouseUp = () => {
    handleSwipe();
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };

  const handleSwipe = () => {
    const reel = ReelsRef.current[index];
    const hasScrollbar = reel.scrollHeight > reel.clientHeight;
    const currentScrollPosition = reel.scrollTop;
    const scrollBottom = reel.scrollHeight - reel.clientHeight;

    const containerHeight = window.innerHeight;
    const visibleRatio = dragOffset / containerHeight;
    // console.log(window.innerHeight)
    console.log(visibleRatio)

    if (dragOffset > 10 && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);

    } else if (dragOffset < -10 && index < reels.length - 1) {
      if (!hasScrollbar || currentScrollPosition > scrollBottom - 1) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }
    setDragOffset(0);
  };

 


  useEffect(() => {
    const container = containerRef.current;
    const nonPassiveEventOptions = { passive: false };

    container.addEventListener("touchmove", handleTouchMove, nonPassiveEventOptions);
    container.addEventListener("mousemove", handleMouseMove, nonPassiveEventOptions);
    container.addEventListener("touchstart", handleTouchStart, nonPassiveEventOptions);
    container.addEventListener("mousedown", handleMouseDown, nonPassiveEventOptions);
    container.addEventListener("mouseup", handleMouseUp, nonPassiveEventOptions);
    container.addEventListener("touchend", handleTouchEnd, nonPassiveEventOptions);

    return () => {
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseMove,handleTouchMove]);

  useEffect(() => {
    // console.log("index changed:", index);
    resetScroll();
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="reel-container min-h-screen"
    >
      {reels.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => (ReelsRef.current[i] = el)}
          className="flex flex-col overflow-scroll reel pb-16 border-2 border-red-700"
          style={{
            transform: `translateY(calc(${(i - index) * 100}% + ${dragOffset}px))`,
            zIndex: reels.length - Math.abs(i - index),
          }}
        >
          <h1 className="text-3xl font-bold border-b-2 border-green-700">
            {item.title}
          </h1>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
