import React from 'react';
import EcsCrm from "../../assests/ecsCrm.png";
import { Link } from "react-router-dom"

function CRM() {
  return (
    <div className="container">
      <div className="row d-flex" style={{paddingTop:"6rem"}}>
        <div className="col-md-6 col-12 order-md-1 order-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <p
                className="mt-5 text-start  fs-6"
                style={{ color: "#08A391" }}
              >
                ECS CRM Powering Your Success
              </p>
              <h3
                className="d-flex text-start display-6 fw-medium"
                style={{ color: "rgba(0, 0, 0, 0.722)" }}
              >
                Revolutionize Your <br></br> Business with ECS CRM
              </h3>
              <p className="pt-3 text-start fs-4">
                End-to-end,fully customizable CRM solution for growing
                bussiness and enterprises.
              </p>
              <Link to="/DemoBooking">
                <button className="btn btn-button">Book Demo</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-12 d-flex justify-content-center align-items-center order-md-2 "
        // style={{ backgroundColor: "#ffffff", borderRadius: "20px" }}
        >
          <img className="img-fluid" src={EcsCrm} alt="ecsCrm" />
        </div>
      </div>
    </div>
  )
}

export default CRM;