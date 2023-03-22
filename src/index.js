// 1) Import React and ReactDOM libraries
import React from 'react';                              // React is the library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client';                // ReactDOM is the library that knows how to get a component to  show up in the browser

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');            // el (element) is a reference to the div with ID root

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);                  // root is a reference to the div with ID root

// 4) Create a react component
function App() {                                     // App is a function that returns JSX
    return <h1>Hi there!</h1>                       // WRITING THIS <h1>Hi there!</h1> DOESNT ACTUALLY MAKE ANYTHING APPEAR ON THE BROWSER AUTOMATICALLY
}                                                   // THIS JUST CREATES AN INSTRUCTION FOR REACT, TELLING IT TO MAKE AN ELEMENT. WE HAVE TO RETURN IT FROM A COMPONENT IN ORDER FOR REACT TO USE IT.

// 5) Show the component on the screen
root.render(<App />);                              // root.render() takes a component and renders it to the screen
