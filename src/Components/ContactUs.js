import React from "react";
import Contact from "../assests/contact.png";
import Mail from "../assests/mail.png";
import Phone from "../assests/phone.png";
import Location from "../assests/location.png";

function ContactUs() {
  return (
    <section>
      <div className="container  my-4">
        <div className="row">
          <div className="col-md-6 col-12 mt-5">
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
              <img src={Mail} alt="avatar" className="img-fluid mx-2" />
              <p className="m-1">info@ecscloudinfotech.com</p>
            </div>

            <div className="d-flex mb-3">
              <img src={Phone} alt="avatar" className="img-fluid mx-2" />
              <p className="m-1">+65 8894 1306</p>
            </div>

            <div className="d-flex mb-3">
              <img src={Location} alt="avatar" className="img-fluid mx-2" />
              <p className="m-1">
                The Alexcier, 237 Alexandra Road, #04-10, Singapore-159929.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img src={Contact} alt="" className="img-fluid" />
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
              <button className="btn btn-success" type = "button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
