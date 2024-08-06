import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: 'Order Online',
      description: 'Stay home and order to your doorstep',
      image: 'https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D', // Replace with your image path
    },
    {
      title: 'Dining',
      description: "View the city's favourite dining venues",
      image: 'https://media.istockphoto.com/id/1483798027/photo/restaurant-interior-with-food-buffet-table.webp?b=1&s=170667a&w=0&k=20&c=JGK1hIuAPbAnkOuDm-7udTylwGvXyRoKXesALqbk704=', // Replace with your image path
    },
    {
      title: 'Nightlife and Clubs',
      description: "Explore the city's top nightlife outlets",
      image: 'https://w0.peakpx.com/wallpaper/819/672/HD-wallpaper-nightclub-club-cool-night-awsome.jpg', // Replace with your image path
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4"> 
     <p className='text-2xl mt-4 mb-4 font-semibold capitalize text-headingColor relative text-center justify-center'>OUR SERVICES</p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded overflow-hidden cursor-pointer shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-48 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
