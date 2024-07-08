import { useState, useRef, useEffect } from "react";
import "./App.css";

const reels = [
  {
    id: 1,
    title: "Reel Content 1",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 2,
    title: "Reel Content 2",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 3,
    title: "Reel Content 3",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 4,
    title: "Reel Content 4",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 5,
    title: "Reel Content 5",
    description: "Lorem ipsum dolor sit amet..."
  }
];

const App = () => {
  const [index, setIndex] = useState(0);
  const startYPosition = useRef(0);
  const previousYPosition = useRef(0);
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
    const change = Math.abs(previousYPosition.current - startYPosition.current);
  
    if (change > 200) {
      const reel = ReelsRef.current[index];
      if (reel) {
        const hasScrollbar = reel.scrollHeight > reel.clientHeight;
        const currentScrollPosition = reel.scrollTop;
        const scrollBottom = reel.scrollHeight - reel.clientHeight;
  
        if (direction.current === "up") {
          if (hasScrollbar) {
            if (currentScrollPosition >= scrollBottom - 5) {
              setIndex((prevIndex) => (prevIndex < reels.length - 1 ? prevIndex + 1 : prevIndex));
            }
          } else {
            setIndex((prevIndex) => (prevIndex < reels.length - 1 ? prevIndex + 1 : prevIndex));
          }
        } else if (direction.current === "down") {
          setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        }
      }
    }
  };
  
  

  const handleMouseUp = getDirection;
  const handleTouchEnd = getDirection;

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="reels-container">
        {reels.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (ReelsRef.current[i] = el)}
            className={`reel `}
            style={{ transform: `translateY(${(i - index) * 100}%)` }}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <h1 className="text-3xl font-bold text-gray-700 text-center mb-4">{item.title}</h1>
            <p className="text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
