import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/Custom.css";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import CloudServices from "../Components/CloudServices";
import Solutions from "../Components/Solutions";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import { ToastContainer } from "react-toastify";
import DemoBooking from "../Components/DemoBooking";
import { FaWhatsapp } from "react-icons/fa";
import PrivacyAndPolicy from "../Components/PrivacyAndPolicy";

function Admin() {
  // useEffect(() => {
  //   const whatsappScript = document.createElement("script");
  //   whatsappScript.id = "bp-wa-script";
  //   whatsappScript.src = "https://cdn.botpenguin.com/whatsapp-widget.js";
  //   whatsappScript.defer = true;
  //   whatsappScript.innerText = "dd3b5774-ab22-4d59-b494-b1cf98a2a2fe";
  //   document.body.appendChild(whatsappScript);
  // }, []);

  return (
    <>
      <BrowserRouter basename="/ecs">
        <ToastContainer position="top-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/DemoBooking" element={<DemoBooking />} />

          <Route path="/products" element={<Products />} />
          <Route path="/cloudservices" element={<CloudServices />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        </Routes>
        <a
          href="https://api.whatsapp.com/send/?phone=916379086118&text=Hello! I visited your website.&type=phone_number&app_absent=0"
          class="float"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Admin;
