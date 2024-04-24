import React from 'react';
import EcsHr from "../../assests/ecsHr.png";

function HRMS() {
  return (
    <div className="container">
    <div className="row d-flex" style={{paddingTop:"6rem"}}>
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={EcsHr} alt="ecsHr" />
      </div>
      <div className="col-md-6 col-12">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <p
              className="mt-5 text-start  fs-6"
              style={{ color: "#08A391" }}
            >
              SMART HR | PAYROLL | hiring | EMPLOYEE TRANSPORT MANAGEMENT |
              PROJECT MANAGEMENT SYSTEM
            </p>
            <h3
              className="d-flex text-start display-6 fw-medium"
              style={{ color: "rgba(0, 0, 0, 0.722)" }}
            >
              Human Resource Management System
            </h3>
            <p className="pt-3 text-start fs-5">
              A Human Resouce Managemnet Systems (HRMS) is a Software
              Solutions that streamlines and automatesvarious hr functions,
              including recruitment , employeerecords , payroll , benefits
              administration , and performance managemnet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HRMS;