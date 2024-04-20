import React from "react";
import image from "../assests/About.png";
import card1 from "../assests/card-1.png";
import card2 from "../assests/card-2.png";
import card3 from "../assests/card-3.png";
import card4 from "../assests/card-4.png";
import card5 from "../assests/card-5.png";
import card6 from "../assests/card-6.png";
import card7 from "../assests/card-7.png";
import card8 from "../assests/card-8.png";
import "../styles/Custom.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
            <h1 className="mb-4">
              About <span className="text-success">Us!</span>
            </h1>
            <p>
              ECS Cloud Infotech is a consulting company that focuses on AI CRM
              solutions, Whatsapp automation, AWS cloud computing, and on-demand
              systems. ECS Cloud Infotech offers a suite of business
              applications encompassing CRM, HRMS, ATS, Accounting, Inventory,
              Point of Sale, Helpdesk, eCommerce, Facial Attendance, Chatbot
              Automation, Generative AI, Project Management, and more, catering
              to all your company's requirements.
            </p>
            <p>
              ECS Cloud Infotech's unique value proposition is to be at the same
              time very easy to use and fully integrated.
            </p>
            <Link to="/DemoBooking">
              <button className="btn btn-button">Book Demo</button>
            </Link>
          </div>
          <div className="col-md-6 col-12">
            <img src={image} alt="" className="img-fluid"></img>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ background: "#E1FDFA" }}>
        <div className="row mb-3">
          <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
            <div className="card card_bg_color">
              <img src={card1} className="card-img-top card_image" alt="" />
              <div className="card-body mx-3">
                <h5 className="card-title">Empowering Business Innovation</h5>
                <p className="card-text">
                  You can come to us at any stage of your project - from just an
                  idea to architecture, from development to quality assurance
                  and support. Our mission is to help businesses build the
                  future and further grow into outstanding companies, using
                  cutting-edge technologies and best practices in software
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-12  d-flex flex-column justify-content-center">
            <div className="card card_bg_color_left mb-3 p-3">
              <div className="row">
                <div className="col-md-8 col-12 card-body">
                  <h5 className="card-title" style={{ marginLeft: "15px" }}>
                    Integrated Business Solutions for Enhanced Efficiency and
                    Growth
                  </h5>
                  <p className="card-text " style={{ marginLeft: "15px" }}>
                    ECS CRM solutions help businesses manage interactions with
                    customers and clients, while our ERP solutions help automate
                    various business processes. Our eCommerce solutions enable
                    businesses to expand their reach and grow their sales
                    online. And our POS and mobile app development solutions
                    provide businesses with the tools they need to process
                    transactions and engage customers on the go.
                  </p>
                </div>
                <div className="col-md-4 col-12">
                  <img
                    src={card2}
                    className="card-img-right card_image_right"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="card card_bg_color_left mb-3 p-3">
              <div className="row">
                <div className="col-md-8 col-12 card-body">
                  <h5
                    className="card-title py-2"
                    style={{ marginLeft: "15px" }}
                  >
                    Customized ERP Solutions for Streamlined Business Processes
                  </h5>
                  <p className="card-text" style={{ marginLeft: "15px" }}>
                    ECS expertise in providing comprehensive Enterprise Resource
                    Planning (ERP) solutions. We understand the importance of
                    streamlining and automating business processes for the
                    success of any organization. Our team of experts is
                    dedicated to delivering customized ERP solutions that fit
                    the unique needs of each of our clients.
                  </p>
                </div>
                <div className="col-md-4 col-12">
                  <img
                    src={card3}
                    className="card-img-right card_image_right"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="card card_bg_color_left mb-3 p-3">
              <div className="row">
                <div className="col-md-8 col-12 card-body">
                  <h5 className="card-title" style={{ marginLeft: "15px" }}>
                    Transformative ERP Solutions for Integrated Business
                    Management
                  </h5>
                  <p className="card-text" style={{ marginLeft: "15px" }}>
                    Our ERP solutions integrate various business functions such
                    as finance, accounting, sales, marketing, inventory
                    management, and supply chain management. This allows
                    businesses to manage and analyze data across the
                    organization in real time, improving efficiency, and
                    decision-making.
                  </p>
                </div>
                <div className="col-md-4 col-12">
                  <img
                    src={card4}
                    className="card-img-right card_image_right"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 col-12  d-flex flex-column justify-content-center">
            <div className="card card_bg_color_right mb-3 p-3">
              <div className="row ">
                <div className="col-md-4 col-12">
                  <img
                    src={card5}
                    className="card-img-right card_image_right"
                    alt=""
                  />
                </div>
                <div className="col-md-8 col-12 card-body">
                  <h5
                    className="card-title py-3"
                    style={{ marginLeft: "15px" }}
                  >
                    Enhance Your Reach with Strategic Digital Marketing Services
                  </h5>
                  <p className="card-text" style={{ marginLeft: "15px" }}>
                    We specialized in Digital marketing services to help
                    companies promote their products or services online and
                    reach their target audience through various digital
                    channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card_bg_color_right mb-3 p-3">
              <div className="row">
                <div className="col-md-4 col-12">
                  <img
                    src={card6}
                    className="card-img-right card_image_right"
                    alt=""
                  />
                </div>
                <div className="col-md-8 col-12 card-body">
                  <h5 className="card-title" style={{ marginLeft: "15px" }}>
                    Empowering Digital Excellence with Specialized Solutions
                  </h5>
                  <p className="card-text" style={{ marginLeft: "15px" }}>
                    We specialize in providing cutting-edge solutions for
                    Content Management Systems (CMS), Helpdesk, Digital
                    Marketing, and Omnichannel Marketing. We understand the
                    importance of effective communication, management and
                    marketing in today's digital landscape. Our team of experts
                    is dedicated to delivering customized solutions that fit the
                    unique needs of each of our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card_bg_color_right mb-3 p-3">
              <div className="row">
                <div className="col-md-4 col-12">
                  <img
                    src={card7}
                    className="card-img-right card_image_right"
                    alt=""
                  />
                </div>
                <div className="col-md-8 col-12 card-body">
                  <h5 className="card-title" style={{ marginLeft: "15px" }}>
                    Empowering Digital Excellence with Specialized Solutions
                  </h5>
                  <p className="card-text" style={{ marginLeft: "15px" }}>
                    Our HR Management Systems are designed to streamline and
                    automate various HR processes such as recruitment,
                    onboarding, employee management, performance appraisal, and
                    benefits administration. Our Payroll solutions provide
                    businesses with tools to manage employee compensation and
                    benefits, compliance, and tax filing. Our HR solutions
                    include tools for employee engagement, training and
                    development, and compliance management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
            <div className="card card_bg_color_bottom">
              <img src={card8} className="card-img-top card_image" alt="" />
              <div className="card-body mx-3">
                <h5 className="card-title">
                  Comprehensive Business Solutions for Efficiency and Growth
                </h5>
                <p className="card-text">
                  Our CMS solutions help businesses easily create, manage and
                  publish content on their website. Our helpdesk solution
                  provides businesses with a centralized platform to manage and
                  resolve customer inquiries and issues. Our digital marketing
                  solutions help businesses reach their target audience and
                  drive website traffic and conversion. And our Omnichannel
                  marketing solutions provide businesses with the tools they
                  need to reach and engage customers across multiple channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
