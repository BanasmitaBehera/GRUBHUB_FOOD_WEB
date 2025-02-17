import { motion } from "framer-motion";
import React , {useState} from "react";
import { fadeInOut } from "../animations";


const LoginInput = ({
    placeholder, 
    icon, 
    inputState, 
    inputStateFunc, 
    type, 
    isSignUp,
    }) => {
        const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div 
    {...fadeInOut}
    className={`flex m-3 items-center justify-center gap-4 bg-lime-200 backdrop-blur-md rounded-md w-full px-4 py-2 ${isFocus ? "shadow-md shadow-red-400" : "shadow-none"}
    `}> 

    {icon}
    <input 
    type={type} 
    placeholder={placeholder} 
    className="w-full h-full bg-transparent text-black text-lg font-semibold border-nonen outline-none"
    value={inputState}
    onChange={(e) => inputStateFunc(e.target.value)}
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}/>
    </motion.div>
  );
};

export default LoginInput