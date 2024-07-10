import { useState, useRef, useEffect } from "react";
import "./App.css";

const reels = [
  {
    id: 1,
    title: "Reel Content 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augueluctus sagittis. Sed tincidunt, magna a ultricies accumsan, mi enim tempornulla, eget ultrices nibh nisl quis mauris. Suspendisse potenti. Vivamusnec commodo augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisaugue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,i.augue. Fusce id eros et nisl porttitor bibendum ut vitaelecNueget nisi dapibus, suscipit erat id, ultrices nisi.Donecvarius, nisl eget ultricies tincidunt, nulla ex autelvelplacerat ante nunc ut diam. Sed vitae finibus ante, Donecvarius, nisl eget ultricies tincidunt, nullautelvelplacerat ante nunc ut diam. Sed vitae finibus ante, non malesuadaneque. Nulla facilisi. Aliquam volutMaecenas anteeu sapien tincidunt efficitur a eget massa. Proin ac nislja.augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, vel placerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,"
  },
  {
    id: 2,
    title: "Reel Content 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augueluctus sagittis. Sed tincidunt, magna a ultricies accumsan, mi enim tempornulla, eget ultrices nibh nisl quis mauris. Suspendisse potenti. Vivamusnec commodo augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante, non malesuadaneque. Nulla facilisi. Aliquam erat volutpat. Maecenas eget anteeu sapien tincidunt efficitur a eget massa. Proin ac nislja."
  },
  {
    id: 3,
    title: "Reel Content 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augueluctus sagittis. Sed tincidunt, magna a ultricies accumsan, mi enim tempornulla, eget ultrices nibh nisl quis mauris. Suspendisse potenti. Vivamusnec commodo augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisaugue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,i.augue. Fusce id eros et nisl porttitor bibendum ut vitaelecNueget nisi dapibus, suscipit erat id, ultrices nisi.Donecvarius, nisl eget ultricies tincidunt, nulla ex autelvelplacerat ante nunc ut diam. Sed vitae finibus ante, Donecvarius, nisl eget ultricies tincidunt, nullautelvelplacerat ante nunc ut diam. Sed vitae finibus ante, non malesuadaneque. Nulla facilisi. Aliquam volutMaecenas anteeu sapien tincidunt efficitur a eget massa. Proin ac nislja.augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, vel placerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,"
  },
  {
    id: 4,
    title: "Reel Content 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augueluctus sagittis. Sed tincidunt, magna a ultricies accumsan, mi enim tempornulla, eget ultrices nibh nisl quis mauris. Suspendisse potenti. Vivamusnec commodo augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante, non malesuadaneque. Nulla facilisi. Aliquam erat volutpat. Maecenas eget anteeu sapien tincidunt efficitur a eget massa. Proin ac nislja."
  },
  {
    id: 5,
    title: "Reel Content 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augueluctus sagittis. Sed tincidunt, magna a ultricies accumsan, mi enim tempornulla, eget ultrices nibh nisl quis mauris. Suspendisse potenti. Vivamusnec commodo augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisaugue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,i.augue. Fusce id eros et nisl porttitor bibendum ut vitaelecNueget nisi dapibus, suscipit erat id, ultrices nisi.Donecvarius, nisl eget ultricies tincidunt, nulla ex autelvelplacerat ante nunc ut diam. Sed vitae finibus ante, Donecvarius, nisl eget ultricies tincidunt, nullautelvelplacerat ante nunc ut diam. Sed vitae finibus ante, non malesuadaneque. Nulla facilisi. Aliquam volutMaecenas anteeu sapien tincidunt efficitur a eget massa. Proin ac nislja.augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, vel placerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,augue. Fusce id eros et nisl porttitor bibendum ut vitaelectus. Nullam eget nisi dapibus, suscipit erat id, ultrices nisi. Donecvarius, nisl eget ultricies tincidunt, nulla ex auctor tellus, velplacerat ante nunc ut diam. Sed vitae finibus ante,"
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
    console.log(hasScrollbar)
    // console.log(offset,currentScrollPosition,scrollBottom)
    if(hasScrollbar){
      if ((offset < 0 && currentScrollPosition >= scrollBottom-5)  || (offset > 0)){
        // console.log('rinning')
        setDragOffset(offset);
        }
    }

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

  const resetScroll = () => {
    const reel = ReelsRef.current[index];
    if (reel) {
      reel.scrollTop = 0;
    }
  };

  const handleMouseUp = () => {
    finalizeSwipe();
  };

  const handleTouchEnd = () => {
    finalizeSwipe();
  };

  const finalizeSwipe = () => {
    const reel = ReelsRef.current[index];
    const hasScrollbar = reel.scrollHeight > reel.clientHeight;
    const currentScrollPosition = reel.scrollTop;
    const scrollBottom = reel.scrollHeight - reel.clientHeight;

    if (dragOffset > 200 ) {
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      // console.log(hasScrollbar)
    } else if (dragOffset < -200 ) {

      setIndex((prevIndex) => Math.min(prevIndex + 1, reels.length - 1));
      // console.log(hasScrollbar)
     
    }
    setDragOffset(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    const nonPassiveEventOptions = { passive: false };

    container.addEventListener("touchmove", handleTouchMove, nonPassiveEventOptions);
    container.addEventListener("touchstart", handleTouchStart, nonPassiveEventOptions);

    return () => {
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="reel-container"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      {reels.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => (ReelsRef.current[i] = el)}
          className="flex flex-col overflow-scroll reel border-2 border-red-700"
          style={{
            transform: `translateY(calc(${(i - index) * 100}% + ${dragOffset}px))`,
            zIndex: reels.length - Math.abs(i - index)
          }}
        >
          <h1 className="text-3xl font-bold border-b-2 border-red-700">{item.title}</h1>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
