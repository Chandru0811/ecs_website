import React from "react";
import heroImg from "../assests/Group 1695.png";
import mail from "../assests/image 1.png";
import liveChat from "../assests/image 2.png";
import sms from "../assests/image 3.png";
import voip from "../assests/image 4.png";
import crm2 from "../assests/crm 2.png";
import policy from "../assests/policy-privacy 2.png";
import school from "../assests/school 2.png";
import facereg from "../assests/policy-privacy 1.png";
import whatsapp from "../assests/crm 1.png";
import devOps from "../assests/accounting 1.png";
import eCommerce from "../assests/school 1.png";
import accounting from "../assests/accounting 2.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center mt-5 fw-bolder">
              All-In-One Platform To Accelerate Your Business!
            </h1>
            <h1 className="text-center fw-bolder" style={{ color: "#08A391" }}>
              Up To 70% Funding
            </h1>
          </div>
          <div className="px-3 mb-5 mt-4 text-center">
            <h5>
              Offering easy and effective solutions for even the most intricate
              problems, our &nbsp;
              <span style={{ color: "#08A391" }}>
                CRM, Accounting,
                <br /> HRMS, POS, ERP and E-Commerce.
              </span>
              software products and services are designed to simplify your
              <br />
              business operations.
            </h5>
          </div>
        </div>
        <Link to="/Book">
        <button className="btn btn-primary ">
          Book
        </button></Link>
      </div>
      <div
        className="container-fluid"
        style={{ background: "linear-gradient(0deg, #d1ede9, white)" }}
      >
        <div className="col-md-8 offset-md-2 ">
          <h1 className="text-center fw-medium">
            Innovating Development, Transforming Solutions.
          </h1>
          <h6 className="text-center">
            Empowering progress, one click at a time.
          </h6>
        </div>
        <div className=" text-center  mt-5 mb-5">
          <img
            className="mb-5"
            style={{ maxWidth: "80%" }}
            src={heroImg}
            alt=""
          />
        </div>
      </div>
      <h5 className="text-center fw-bolder p-4 " style={{ color: "#003F37" }}>
        Integrates with
      </h5>

      <div className="container-fluid p-3" style={{ background: "#08A391" }}>
        <div className=" row p-5">
          <div className="col-12 rounded" style={{ background: "white" }}>
            <div className="d-flex text-center pt-3">
              <div className="col-3">
                <img style={{ maxWidth: "90%" }} src={mail} alt="mail" />
              </div>
              <div className="col-3">
                <img
                  style={{ maxWidth: "90%" }}
                  src={liveChat}
                  alt="livechat"
                />
              </div>
              <div className="col-3">
                <img style={{ maxWidth: "90%" }} src={sms} alt="sms" />
              </div>
              <div className="col-3">
                <img style={{ maxWidth: "90%" }} src={voip} alt="voIP" />
              </div>
            </div>
            <div className="d-flex text-center pb-3">
              <div className="col-3">
                <h6 className="text-center fw-bolder">Email</h6>
              </div>
              <div className="col-3">
                <h6 className="text-center fw-bolder">Live Chat</h6>
              </div>
              <div className="col-3">
                <h6 className="text-center fw-bolder">SMS</h6>
              </div>
              <div className="col-3">
                <h6 className="text-center fw-bolder">VoIP</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid pt-4 px-5"
        style={{ background: "#ECFFFD" }}
      >
        <h1 className="text-center mb-3">
          Our <span style={{ color: "#08A391" }}>Services</span>
        </h1>
        <div className="row px-3">
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img className="mt-3 bg-light p-2 rounded" src={crm2} alt="" />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                ECS CRM
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Fully customizable solutions for your growing business.
              </p>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={policy}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                ECS HRMS
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Reduce your HR staff's workload instally!
              </p>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={accounting}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                ECS Accounts
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Streamline finance management with our efficient, user-friendly
                accounting software.
              </p>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={school}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                School Management
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Efficinently manage school operations with our comprehensive
                management system.
              </p>
            </div>
          </div>
        </div>
        <div className="row px-3">
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={whatsapp}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                Whats App Automation
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Enhance communication efficiency with our WhatsApp automation
                solutions.
              </p>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={facereg}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                Facial Recognition
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Streamline attendance using our advanced facial recognition
                system.
              </p>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={devOps}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                DevOps and Cloud
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Accelerate innovation with our integrated DevOps and cloud
                solutions.
              </p>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div
              className="px-3 rounded text-center"
              style={{ height: "100%", background: "#caf1ed" }}
            >
              <div className="p-2">
                <img
                  className="mt-3 bg-light p-2 rounded"
                  src={eCommerce}
                  alt=""
                />
              </div>
              <h5 className="px-3" style={{ color: "#121722" }}>
                E-Commerce
              </h5>
              <p className="text-start p-3" style={{ color: "#919EAB" }}>
                Boost your sales woth our powerful. user-friendly eCommerece
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
