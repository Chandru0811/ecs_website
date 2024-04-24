import React from 'react';
import Schoolmanagement from "../../assests/schoolManagement.png";

function SchoolManagement() {
  return (
    <div className="container">
        <div className="row d-flex" style={{paddingTop:"4rem"}}>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid "
              src={Schoolmanagement}
              alt="schoolManagement"
            />
          </div>
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p className=" text-start  fs-6" style={{ color: "#08A391" }}>
                  SCHOOL MANAGEMENT SYSTEM | ECS Cloud Infotech
                </p>
                <h3
                  className="d-flex text-start display-6 fw-medium"
                  style={{ color: "rgba(0, 0, 0, 0.722)" }}
                >
                  School Management System Software
                </h3>
                <p className=" text-start fs-5">
                  Innovate Teaching, Promote Skill Building, and Achieve Greater
                  Learning Outcomes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SchoolManagement;