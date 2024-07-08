import React, { useState, useRef } from "react";
import "./App.css";

const reels = [
  { id: 1, title: "Reel 1", description: "Description for Reel 1",img:"https://imgs.search.brave.com/b125XPj0IJ95T1gKRAHX5zA7hGyi7dJ96p0VKcYyGGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" },
  { id: 2, title: "Reel 2", description: "Description for Reel 2",img:"https://imgs.search.brave.com/Y2rH-Z9a2_btluX3LhROUI7M7jGi_vhClrX3FnB4yVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w" },
  { id: 3, title: "Reel 3", description: "Description for Reel 3",img:"https://imgs.search.brave.com/Y2rH-Z9a2_btluX3LhROUI7M7jGi_vhClrX3FnB4yVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w" },
  { id: 4, title: "Reel 4", description: "Description for Reel 4",img:"https://imgs.search.brave.com/Y2rH-Z9a2_btluX3LhROUI7M7jGi_vhClrX3FnB4yVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dGFubmVkLXNhbmQt/ZHVuZXMtc3Vycm91/bmRlZC1hbi1vcGVu/LXJlc2Vydm9pci5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w" },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const startYPosition = useRef(0);

  const handleMove = (y) => {
    const offset = y - startYPosition.current;
    setDragOffset(offset);
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
  };

  const handleTouchStart = (e) => {
    const y = e.touches[0].clientY;
    startYPosition.current = y;
  };

  const handleMouseUp = () => {
    finalizeSwipe();
  };

  const handleTouchEnd = () => {
    finalizeSwipe();
  };

  const finalizeSwipe = () => {
    if (dragOffset > 100) {
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (dragOffset < -100) {
      setIndex((prevIndex) => Math.min(prevIndex + 1, reels.length - 1));
    }
    setDragOffset(0);
  };

  return (
    <div
      className="reel-container"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {reels.map((item, i) => (
        <div
          key={item.id}
          className="reel border-2 border-red-700"
          style={{
            transform: `translateY(calc(${(i - index) * 100}% + ${dragOffset}px))`,
            zIndex: reels.length - i,
          }}
        >
          <img src={item.img} className="bg-contain h-full"/>
        </div>
      ))}
    </div>
  );
};

export default App;
