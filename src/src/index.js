import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Registration from './Pages/registration';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Scenarios from './Pages/scenarios';
import PaginationEx from './Pages/pagination';
import Navigation from './Pages/navigation';
import UseCases from './Pages/usecases';
import UseCasesRegistration from './Pages/usecaseregistration';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation></Navigation>
    <Router>
      <Routes>
        <Route exact path="/" element={<PaginationEx/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/useCases" element={<UseCases/>} />       
        <Route path="/usecaseregistration" element={<UseCasesRegistration/>} />  
      </Routes>
    </Router>
    
  </React.StrictMode>
);

reportWebVitals();
