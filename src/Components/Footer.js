import React from "react";
import Logo from "../assests/ecs_logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <section>
      <div className="container-fluid">
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <img src={Logo} alt="Logo" className="img-fluid" width={230} />
          <div className="d-flex">
            <Link
              to="https://www.facebook.com/raaj.yuven.3/"
              className="footer_link"
            >
              <span className="p-3 footer-icon">
                <FaFacebookF />
              </span>
            </Link>
            <Link
              to="https://wa.me/6588941306?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.Can%20you%20please%20help%20me%3F"
              className="footer_link"
            >
              <span className="p-3  footer-icon">
                <IoLogoWhatsapp />
              </span>
            </Link>
            <Link
              to="https://www.linkedin.com/in/ecscloudinfotech/"
              className="footer_link"
            >
              <span className="p-3  footer-icon">
                <FaLinkedin />
              </span>
            </Link>
            <Link
              to="https://twitter.com/ecscloudinfote2"
              className="footer_link"
            >
              <span className="p-3  footer-icon">
                <FaXTwitter />
              </span>
            </Link>
            <Link
              to="https://www.instagram.com/ecscloudinfotech/"
              className="footer_link"
            >
              <span className="p-3  footer-icon">
                <RiInstagramFill />
              </span>
            </Link>
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-md-3 col-12">
            <h4 className="mb-4" style={{ fontWeight: "700" }}>
              Products
            </h4>
            <Link to="#" className="footer_link">
              <p>CRM</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Bookings</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>WhatsApp Chatbot</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>HR Management System</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Mobile Attendance App</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Facial Recognition App</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Applicant Tracking System</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>School Management System</p>
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <h4 className="mb-4" style={{ fontWeight: "700" }}>
              Solutions
            </h4>
            <Link to="#" className="footer_link">
              <p>Education</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Marketing Agencies</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Sales Team</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Marketing Teams</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Customer Support</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Ecommerce</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Healthcare</p>
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <h4 className="mb-4" style={{ fontWeight: "700" }}>
              Company
            </h4>
            <Link to="/aboutus" className="footer_link">
              <p>About Us</p>
            </Link>
            <Link to="/contactus" className="footer_link">
              <p>Contact Us</p>
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <h4 className="mb-4" style={{ fontWeight: "700" }}>
              Other Links
            </h4>
            <Link to="#" className="footer_link">
              <p>Terms of Services</p>
            </Link>
            <Link to="#" className="footer_link">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
        <hr className="mx-5" style={{ color: "#E4E6F1", opacity: "unset" }} />
        <div>
          <p
            className="d-flex justify-content-center"
            style={{ fontSize: "12px" }}
          >
            2024 © Copyright ECS Cloud Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
