import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../styles/Custom.css";
import Hero from '../Components/Hero';
import Products from '../Components/Products';
import CloudServices from '../Components/CloudServices';
import Solutions from '../Components/Solutions';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';

function Admin() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cloudservices' element={<CloudServices />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default Admin