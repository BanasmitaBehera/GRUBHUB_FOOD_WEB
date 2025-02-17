import React, { useEffect,useState } from 'react'
import HomeContainer from './HomeContainer';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import CardSection from './CardSection';
import { useStateValue } from '../context/StateProvider';
import FooterContainer from './FooterContainer';
import TeamSection from './TeamSection';
import RowContainer from "./RowContainer"
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import Payment from './Payment';


const MainContainer = () => {

  const [{cartShow,foodItems}, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0)
  
  useEffect(() => {}, [{cartShow,scrollValue}]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      
      <HomeContainer />
      <section className="w-full my-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative 
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
              Our fresh and healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{scale: 0.75}} 
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={() => setscrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white"/>
            </motion.div>
            <motion.div whileTap={{scale: 0.75}} 
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={() => setscrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white"/>
            </motion.div>
          </div>
        </div>
        <RowContainer 
        scrollValue = {scrollValue}
        flag={true} 
        data = {foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
      <MenuContainer />
      <CardSection />
      <TeamSection />
      <FooterContainer />
      
     
      {cartShow &&(
         <CartContainer />
      )}

      {/* <Payment /> */}


    </div>
    );
  };

export default MainContainer;
