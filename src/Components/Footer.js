import React from 'react';
import Logo from '../assests/ecs_logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center my-5'>
          <img src={Logo} alt='Logo' className='img-fluid' width={200} />
        </div>
        <div className='row mx-4'>
          <div className='col-md-3 col-12'>
            <h4 className='mb-4' style={{ fontWeight: "700" }}>Products</h4>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>CRM</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Bookings</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>WhatsApp Chatbot</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>HR Management System</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Mobile Attendance App</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Facial Recognition App</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Applicant Tracking System</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>School Management System</p></Link>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Solutions</h4>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Education</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Marketing Agencies</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Sales Team</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Marketing Teams</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Customer Support</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Ecommerce</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Healthcare</p></Link>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Company</h4>
            <Link to='/aboutus' className='text-decoration-none'><p style={{ color: "#919EAB" }}>About Us</p></Link>
            <Link to='/contactus' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Contact Us</p></Link>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Other Links</h4>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Terms of Services</p></Link>
            <Link to='#' className='text-decoration-none'><p style={{ color: "#919EAB" }}>Privacy Policy</p></Link>
          </div>
        </div>
        <hr className='mx-5' style= {{ color: "#E4E6F1", opacity: "unset" }} />
        <div>
          <p className='d-flex justify-content-center' style={{ fontSize: "12px" }}>2024 © Copyright ECS Cloud Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;