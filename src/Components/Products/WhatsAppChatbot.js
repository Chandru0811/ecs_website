import React from 'react';
import WhatsappApi from "../../assests/api.png";

function WhatsAppChatbot() {
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
                  WHATSAPP CHATBOOT INTEGRATION & API FOR ENHANCED ENGAGEMENT |
                  ECS Cloud Infotech
                </p>
                <h3
                  className="d-flex text-start display-6 fw-medium"
                  style={{ color: "rgba(0, 0, 0, 0.722)" }}
                >
                  Automated Chatbot With Instant Responses
                </h3>
                <p className="pt-3 text-start fs-5">
                  Set up a chatbot as your 24/7 customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={WhatsappApi} alt="ecsWhatsappapi" />
          </div>
        </div>
      </div>
  )
}

export default WhatsAppChatbot;