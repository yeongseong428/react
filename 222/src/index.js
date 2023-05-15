import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Library from './03/Library';
import Clock from './04/Clock';
import CommentList from './05/CommentList';
import Accomodate from './07/Accomodate';
import ConfirmButton from './08/ConfirmButtion';
import Control from './09/Control';
import LoadingPage from './09/LandingPage';
import Blog from './09/Blog';
import WelcomeDialog from './13/WelcomeDialog';
import ProfileCard from './13/ProfileCard';
import App from './13/App';
import DarkOrLight from './13/DarkOrLight';
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);
}, );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
