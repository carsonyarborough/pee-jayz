import React from 'react';
import ReactDOM from 'react-dom/client';
import Aviationstack from './Aviationstack';
import './index.css';
// import App from './App.js';
import reportWebVitals from './reportWebVitals';



function HelloWorld() {
  const now = new Date();

  const currentDateTime = now.toLocaleString();

  return (
    <>
      <h1 className="greeting">Header</h1>
      <h1 className="dateandtime">{currentDateTime}</h1>
      <h2 className="recentflight">Most Recent Flight From Ms Girl</h2>
      <h2 className="moreflights">Past Flights of Ms Girl</h2>
      <Aviationstack></Aviationstack>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
