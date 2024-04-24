import React from 'react';
import EcsBooking from "../../assests/booking.png";

function Bookings() {
  return (
    <div className="container">
        <div className="row d-flex" style={{paddingTop:"6rem"}}>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={EcsBooking} alt="ecsBooking" />
          </div>
          <div className="col-md-6 col-12 ">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p
                  className="mt-5 text-start  fs-6"
                  style={{ color: "#08A391" }}
                >
                  ECS Appointment Booking Made Easy
                </p>
                <h3
                  className="d-flex text-start display-6 fw-medium"
                  style={{ color: "rgba(0, 0, 0, 0.722)" }}
                >
                  Effortless Booking with ECS Appointments
                </h3>
                <p className="pt-3 text-start fs-5">
                  Customers and clients can schedule appointments with the staff
                  members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Bookings;