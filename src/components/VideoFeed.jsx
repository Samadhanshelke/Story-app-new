import React, { useState, useRef } from 'react';
import VideoCard from './VideoCard';

const reels = [
  {
    id: 1,
    title: "Reel Content 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus sagittis..."
  },
  {
    id: 2,
    title: "Reel Content 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus sagittis..."
  },
  {
    id: 3,
    title: "Reel Content 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus sagittis..."
  },
  {
    id: 4,
    title: "Reel Content 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus sagittis..."
  },
  {
    id: 5,
    title: "Reel Content 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus sagittis..."
  }
];

const VideoFeed = () => {
  const [index, setIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const startY = useRef(null);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!startY.current) return;

    const endY = e.touches[0].clientY;
    const distance = endY - startY.current;

    setOffsetY(distance);
  };

  const handleTouchEnd = () => {
    const threshold = window.innerHeight / 5;

    if (offsetY < -threshold && index < reels.length - 1) {
      setIndex(index + 1);
    } else if (offsetY > threshold && index > 0) {
      setIndex(index - 1);
    }

    setOffsetY(0);
    startY.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="h-full w-full relative overflow-hidden"
    >
      {reels.map((reel, i) => (
        <VideoCard
          key={reel.id}
          reel={reel}
          isActive={i === index}
          offsetY={offsetY}
          index={i - index}
        />
      ))}
    </div>
  );
};

export default VideoFeed;