import React from 'react';
import Logo from '../assests/ecs_logo.png';

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
            <p style={{ color: "#919EAB" }}>CRM</p>
            <p style={{ color: "#919EAB" }}>Bookings</p>
            <p style={{ color: "#919EAB" }}>WhatsApp Chatbot</p>
            <p style={{ color: "#919EAB" }}>HR Management System</p>
            <p style={{ color: "#919EAB" }}>Mobile Attendance App</p>
            <p style={{ color: "#919EAB" }}>Facial Recognition App</p>
            <p style={{ color: "#919EAB" }}>Applicant Tracking System</p>
            <p style={{ color: "#919EAB" }}>School Management System</p>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Solutions</h4>
            <p style={{ color: "#919EAB" }}>Education</p>
            <p style={{ color: "#919EAB" }}>Marketing Agencies</p>
            <p style={{ color: "#919EAB" }}>Sales Team</p>
            <p style={{ color: "#919EAB" }}>Marketing Teams</p>
            <p style={{ color: "#919EAB" }}>Customer Support</p>
            <p style={{ color: "#919EAB" }}>Ecommerce</p>
            <p style={{ color: "#919EAB" }}>Healthcare</p>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Company</h4>
            <p style={{ color: "#919EAB" }}>About Us</p>
            <p style={{ color: "#919EAB" }}>Contact Us</p>
          </div>
          <div className='col-md-3 col-12'>
          <h4 className='mb-4' style={{ fontWeight: "700" }}>Other Links</h4>
            <p style={{ color: "#919EAB" }}>Terms of Services</p>
            <p style={{ color: "#919EAB" }}>Privacy Policy</p>
          </div>
        </div>
        <hr style= {{ color: "#E4E6F1", width: "1300px", marginLeft: "50px", opacity: "unset" }} />
        <div>
          <p className='d-flex justify-content-center' style={{ fontSize: "12px" }}>2024 © Copyright ECS Cloud Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;