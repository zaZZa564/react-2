// Import necessary React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a root element for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Event handler functions
const clickLog = () => console.log('clicked');
const overLog = () => console.log('Mouse over');

// Placeholder text for input field
const text = 'Help text';

// Create input component with event handlers
const inputField = (
  <div>
    <input placeholder={text}
    onClick={clickLog} onMouseEnter={overLog}/>
    <p>
      {text == 'Help me please, im starving'? "yes" : "no"}
      </p>
  </div>
);

// Render the input field component to the DOM
root.render(inputField);