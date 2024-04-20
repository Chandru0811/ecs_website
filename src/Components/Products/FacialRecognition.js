import React from 'react';
import Facialrecognition from "../../assests/facialRecognition.webp";

function FacialRecognition() {
  return (
    <div className="container">
        <div className="row pt-5 d-flex">
          <div className="col-md-6 col-12">
            <img
              className="img-fluid d-flex justify-content-center align-items-center"
              src={Facialrecognition}
              alt="ecsFacerecognitionApp"
            />
          </div>
          <div className="col-md-6 col-12">
            <div className="row pt-5">
              <div className="col-md-10 offset-md-1">
                <h3
                  className="d-flex text-start display-6 fw-medium"
                  style={{ color: "rgba(0, 0, 0, 0.722)" }}
                >
                  Facial Recognition Application
                </h3>
                <p className="pt-3 text-start fs-5">
                  Leverage our expertise and get a high-performance and scalable
                  mobile application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FacialRecognition;