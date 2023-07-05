import React from 'react';
import './App.css'
import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
  import Login from './Login';
  import Ctgory from './Ctgory';
  import Ticket from './Ticket';
  import TktVigentes from './TktVigentes';
  import Event from './Event';
  import Concert from './Concert';
  import Pay2 from './Pay2';
  import AdminPage from './AdminPage';
  import EventCreator from './EventCreator';
  import Users from './AdminUsers';
  import AdminEVT from './AdminEvent';
  import Dashbrd from './Dashbrd';



function App() {
  return (
    <BrowserRouter>
      <Routes>        
      <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/AdminEvent" element={<AdminEVT/>} /> 
        <Route path="/Category" element={<Ctgory/>} /> 
        <Route path="/TicketV" element={<TktVigentes/>} /> 
        <Route path="/Event" element={<Event/>} /> 
        <Route path="/Concert" element={<Concert/>} /> 
        <Route path="/Pay2" element={<Pay2/>} /> 
        <Route path="/Ticket" element={<Ticket/>} /> 
        <Route path="/AdminPage" element={<AdminPage/>} /> 
        <Route path="/AdminUser" element={<Users/>} /> 
        <Route path="/Dashbrd" element={<Dashbrd/>} /> 
        <Route path="/EventCreator" element={<EventCreator/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
