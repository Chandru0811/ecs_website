import React from 'react';
import EcsTracking from "../../assests/tracking.png";

function ApplicationTracking() {
  return (
    <div className="container">
        <div className="row d-flex" style={{paddingTop:"4rem"}}>
          <div className="col-md-6 col-12 order-md-1 order-1">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p
                  className="mt-5 text-start  fs-6"
                  style={{ color: "#08A391" }}
                >
                  APPLICANT TRACKING SYSTEM | ECS Cloud Infotech
                </p>
                <h3
                  className="d-flex text-start display-6 fw-medium"
                  style={{ color: "rgba(0, 0, 0, 0.722)" }}
                >
                  An Applicant Tracking System Built by Recruiters
                </h3>
                <p className="pt-3 text-start fs-5">
                  ECS ATS is a comprehensive cloud-based ATS - Applicant
                  Tracking System to make your recruitment process easier.
                  Through effective pipelines, AI-driven insights, and applicant
                  matching, candidate management becomes a seamless task.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center order-md-2">
            <img className="img-fluid" src={EcsTracking} alt="ecsTracking" />
          </div>
        </div>
      </div>
  )
}

export default ApplicationTracking;