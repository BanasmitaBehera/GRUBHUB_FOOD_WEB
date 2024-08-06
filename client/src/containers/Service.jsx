// src/components/Service.jsx
import React from 'react';
import Payment from './Payment';


const Service = () => {
  return (
    <div className="service-page">

      <header className="service-header">
        <h1 className="service-title">Our Services</h1>
      </header>
      <section className="service-content">
        <h3 className='p-8'>
          At GrubHub, we offer a range of services designed to enhance your dining experience. Our platform is crafted to meet the diverse needs of our clients, from seamless reservations to effortless ordering and payment solutions.
        </h3>
        <div className="service-list">
          <div className="service-item ">
            <h2 className="service-item-title">Reservation Management</h2>
              <p className="service-item-description">
                Easily manage and track reservations with our intuitive system. Keep your restaurant organized and provide a smooth experience for your guests.
              </p>
              <img src='https://media.istockphoto.com/id/1334151286/photo/business-lobby-receptionist.jpg?s=612x612&w=0&k=20&c=RZNnimFyv2YtzUnYuYm0DPb6jyHNQ_66cg_ZNNnkWSU=' />
            </div>
          <div className="service-item">
            <h2 className="service-item-title">Order Processing</h2>
            <p className="service-item-description">
              Streamline order processing with our efficient tools. Handle orders swiftly and accurately, ensuring timely service for your customers.
            </p>
            <img src='https://img.freepik.com/free-vector/handling-order-processing-illustration_335657-517.jpg'/>
          </div>
          <div className="service-item">
            <h2 className="service-item-title">Payment Solutions</h2>
            <p className="service-item-description">
              Offer a variety of payment options to your customers, including digital wallets and credit/debit cards, for a convenient and secure transaction experience.
            </p>
            <img src='https://i0.wp.com/blogrevamp.cashfree.com/wp-content/uploads/2021/09/integrated-payment-systems.png?fit=5835%2C3001&ssl=1'/>
          </div>
          <div className="service-item">
            <h2 className="service-item-title">Personalized Recommendations</h2>
            <p className="service-item-description">
              Enhance customer satisfaction with personalized recommendations based on their preferences and previous orders.
            </p>
            <img src='https://abmatic.ai/hubfs/Imported_Blog_Media/a%20content%20recommendation%20in%20flat%20illustration%20style%20with%20gradients%20and%20white%20background_compressed%2085e87bd3-77a5-48de-b6cd-c9d4b30c1019.jpg' />
          </div>
        </div>
        <div>
        <h1 className='text-black text-center  mt-5 text-3xl p-2'>SUBSCRIPTIONS</h1>
        </div>
        <Payment />
      </section>
      
      
      <style jsx>{`
        .service-page {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-image: url("https://images.pexels.com/photos/9799887/pexels-photo-9799887.jpeg?auto=compress&cs=tinysrgb&w=600");
          background-color: #f8f9fa;
          background-repeat: no-repeat; 
          background-size: cover;
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
          /* Light background color */
        }

        .service-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .service-title {
          font-size: 2.5rem;
          color: #343a40; /* Dark color for the title */
        }

        .service-content {
          max-width: 1200px;
          margin: auto;
          line-height: 1.6;
          color: black; /* Slightly lighter color for text */
        }

        .service-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
        }

        .service-item {
          flex: 1 1 calc(50% - 20px); /* Two items per row */
          background-color: #ffffff; /* White background for service items */
          padding: 20px;
          border-radius: 8px; /* Rounded corners */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .service-item-title {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #212529; /* Darker color for section headings */
        }

        .service-item-description {
          font-size: 1rem;
          padding: 12px;
          color: black; /* Lighter color for description */
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .service-item {
            flex: 1 1 100%; /* Full width on smaller screens */
          }
        }
      `}</style>
      
    </div>
  );
};

export default Service;
