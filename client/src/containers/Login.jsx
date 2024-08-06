import React, { useState } from 'react'
// import { LoginBg } from "../assests"

import { LoginInput } from '../components';
import {FaEnvelope, FaLock, FcGoogle} from "../assests/icons";
import { motion } from "framer-motion";
import { buttonClick } from '../animations';


import { getAuth , signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateUserJWTToken } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userEmail, setuserEmail] = useState("");
    const [isSignup, setisSignup] = useState(false);
    const [password, setpassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("");

 
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate()

    const loginWithGoogle = async () => {
      await signInWithPopup(firebaseAuth,provider).then(userCred => {
        firebaseAuth.onAuthStateChanged(cred => {
          if(cred){
            cred.getIdToken().then(token => {
              validateUserJWTToken(token).then(data => {
                console.log(data);
              });
              navigate("/", {replace: true});
            })
          }
        })
      })
    }

    const signUpWithEmailPass = async () => {
      if((userEmail === "" || password === "" || confirm_password === "" ) ){
        //alert message
      }else{
        if(password === confirm_password){
          setuserEmail("");
          setpassword("");
          setconfirm_password("");
          await createUserWithEmailAndPassword(
            firebaseAuth, 
            userEmail, 
            password
          ).then(userCred =>{
            firebaseAuth.onAuthStateChanged(cred => {
              if(cred){
                cred.getIdToken().then(token => {
                  validateUserJWTToken(token).then(data => {
                    console.log(data);
                  });
                  navigate("/", {replace: true});
                })
              }
            })
          })
          
        }else{
          //alert message
        }
      }
    };

  

    const signInWithEmailPass = async () =>{
      if(userEmail !== "" && password !== ""){
        await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(userCred => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if(cred){
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  console.log(data);
                });
                navigate("/", {replace: true});
              })
            }
          });
        }
      );
        
      }else{
        //alert message
      }
  }

  return (
    <div className='w-screen h-screen fixed overflow-hidden flex' >
        {/* Background Image */}
        <img 
        src="https://plus.unsplash.com/premium_photo-1666353535582-9268ce1a981c?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-full object-cover absolute top-0 left-0"
         alt="" 
         />

        {/* Content box */}
        <div className="flex flex-col items-center bg-rgba(255,255,255,0.4) mx-56 my-28 w-[80%] md:w-508 h-[500px] mr-80 backdrop-blur-md z-30 p-4 px-8">
            {/* Logo section */}
            <div className="flex items-center justify-start gap-10 w-full ">
              
                <p className="text-white font-semibold text-3xl">GrubHub</p>
            </div>

            {/* welcome text */}
            <p className="text-3xl font-semibold text-white">Welcome Back</p>
            <p className="text-2xl front-semibold text-white -mt-1"> {isSignup ? "Sign Up" : "Sign In"} with following</p>

            {/* Input section */}
            <div className="w-full flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">

              <LoginInput 
              placeholder={"Email Here"} 
              icon={<FaEnvelope className="text-xl text-textColor"/>}
              inputState={userEmail} inputStateFunc={setuserEmail} type="email" 
              isSignUp={isSignup}
              />

              <LoginInput 
              placeholder={"password Here"} 
              icon={<FaLock className="text-xl text-textColor"/>}
              inputState={password} inputStateFunc={setpassword} type="password" 
              isSignUp={isSignup}
              />
              {isSignup && (
                  <LoginInput 
                  placeholder={"Confirm password Here"} 
                  icon={<FaLock className="text-xl text-textColor"/>}
                  inputState={confirm_password} 
                  inputStateFunc={setconfirm_password} type="password" 
                  isSignUp={isSignup}
                  />
              )}
              {!isSignup ? (
                <p className='text-white'>
                  Doesn't Have an account? 
                <motion.button {...buttonClick} 
                className='text-black text-xl underline cursor-pointer bg-transparent'
                onClick={() => setisSignup(true)}>
                   Create one
                </motion.button>
                </p>
               ) :( 
                <p className='text-white'>
                Already have an account:{""}
              <motion.button {...buttonClick} 
              className='text-red-400 underline cursor-pointer bg-transparent'
              onClick={() => setisSignup(false)}>
              
              Sign In here 
              </motion.button>
              </p>
               )}
               {/* Button Section */}
             {isSignup ? (
               < motion.button 
               {...buttonClick} 
               className='w-full px-4 py-2 text-white rounded-md bg-red-400 cursor-pointer text-xl capitalize hover:bg-red-500 transition-all duration-150'
               onClick={signUpWithEmailPass}>
                  Sign Up
               </motion.button>
               ) :(
                 < motion.button 
                 {...buttonClick}
                 onClick={signInWithEmailPass} 
                 className='w-full px-4 py-2 text-white rounded-md bg-red-400 cursor-pointer text-xl capitalize hover:bg-red-500 transition-all duration-150'>
                  Sign In
                 </motion.button>
             )}
            </div>
            {/* Line */}
            <div className='flex items-center justify-between gap-16'>
              <div className='w-24 h-[1px] rounded-md bg-white'></div>
              <p className='text-white'>or</p>
              <div className='w-24 h-[1px] rounded-md bg-white'></div>
            </div>
            <motion.div {...buttonClick} 
            className='flex items-center justify-center px-20 py-2 bg-slate-100 backdrop-blur-md cursor-pointer rounded-3xl gap-4'
            onClick={ loginWithGoogle }>
             <FcGoogle className='text-3xl'/>
              <p classname="capitalize text-base text-headingColor">
                 SignIn with Google
              </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Login