
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


                                // REACT STARTUP PROCESS ///
/*
    1. YOU RUN THIS LINE OF CODE: const rootElement = document.getElementById('root');
THIS LINE OF CODE GETS A REFERENCE TO A DIV WITH THE ID OF ROOT.

    2. YOU RUN THIS LINE OF CODE: const roo = createRoot(rootElement);
THIS TELLS REACT THAT YOU WANT TO TAKE CONTROL OF THAT DIV AND RENDER OUR APP TO IT.

    3. YOU ARE TELLING REACT THAT YOU WANT TO RENDER YOUR APP COMPONENTS AND SHOW ALL JSX, TURN IT INTO HTML, AND SHOW IT IN THE ROOT DIV.




 */