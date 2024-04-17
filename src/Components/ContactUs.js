import React from "react";
import Contact from "../assests/contact.png";
import {BiLogoGmail , BiSolidPhoneCall  } from "react-icons/bi";


import { MdOutlineMyLocation } from "react-icons/md";


function ContactUs() {
  return (
    <section>
      <div className="container-fluid my-4">
        <div className="row contact-row">
          <div className="col-1"></div>
          <div className="col-md-5 col-12 mt-5">
            <h1>
              Let's <span className="text-success">Talk!</span>
            </h1>
            <p>
              We love hearing from you! Whether you have a question, feedback,
              or just want to chat about your ideas, feel free to reach out.
              <span className="text-success">
                Here’s how you can contact us:
              </span>
            </p>
            <div className="d-flex mb-3">
            <div className="mx-2 contact_icon_color d-flex align-items-center"><BiLogoGmail  /></div>
            
              <p className="m-1">info@ecscloudinfotech.com</p>
            </div>

            <div className="d-flex mb-3">
            <div className="mx-2 contact_icon_color d-flex align-items-center"><BiSolidPhoneCall  /></div>
              
              <p className="m-1">+65 8894 1306</p>
            </div>

            <div className="d-flex mb-3">
            <div className="mx-2 contact_icon_color d-flex align-items-center"><MdOutlineMyLocation   /></div>
              
              <p className="m-1">
                The Alexcier, 237 Alexandra Road, #04-10, Singapore-159929.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-end ">
           <img src={Contact} alt="contact" className="img-fluid" ></img>
          </div>
        </div>

        <form>
          <div className="container mt-5 py-4 p-5"
            style={{ background: "#E1FDFA", borderRadius: "20px" }} >
            <div className="row">
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  First Name<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Last Email<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Eamil<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Mobile<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-12 mb-2">
                <lable className="form-lable">
                  Enquiry<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <textarea type="text" rows="5" className="form-control" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn  btn-success" type = "button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
