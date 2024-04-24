import React from 'react';
import EcsAttendance from "../../assests/attendance.png";

function MobileAttendance() {
  return (
    <div className="container">
        <div className="row d-flex" style={{paddingTop:"6rem"}}>
          <div className="col-md-6 col-12  order-md-1 order-1">
            <div className="row pt-5">
              <div className="col-md-10 offset-md-1">
                <h3
                  className="d-flex text-start display-6 fw-medium"
                  style={{ color: "rgba(0, 0, 0, 0.722)" }}
                >
                  Mobile Attendance Application
                </h3>
                <p className="pt-3 text-start fs-6">
                  Leverage our expertise and get a high-performance and scalable
                  mobile application.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center order-md-2">
            <img
              className="img-fluid"
              src={EcsAttendance}
              alt="ecsAttendance"
            />
          </div>
        </div>
      </div>
  )
}

export default MobileAttendance;