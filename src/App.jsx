import React, { useState, useRef } from 'react';
import './App.css';

const reels = [
  'Reel Content 1: This is the first reel.Mollit dolore excepteur velit id pariatur elit. Nostrud commodo eu aliquip eiusmod officia elit commodo exercitation. Minim eu ullamco elit elit fugiat excepteur id occaecat commodo enim culpa. Velit enim commodo quis nisi veniam est labore exercitation qui enim veniam mollit magna nisi. In sunt irure proident do.Exercitation aliquip eu Lorem culpa. Pariatur velit aute consectetur eiusmod aliqua excepteur ullamco aliqua officia et ex ex exercitation. Nisi ipsum sunt occaecat ullamco eu aute dolore cillum. Est et dolore officia cupidatat qui proident commodo. Dolore dolore occaecat tempor do non veniam cillum enim excepteur. Sit aliqua consequat consequat id est est exercitation quis.Excepteur fugiat est magna ipsum anim magna consectetur mollit commodo. Ex pariatur nostrud ullamco in labore id consequat consequat. Amet reprehenderit irure velit aute.Elit dolore laboris enim eu pariatur adipisicing excepteur eu. Elit cupidatat mollit magna cillum quis. Commodo est nulla velit ad duis proident non incididunt enim est.Cupidatat adipisicing sunt nisi magna esse laboris qui aliquip aliquip sunt ad. Commodo sunt nisi ea qui nisi veniam. Occaecat consectetur cillum sit cupidatat do excepteur consequat nulla nisi exercitation. Laborum ipsum mollit tempor dolore nostrud Lorem laboris laborum adipisicing occaecat voluptate. Excepteur nulla consectetur eu Lorem elit esse aliquip. Laboris tempor amet adipisicing pariatur ex aute ullamco deserunt dolore. Ipsum ex esse labore sint reprehenderit elit.',
  'Reel Content 2: This is the second reel.',
  'Reel Content 3: This is the third reel.',
];

const App = () => {
  const [index, setIndex] = useState(0);
  const startY = useRef(0);
  const endY = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (y) => {
    startY.current = y;
    isDragging.current = true;
  };

  const handleMove = (y) => {
    if (isDragging.current) {
      endY.current = y;
    }
  };

  const handleEnd = () => {
    if (isDragging.current) {
      if (startY.current - endY.current > 50) {
        setIndex((prevIndex) => (prevIndex < reels.length - 1 ? prevIndex + 1 : prevIndex));
      } else if (startY.current - endY.current < -50) {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      }
    }
    isDragging.current = false;
  };

  const handleMouseDown = (e) => handleStart(e.clientY);
  const handleMouseMove = (e) => handleMove(e.clientY);
  const handleMouseUp = handleEnd;

  const handleTouchStart = (e) => handleStart(e.touches[0].clientY);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientY);
  const handleTouchEnd = handleEnd;

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="h-[100vh] ">
      {reels.map((item, idx) => (
        <div
          key={item}
          className={`h-[100vh] border-2 border-red-600 ${idx === index ? 'block' : 'hidden'}`}>
          <span className='text-6xl'>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
