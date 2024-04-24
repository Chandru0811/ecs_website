import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assests/ecs_logo.png";
import AWS from "../assests/badge-new.png";
import CRM from "../assests/crm_icon.png";
import WhatsApp from "../assests/whatsapp_icon.png";
import Attendance from "../assests/attendance_icon.png";
import Tracking from "../assests/tracking_icon.png";
import Bookings from "../assests/bookings_icon.png";
import HRMS from "../assests/hrms_icon.png";
import FaceRecognition from "../assests/facerecognition_icon.png";
import SMS from "../assests/sms_icon.png";
import MCS from "../assests/mcs_icon.png";
import AWSIcon from "../assests/aws_icon.png";
import DevSecOps from "../assests/devsecops_icon.png";
import Architecture from "../assests/architecture_icon.png";
import Migration from "../assests/architecture_icon.png";
import Education from "../assests/education_icon.png";
import MarketingAgencies from "../assests/marketingagencies_icon.png";
import SalesTeam from "../assests/salesteam_icon.png";
import MarketingTeams from "../assests/marketingteams_icon.png";
import CustomerSupport from "../assests/customersupport_icon.png";
import ECommerce from "../assests/ecommerce_icon.png";
import Healthcare from "../assests/healthcare_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

function OffcanvasExample() {
  const navigate = useNavigate();
  const expand = "xl";
  const handleProductsNavigate = () => {
    navigate("/products");
  };
  const handleCloudServicesNavigate = () => {
    navigate("/cloudservices");
  };
  const handleSolutionsNavigate = () => {
    navigate("/solutions");
  };

  return (
    <>
      <Navbar key={expand} expand={expand} className="py-3 header">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img src={Logo} alt="Logo" className="img-fluid" width={230} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                ECSCloudInfotech
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start align-items-center flex-grow-1 navbar-nav">
                <NavDropdown
                  title="Products"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  onClick={handleProductsNavigate}
                  className="text-md-center"
                >
                  <div className="row products">
                    <div className="col-lg-6 col-12">
                      <NavDropdown.Item href="#crm" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={CRM} alt="CRM" width={30}></img>
                          </span>
                          CRM
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#whatsappChatbot" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}> 
                          <span style={{ marginRight: "10px" }}>
                            <img src={WhatsApp} alt="WhatsApp" width={30}></img>
                          </span>
                          WhatsApp Chatbot
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#mobileAttendance" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img
                              src={Attendance}
                              alt="WhatsApp"
                              width={30}
                            ></img>
                          </span>
                          Mobile Attendance App
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#applicationTracking" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={Tracking} alt="WhatsApp" width={30}></img>
                          </span>
                          Application Tracking System
                        </div>
                      </NavDropdown.Item>
                    </div>
                    <div className="col-lg-6 col-12">
                      <NavDropdown.Item href="#bookings" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={Bookings} alt="WhatsApp" width={30}></img>
                          </span>
                          Bookings
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#hrms" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={HRMS} alt="WhatsApp" width={30}></img>
                          </span>
                          HR Management System
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#facialRecognition" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img
                              src={FaceRecognition}
                              alt="WhatsApp"
                              width={30}
                            ></img>
                          </span>
                          Facial Recognition App
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#schoolManagement" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={SMS} alt="WhatsApp" width={30}></img>
                          </span>
                          School Management System
                        </div>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="Cloud Services"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="mx-3 text-md-center"
                  onClick={handleCloudServicesNavigate}
                >
                  <div className="row cloudservices">
                    <div className="col-lg-6 col-12">
                      <NavDropdown.Item href="#managedcloudservices" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={MCS} alt="Mcs" width={30}></img>
                          </span>
                          Managed Cloud Services
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#awsdevops" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={DevSecOps} alt="CRM" width={30}></img>
                          </span>
                          AWS DevSecOps
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#awsmigrationservices" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={Migration} alt="CRM" width={30}></img>
                          </span>
                          AWS Migration Services
                        </div>
                      </NavDropdown.Item>
                    </div>
                    <div className="col-lg-6 col-12">
                      <NavDropdown.Item href="#awsinfrastructure" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={AWSIcon} alt="CRM" width={30}></img>
                          </span>
                          AWS Infrastructure
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#awsarchitecturedesign" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={Architecture} alt="CRM" width={30}></img>
                          </span>
                          AWS Architecture Design
                        </div>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="Solutions"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  onClick={handleSolutionsNavigate}
                  className="text-md-center"
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <NavDropdown.Item href="#Education" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={Education} alt="CRM" width={30}></img>
                          </span>
                          Education
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#SalesTeam" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={SalesTeam} alt="CRM" width={30}></img>
                          </span>
                          Sales Team
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#CustomerSupport" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img
                              src={CustomerSupport}
                              alt="CRM"
                              width={30}
                            ></img>
                          </span>
                          Customer Support
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Healthcare" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={Healthcare} alt="CRM" width={30}></img>
                          </span>
                          Healthcare
                        </div>
                      </NavDropdown.Item>
                    </div>
                    <div className="col-lg-6 col-12">
                      <NavDropdown.Item href="#MarketingAgencies" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img
                              src={MarketingAgencies}
                              alt="CRM"
                              width={30}
                            ></img>
                          </span>
                          Marketing Agencies
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#MarketingTeams" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img
                              src={MarketingTeams}
                              alt="CRM"
                              width={30}
                            ></img>
                          </span>
                          Marketing Teams
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#ECommerce" className="text-md-center">
                        <div style={{ verticalAlign: "middle" }}>
                          <span style={{ marginRight: "10px" }}>
                            <img src={ECommerce} alt="CRM" width={30}></img>
                          </span>
                          ECommerce
                        </div>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>
                {/* <Nav.Link className="nav-link-custom">
                  <Link
                    to="/products"
                    className="text-decoration-none text-dark fw-bold nav-link-text"
                  >
                    Products
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-link-custom">
                  <Link
                    to="/cloudservices"
                    className="text-decoration-none text-dark fw-bold mx-3 nav-link-text"
                  >
                    Cloud Services
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-link-custom">
                  <Link
                    to="/solutions"
                    className="text-decoration-none text-dark fw-bold nav-link-text"
                  >
                    Solutions
                  </Link>
                </Nav.Link> */}
                <Nav.Link className="mx-3" as={NavLink} to="/aboutus">
                  About
                </Nav.Link>
              </Nav>
              <div className="d-flex justify-content-center">
                <Link to="#">
                  <img
                    src={AWS}
                    alt="..."
                    width="160"
                    className=" img-fluid AWS_header "
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/contactus">
                  <button type="button" className="btn btn-button">
                    Contact
                  </button>
                </Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/DemoBooking">
                  <button className="btn btn-buttons">Book Demo</button>
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
