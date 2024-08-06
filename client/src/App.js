import { getAuth } from 'firebase/auth';
import React, {useEffect, useState } from 'react';
import {  Route,Routes } from 'react-router-dom';
import { validateUserJWTToken } from './api';
import { app } from "./config/firebase.config";
import { CheckoutSuccess, Login, Menu } from "./containers";
import { setUserDetails} from "./context/actions/userActions";
import { CreateContainer, Header, MainContainer }  from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';


import { AboutUs, Service } from "./containers";






const App = () => {
  const firebaseAuth = getAuth(app);
  const [{foodItems}, dispatch] = useStateValue();
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      })
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const dispatch = useDispatch()

  useEffect(() => {
    setisLoading(true);
    firebaseAuth.onAuthStateChanged(cred => {
      if(cred){
        cred.getIdToken().then(token => {
          validateUserJWTToken(token).then(data => {
            dispatch(setUserDetails(data))
          });
        })
      }
    });
  }, [dispatch, firebaseAuth])
  return (
    <AnimatePresence  mode='wait'>
    <div className="w-screen h-screen flex flex-col no-scrollbar " >
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full custom-gradient">
        <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout-success" element={<CheckoutSuccess/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
        
      </main>
    
    </div>
    </AnimatePresence>
  )
}

export default App