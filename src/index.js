import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function clickLog() {
  console.log('clicked');
}
function overLog() {
  console.log('Mouse over');
}
const inputField = <input placeholder="Help text"
  onClick={clickLog} onMouseEnter={overLog}/>;

root.render(inputField);