// src/components/AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import team1 from '../assests/teams/t1.jpg';
import team2 from '../assests/teams/t2.jpg';
import team3 from '../assests/teams/t3.jpg';
import team4 from '../assests/teams/t4.jpg';


const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h2 className="about-us-header-title">About Us</h2>
      </header>
      <section className="about-us-content">
        <h2>
          Welcome to Gruhbub! We are dedicated to enhancing the dining experience by providing a 
          user-friendly restaurant website that simplifies reservations, orders, and payments, 
          while offering seamless service for both guests and restaurant staff.
        </h2>
        <h2 className="about-us-section-title text-center">Our Mission</h2>
        <p className="about-us-paragraph">
        Our aim is to attract customers by showcasing the restaurant's cuisine, providing essential information, 
        enhancing customer experience, building brand identity, driving sales and revenue, fostering customer loyalty through newsletters, 
        loyalty programs, and social media integration, and communicating with the community through news, events, 
        and community involvement.
        </p>
        <h2 className="about-us-section-title text-center">Our Values</h2>
        <ul className="about-us-list">
          <li className="about-us-list-item"><b>Customer Satisfaction:</b> Meeting and exceeding customer expectations is the foundation 
            of any business, as satisfied customers lead to repeat business, positive word-of-mouth, and increased loyalty.</li>
          <li className="about-us-list-item"><b>Operational Efficiency:</b> This refers to how smoothly and effectively a business operates. 
            It involves optimizing processes, reducing waste, and increasing productivity. 
            Efficient operations contribute to cost savings, faster delivery times, and improved customer service.</li>
          <li className="about-us-list-item"><b>Innovation and Adaptability:</b> These are the driving forces behind growth and survival. 
            Innovation involves introducing new ideas, products, or services, while adaptability is the ability to respond to changes 
            in the market or environment. Both are essential for staying competitive and relevant.</li>
          {/* Add more values as needed */}
        </ul>
        <h2 className="about-us-section-title text-center">Our Team</h2>
        <p className="about-us-paragraph text-center">
          Meet the amazing people behind Grubhub:
        </p>
        <div className="about-us-team">
          <div className="about-us-team-member">
            <img src={team1} alt="Team Member Name" className="about-us-team-member-image" />
            <h3 className="about-us-team-member-name">Banasmita Behera</h3>
            <p className="about-us-team-member-role"> Developer</p>
          </div>
          <div className="about-us-team-member">
            <img src={team2} alt="Team Member Name" className="about-us-team-member-image" />
            <h3 className="about-us-team-member-name">Shalini Bhattacharjee</h3>
            <p className="about-us-team-member-role">Developer</p>
          </div>
          <div className="about-us-team-member">
            <img src={team3} alt="Team Member Name" className="about-us-team-member-image" />
            <h3 className="about-us-team-member-name">Jyotirekha Behera</h3>
            <p className="about-us-team-member-role">Technical Architect</p>
          </div>
          <div className="about-us-team-member">
            <img src={team4} alt="Team Member Name" className="about-us-team-member-image" />
            <h3 className="about-us-team-member-name">Soumya Sefalika Das</h3>
            <p className="about-us-team-member-role">Designer</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};



export default AboutUs;
