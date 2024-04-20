import React from "react";
import CRM from "./Products/CRM";
import Bookings from "./Products/Bookings";
import WhatsAppChatbot from "./Products/WhatsAppChatbot";
import HRMS from "./Products/HRMS";
import MobileAttendance from "./Products/MobileAttendance";
import FacialRecognition from "./Products/FacialRecognition";
import ApplicationTracking from "./Products/ApplicationTracking";
import SchoolManagement from "./Products/SchoolManagement";

function Products() {
  return (
    <section className="container-fluid" style={{ backgroundColor: "#E1FDFA" }}>
      <div id="crm"><CRM /></div>
      <div id="bookings"><Bookings /></div>
      <div id="whatsappChatbot"><WhatsAppChatbot /></div>
      <div id="hrms"><HRMS /></div>
      <div id="mobileAttendance"><MobileAttendance /></div>
      <div id="facialRecognition"><FacialRecognition /></div>
      <div id="applicationTracking"><ApplicationTracking /></div>
      <div id="schoolManagement"><SchoolManagement /></div>
    </section>
  );
}

export default Products;