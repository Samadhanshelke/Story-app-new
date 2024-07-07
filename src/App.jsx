import { useState, useRef, useEffect } from "react";
import "./App.css";

const reels = [
  "Reel Content 1: This is the first reel. Mollit dolore excepteur velit id pariatur elit. Nostrud commodo eu aliquip eiusmod officia elit commodo exercitation. Minim eu ullamco elit elit fugiat excepteur id occaecat commodo enim culpa. Velit enim commodo quis nisi veniam est labore exercitation qui enim veniam mollit magna nisi. In sunt irure proident do. Exercitation aliquip eu Lorem culpa. Pariatur velit aute consectetur eiusmod aliqua excepteur ullamco aliqua officia et ex ex exercitation. Nisi ipsum sunt occaecat ullamco eu aute dolore cillum. Est et dolore officia cupidatat qui proident commodo. Dolore dolore occaecat tempor do non veniam cillum enim excepteur. Sit aliqua consequat consequat id est est exercitation quis. Excepteur fugiat est magna ipsum anim magna consectetur mollit commodo. Ex pariatur nostrud ullamco in labore id consequat consequat. Amet reprehenderit irure velit aute. Elit dolore laboris enim eu pariatur adipisicing excepteur eu. Elit cupidatat mollit magna cillum quis. Commodo est nulla velit ad duis proident non incididunt enim est. Cupidatat adipisicing sunt nisi magna esse laboris qui aliquip aliquip sunt ad. Commodo sunt nisi ea qui nisi veniam. Occaecat consectetur cillum sit cupidatat do excepteur consequat nulla nisi exercitation. Laborum ipsum mollit tempor dolore nostrud Lorem laboris laborum adipisicing occaecat voluptate. Excepteur nulla consectetur eu Lorem elit esse aliquip. Laboris tempor amet adipisicing pariatur ex aute ullamco deserunt dolore. Ipsum ex esse labore sint reprehenderit elit.",
  "Reel Content 2: This is the second reel.",
  "Reel Content 3: This is the third reel.",
];

const App = () => {
  const [index, setIndex] = useState(0);
  const startYPosition = useRef(0); // To store the initial Y position
  const previousYPosition = useRef(0); // To store the previous Y position during the move
  const direction = useRef("");
  const ReelsRef = useRef([]);

  useEffect(() => {
    ReelsRef.current = ReelsRef.current.slice(0, reels.length);
  }, []);

  const handleMove = (y) => {
    if (y < previousYPosition.current) {
      direction.current = "up";
    } else if (y > previousYPosition.current) {
      direction.current = "down";
    }
    previousYPosition.current = y;
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientY);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientY);
  };

  const handleMouseDown = (e) => {
    const y = e.clientY;
    startYPosition.current = y;
    previousYPosition.current = y;
  };

  const handleTouchStart = (e) => {
    const y = e.touches[0].clientY;
    startYPosition.current = y;
    previousYPosition.current = y;
  };

  const resetScroll = () => {
    const reel = ReelsRef.current[index];
    if (reel) {
      reel.scrollTop = 0;
    }
  };

  const getDirection = () => {
    const reel = ReelsRef.current[index];
    if (reel) {
      const hasScrollbar = reel.scrollHeight > reel.clientHeight;
      const currentScrollPosition = reel.scrollTop;
      const scrollBottom = reel.scrollHeight - reel.clientHeight;

      if (direction.current === "up") {
        if (hasScrollbar) {
          if (currentScrollPosition >= scrollBottom - 5) {
            setIndex((prevIndex) => (prevIndex < reels.length - 1 ? prevIndex + 1 : prevIndex));
            resetScroll();
          }
        } else {
          setIndex((prevIndex) => (prevIndex < reels.length - 1 ? prevIndex + 1 : prevIndex));
          resetScroll();
        }
      } else if (direction.current === "down") {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        resetScroll();
      }
    }
  };

  const handleMouseUp = getDirection;
  const handleTouchEnd = getDirection;

  return (
    <div className="h-[100vh]">
      {reels.map((item, i) => {
        return (
          <div
            key={item}
            ref={(el) => (ReelsRef.current[i] = el)}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={`h-full text-6xl overflow-auto select-none ${index === i ? "flex" : "hidden"}`}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
