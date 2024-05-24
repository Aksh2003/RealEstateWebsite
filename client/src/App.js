import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import PropertyPage from './pages/PropertyPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/buyer-dashboard' element={<BuyerDashboard/>} />
        <Route path='/seller-dashboard' element={<SellerDashboard/>} />
        <Route path='/property/:id' element={<PropertyPage/>} />
      </Routes>
    </Router>
  );
};

export default App;



