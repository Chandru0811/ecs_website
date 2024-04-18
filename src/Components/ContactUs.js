import React from "react";
import Contact from "../assests/contact.png";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineMyLocation } from "react-icons/md";
import { toast } from "react-toastify";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../Config/URL";

const validationSchema = yup.object().shape({
  first_name: yup.string().required("*First Name is required"),
  last_name: yup.string().required("*Last Name is required"),
  phone: yup
    .string()
    .required("*Phone is required")
    .matches(/^[0-9]{10}$/, "*Phone Number must be 10 digits"),
  email: yup.string().required("*Email is required"),
  description_info: yup.string().required("*Enquiry is required"),
});

function ContactUs() {
  console.log("Api :", api);
  // const companyId = sessionStorage.getItem("companyId");
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      company_id: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      description_info: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      console.log("Contact in Ecs Website:", data);
      data.company_id = 2;
      data.company = "ECSCloudInfotech";
      data.lead_status = "Processed";
      try {
        const response = await api.post(`newClient`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          toast.success("Thank You for Contacting Us! We'll be in touch soon!");
          // navigate("/login");
          formik.resetForm();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Failed: " + error.message);
      }
    },
  });

  return (
    <section>
      <div className="container-fluid my-4">
        <div className="row contact-row">
          <div className="col-1"></div>
          <div className="col-md-5 col-12 mt-5">
            <h1>
              Let's <span className="text-success">Talk!</span>
            </h1>
            <p>
              We love hearing from you! Whether you have a question, feedback,
              or just want to chat about your ideas, feel free to reach out.
              <span className="text-success">
                Here’s how you can contact us:
              </span>
            </p>
            <div className="d-flex mb-3">
              <div className="mx-1 contact_icon_color d-flex align-items-center">
                <BiLogoGmail />
              </div>

              <p className="m-1">info@ecscloudinfotech.com</p>
            </div>

            <div className="d-flex mb-3">
              <div className="mx-1 contact_icon_color d-flex align-items-center">
                <BiSolidPhoneCall />
              </div>

              <p className="m-1">+65 8894 1306</p>
            </div>

            <div className="d-flex mb-3">
              <div className="mx-1 contact_icon_color d-flex align-items-center ">
                <MdOutlineMyLocation />
              </div>

              <p className="m-1">
                The Alexcier, 237 Alexandra Road, #04-10, Singapore-159929.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-end ">
            <img src={Contact} alt="contact" className="img-fluid"></img>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div
            className="container mt-5 py-4 p-5"
            style={{ background: "#E1FDFA", borderRadius: "20px" }}
          >
            <div className="row">
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  First Name<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.first_name && formik.errors.first_name
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("first_name")}
                    name="first_name"
                    id="first_name"
                  />
                  {formik.touched.first_name && formik.errors.first_name && (
                    <p className="text-danger">{formik.errors.first_name}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Last Name<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.last_name && formik.errors.last_name
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("last_name")}
                    name="last_name"
                    id="last_name"
                  />
                  {formik.touched.last_name && formik.errors.last_name && (
                    <p className="text-danger">{formik.errors.last_name}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Eamil<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-size form-control  ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("email")}
                    id="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-danger">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Mobile<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className={`form-size form-control  ${
                      formik.touched.phone && formik.errors.phone
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("phone")}
                    id="phone"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-danger">{formik.errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-12 mb-2">
                <lable className="form-lable">
                  Enquiry<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <textarea
                    {...formik.getFieldProps("description_info")}
                    name="description_info"
                    className="form-control "
                  ></textarea>
                  {formik.touched.description_info &&
                    formik.errors.description_info && (
                      <p className="text-danger">
                        {formik.errors.description_info}
                      </p>
                    )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
