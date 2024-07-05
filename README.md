# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- import  { useState } from 'react';
import './App.css'; 
import { IoGridOutline } from "react-icons/io5";
import moment from 'moment'
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import randomColor from "randomcolor";
import { generate,  } from "random-words";
import { FiPlus } from 'react-icons/fi';
function App() {
   
 
  const [boxes, setBoxes] = useState([]);

  
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

 
  const generateRandomPercentage = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  let color = randomColor();
  const handleAddBox = () => {
    const newBox = {
      id: Date.now(),
      number: generateRandomNumber(),
      percentage: generateRandomPercentage(),
      text:generate({ minLength: 5, maxLength: 5 }),
      secondtext:generate({ minLength: 5, maxLength: 5 }),
      color: randomColor(),
      progressColor: randomColor(),
      addbtnColor: randomColor(),

    };
    setBoxes([...boxes, newBox]);
    console.log(boxes)
  };
  const month = new Date().getMonth()
  // const date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  const date = moment().format(" Do ");
  const boxDate = moment().format(" MMMM Do")
  const boxYear = moment().format("YYYY")
  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
 

  console.log(color)
  

  const handleDelete = (id)=>{
   const result =  boxes.filter((item)=>{
         return item.id !== id
    })
    setBoxes(result)
  }
  return (
    <div className="App w-full lg:w-[1000px] m-auto mt-8">

      <div className=' flex flex-col sm:flex-row justify-between text-2xl font-bold '>
         <span >Projects</span>
         <span>{months[month]} {date}</span>
      </div>
      <div className='flex flex-col sm:flex-row gap-x-6 mt-6 items-center justify-between'>
          <div className='flex gap-x-6 items-center'>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-bold text-lg'>45</span>
                <span className='text-gray-500'>In Progress</span>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-bold text-lg'>24</span>
                <span className='text-gray-500'>Upcomming</span>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-bold text-lg'>65</span>
                <span className='text-gray-500'>Total Completed</span>
              </div>

          </div>

          <div className='flex gap-x-4 items-center justify-center'>
                <IoGridOutline/>
                <span className='bg-black p-2 rounded-lg text-white'>
                <TfiMenuAlt/>

                </span>
          </div>
      </div>

   
      <button onClick={handleAddBox} type="button" className="text-white flex justify-start items-start mt-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>

         <div className={`box-container ${boxes.length ? "overflow-y-scroll" : ""}` }>
      {/* bg-[${color}] */}
        {boxes.map(box => (
          <div key={box.id} className={`box rounded-2xl p-2`} style={{ backgroundColor: box.color}}>
             <div className=' w-full p-2 flex justify-between items-center'>
               <div className='flex flex-col items-start text-sm text-black opacity-50 font-semibold' >
                    <span>{boxDate}</span>
                    <span>{boxYear}</span>

               </div>
               <RxCross2 onClick={()=>handleDelete(box.id)}/>
             </div>
            <div className='flex mb-4 flex-col items-center justify-center w-full'>
             <span className='font-bold text-2xl capitalize'>{box.text}</span>
             <span className='text-gray-500 text-sm'>Protyping</span>

            </div>
            
              <span className='text-sm font-bold  mb-1'>Progress</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${box.percentage}%`, backgroundColor: box.progressColor}}>
              </div>
            </div>
              <span className='text-sm flex justify-end w-full'>

                {box.percentage}%
              </span>
               <div className='flex w-full mt-4 justify-between items-center gap-x-4'>
                  <div className='flex justify-center items-center'>
                    <img className='w-[30px] h-full img' src='https://imgs.search.brave.com/GY2ZzfGbyCy_fdTegwtZW7xaa_3qzv_HPuYbkfcVWDk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMjE0ODg3MzAy/My5qcGc'/>
                    <img className='w-[30px] h-full ml-[-20px] img' src='https://imgs.search.brave.com/AFxLuc2dtGwhu1zLnNqbCVSpusBOcUYlUCnUf7LbDpo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMmNrYTEw/NE8wVU5tQlNCckcz/eHBqcS9hYmI0ZmY2/NjVmN2VkYjZmNjRi/ZjNiZTk2ODZlYWY2/ZC9oaXN0b3J5LWlt/YWdlcy1jYXJkLmpw/Zw'/>
                  </div>
                  <span className='bg-white p-1 rounded-full' style={{color:box.progressColor}}>
                  <FiPlus/>

                  </span>
                  <span className='bg-white px-2 py-1 rounded-full'>
                      <p className='text-sm' style={{color:box.progressColor}}>2 Days Left</p>

                  </span>

               </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
 -->
