import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseURL } from "../api/index";
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';



const PayButton = ({cartItems}) => {

    const user = useSelector((state) => state.user)

const handelCheckout = () => {
  
    if (!user || !user.data) {
        console.log("User is not logged in or user data is not available");
        alert("Please log in to proceed with the checkout.");
        return;
      }
    axios.post(`${baseURL}/stripe/create-checkout-session`, {
        cartItems,
        userId: user.data,
    }).then((res) => {
        if(res.data.baseURL){
            window.location.href = res.data.baseURL
        }
    }).catch((err) => console.log(err.message));
};

  return (
    <div>
        <motion.button 
        
        {...buttonClick}
        whileTap={{scale: 0.8}}
        type='button'
        className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover: shadow-lg" 
        onClick={() => handelCheckout()}>
            Checkout
        </motion.button>
    </div>
  )
}

export default PayButton