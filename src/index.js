import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
    <Provider>
    <App />
    </Provider>
, document.getElementById('root'));


