import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminUsers from './AdminUsers';
import Dashbrd from './Dashbrd';
import Ctgory from './Ctgory';
import Concert from './Concert';
import Pay2 from './Pay2';
import Login from './Login';
import Ticket from './Ticket';
import AdminEVT from './AdminEvent';
import Users from './AdminUsers';
import TktVigentes from './TktVigentes';
import EventCreator from './EventCreator';
import Event from './Event';
import AdminPage from './AdminPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
