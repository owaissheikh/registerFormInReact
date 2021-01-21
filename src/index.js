import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import API from './API';
import Asyn from './Asyn';
import Search from './Search';
import Ref from './Ref';
import Loading from './Loading'
import ErrorHandle from './ErrorHandle'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    {/* <API/> */}
    {/* <Asyn/> */}
    {/* <Search/> */}
    {/* <Ref/> */}
    {/* <Loading/> */}
    <ErrorHandle/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
