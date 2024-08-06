import React  from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router} from "react-router-dom";

import {createStore} from "redux"
import { Provider } from "react-redux";
import myReducers from "./context/reducers";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";



const myStore = createStore(
    myReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
                <StateProvider initialState={initialState} reducer={reducer}>
                <Provider store={myStore}>
                <App />
                </Provider>
                </StateProvider>
        </Router>
    </React.StrictMode>
)