import React from 'react';
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section  >
        <p className='text-2xl mt-4 font-semibold capitalize text-headingColor relative text-center justify-center'>OUR TOP CHEFS</p>
        <section className='mt-20 grid md:grid-cols-2 gap-10 items-center no-scrollbar'>
            <div className ="container">
                <div className =" card">
                    <div className =" image ">
                        <img 
                        href = "#" 
                        src ="https://img.freepik.com/premium-photo/smiling-chef-presenting-plate-delicious-biriyani_1169880-25897.jpg?size=626&ext=jpg&uid=R157128105&ga=GA1.1.1088230805.1720806444&semt=ais_user"
                        />
                    </div>
                    <div className =" content">
                        <h2 className='text-purple-500'>VINEET BHATIA</h2>
                        <p>Vineet Bhatia is an Indian chef, restaurateur, author, and media personality. He was born on 9 December 1967in Mumbai, Maharashtra, India.</p>
                    </div>
                </div>    
            </div>
            <div className ="container">
                <div className =" card">
                    <div className =" image ">
                        <img 
                        href = "#" 
                        src ="https://img.freepik.com/premium-photo/chef-female-hispaniclatino-young-adult-confident-pose_662214-212422.jpg?uid=R157128105&ga=GA1.1.1088230805.1720806444&semt=ais_user"
                        />
                    </div>
                    <div className =" content">
                        <h2 className='text-purple-500'>NITA MEHTA</h2>
                        <p>Nita Mehta is an Indian chef, author, restaurateur, and media personality. She is highly popular for her cookbooks, cooking classes, and celebrity judge on various cooking shows. Her cooking style is Indian.</p>
                    </div>
                </div>    
            </div>
            <div className ="container">
                <div className =" card">
                    <div className =" image ">
                        <img 
                        href = "#" 
                        src ="https://img.freepik.com/premium-photo/indian-culinary-magic-ar-c_839793-104527.jpg?size=626&ext=jpg&uid=R157128105&ga=GA1.1.1088230805.1720806444&semt=ais_user"
                        />
                    </div>
                    <div className =" content">
                        <h2 className='text-purple-500'>HARPAL SINGH SOKHI</h2>
                        <p>Harpal Singh Sokhi is an Indian chef, restaurant, author, and entrepreneur. He was born in 1966 in Kharagpur, West Bengal, India. He worked as a chef with various hotels and restaurant chains.</p>
                    </div>
                </div>    
            </div>
            <div className ="container">
                <div className =" card">
                    <div className =" image ">
                        <img 
                        href = "#" 
                        src ="https://img.freepik.com/premium-photo/indian-woman-chef-luxury-hotel-kitchen_641503-84697.jpg?uid=R157128105&ga=GA1.1.1088230805.1720806444&semt=ais_user"
                        />
                    </div>
                    <div className =" content">
                        <h2 className='text-purple-500'>ANJUM ANAND</h2>
                        <p>Anjum Anand is an Indian British TV chef and food writer. She was born on 15 August 1971 in London, England.</p>
                    </div>
                </div>    
            </div>
        </section>   
    </section>
  );
};

export default TeamSection;
