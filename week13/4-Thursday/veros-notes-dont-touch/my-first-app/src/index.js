import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './FirstComponent';
import Parent from './ex1/Parent';

let myArr = ["Francisco", "Jordan", "Micah", "Joe", "Jake"];

ReactDOM.render(
  <React.StrictMode>

    <Parent firstName={myArr[0]} /> <br />
    {/* <Parent firstName={myArr[1]} /> <br />
    <Parent firstName={myArr[2]} /> <br />
    <Parent firstName={myArr[3]} /> <br /> */}
   

  </React.StrictMode>,
  document.getElementById('root')
);


//prop.firstName
// Parent 
// Child 
// Grandchild


