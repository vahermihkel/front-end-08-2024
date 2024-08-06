import React from 'react'; // node_modulest tuleb kui ei ole ./ või ../ ees
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Navigeerimine ---> URLi muutmine
// localhost:3000
// localhost:3000/ostukorv
// localhost:3000/esindused

// terviseportaal.ee/toolaud
// terviseportaal.ee/kontaktid
// terviseportaal.ee/uudised

// 1. installima node_module kausta navigeerimiseks vajalikud failid
//        npm install react-router-dom
// 2. võtma sealt node_module kaustast BrowserRouteri
//        import { BrowserRouter } from "react-router-dom";
// 3. ümbritsema <App /> tagi, mis on tegelikult App.js fail, BrowserRouteriga
// 4. tegema seosed App.js failis URLi ja sisu vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
