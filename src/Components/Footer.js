import React from 'react';
import Logo from '../assests/ecs_logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center my-5'>
          <img src={Logo} alt='Logo' className='img-fluid' width={230} />
        </div>
        <div className='row mx-4'>
          <div className='col-md-3 col-12'>
            <h4 className='mb-4' style={{ fontWeight: "700" }}>Products</h4>
            <Link to='#' className='footer_link'><p>CRM</p></Link>
            <Link to='#' className='footer_link'><p>Bookings</p></Link>
            <Link to='#' className='footer_link'><p>WhatsApp Chatbot</p></Link>
            <Link to='#' className='footer_link'><p>HR Management System</p></Link>
            <Link to='#' className='footer_link'><p>Mobile Attendance App</p></Link>
            <Link to='#' className='footer_link'><p>Facial Recognition App</p></Link>
            <Link to='#' className='footer_link'><p>Applicant Tracking System</p></Link>
            <Link to='#' className='footer_link'><p>School Management System</p></Link>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Solutions</h4>
            <Link to='#' className='footer_link'><p>Education</p></Link>
            <Link to='#' className='footer_link'><p>Marketing Agencies</p></Link>
            <Link to='#' className='footer_link'><p>Sales Team</p></Link>
            <Link to='#' className='footer_link'><p>Marketing Teams</p></Link>
            <Link to='#' className='footer_link'><p>Customer Support</p></Link>
            <Link to='#' className='footer_link'><p>Ecommerce</p></Link>
            <Link to='#' className='footer_link'><p>Healthcare</p></Link>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Company</h4>
            <Link to='/aboutus' className='footer_link'><p>About Us</p></Link>
            <Link to='/contactus' className='footer_link'><p>Contact Us</p></Link>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Other Links</h4>
            <Link to='#' className='footer_link'><p>Terms of Services</p></Link>
            <Link to='#' className='footer_link'><p>Privacy Policy</p></Link>
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