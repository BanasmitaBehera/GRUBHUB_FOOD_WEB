// import React from "react";
// import delivery from "../assests/delivery.png";

// import { heroData } from "../utils/data";



// const HomeContainer = () => {
//   return (
//     <section
//       className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
//       id="home"
      
//     >
//       <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-start gap-5">
//         <div className="flex items-center gap-2 justify-center bg-yellow-200 px-2 py-1  rounded-full">
//           <p className="text-base text-orange-600 font-semibold">
//             Bike Delivery
//           </p>
//           <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden">
//             <img
//               src={delivery}
//               className="w-full h-full object-contain"
//               alt="delivery"
//             />
//           </div>
//         </div>
//         <p className="text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor">
//           The Fastest Delivery in{" "}
//           <span className="text-orange-500 text-[3rem] md:text-[5rem]">
//             Your City
//           </span>
//         </p>
//         <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
//           WELCOME! Grubhub is there for you...
//         </p>
        
//         <button
//           type="button"
//           className="bg-gradient-to-br from-yellow-200 to-yellow-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//         >
//           Order Now
//         </button>
//       </div>

//       <div className="py-2  flex-2 items-center relative">
       
//         <div className="w-full h-full absolute top-0 left-0 flex  
//         items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
//           {heroData && heroData.map(n =>(
//             <div key={n.id} className=" lg:w-190 p-4 bg-cardOverlay 
//             backdrop:blur-md rounded-3xl flex flex-col items-center 
//             justify-center drop-shadow-lg">
//             <img src={n.imagesrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="c4" />
//             <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
//               {n.name}
//               </p>
//               <p className="text-[12px] lg:text-sm font-semibold text-headingColor my-1 lg:my-3">
//                   {n.decp}
//                 </p>
//               <p className="text-sm font-semibold text-headingColor"> 
//                 <span className="text-xs text-purple-600">$</span>  
//                 {n.price}
//               </p>
              

        
//           </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeContainer;

import React, { useState, useEffect } from 'react';
import "./HomeContainer.css";


function HomeContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://t4.ftcdn.net/jpg/07/00/51/31/240_F_700513170_O7YcHfthnNLda5YD37awMKb11jcLmQ4e.jpg', // Replace with your image URLs
      title: ' Crafted with Love.',
      buttonText: 'Discover Now',
    },
    {
        image:"https://t3.ftcdn.net/jpg/07/06/77/82/240_F_706778224_NW4eN5ByH23QOmjxZULA7qI6XVSq7TVr.jpg",
        buttonText: 'Order Now',
    },
    {
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: 'Order Now',
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className="content">
          <h2>{slides[currentSlide].title}</h2>
          <button>{slides[currentSlide].buttonText}</button>
        </div>
      </div>

      <div className="navigation">
        <button onClick={prevSlide}>&#10094;</button>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? 'dot active' : 'dot'}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
}

export default HomeContainer;
  