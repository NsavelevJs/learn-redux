import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
// 
// STORE => GLOBALIZED STATE

// ACTION INCREMENT 
const increment = () => {
  return {type: "INCREMENET"}
} 
const decrement = () => {
  return {type: "DECREMENT"}
} 
// reducer
const counter = (state = 0, action)=>{
  switch(action.type){
  case "INCREMENT" :
    return state++
    case "DECREMENT" :
    return state--
  }
}
let store = createStore(counter)
// DISPATCH 



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
