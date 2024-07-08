import React from 'react';

const VideoCard = ({ reel, isActive, offsetY, index }) => {
  const getTransform = () => {
    if (index === 0) return `translateY(${offsetY}px)`;
    return `translateY(${index * 100}%)`;
  };

  return (
    <div
      className="absolute top-0  border-2 left-0 w-full h-full transition-transform duration-500 ease-in-out"
      style={{ transform: getTransform() }}
    >
      
      <div className="absolute top-[50%]  translate-x-2 text-lg">{reel.title}</div>
    </div>
  );
};

export default VideoCard;
