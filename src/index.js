import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
let postsData = [
  {id: 1, message: 'Hi', likesCount: 5},
  {id: 2, message: 'Yo', likesCount: 15},
  {id: 3, message: 'Yo', likesCount: 25}
]

let dialogsData = [
  { id: 1, name: 'Alisa' },
  { id: 2, name: 'Lena' },
  { id: 3, name: 'Anastasia' },
  { id: 4, name: 'Marta' },
  { id: 5, name: 'Jroslav' },
]

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hove ara you' },
  { id: 3, message: 'Yo' },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData ={postsData} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
