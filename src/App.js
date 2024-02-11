import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Nav />
        <Main />
        <Menu />
        <Footer />
   </>     
  );
}

export default App;
