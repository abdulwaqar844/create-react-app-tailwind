import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ApplicationForm = () => {
  return (
    <div className="container-sm">
      <div className=" m-4">
        <p className="text-blue-600  font-black  text-5xl py-3 px-4 border-b-2 my-2">
          Primary Applicant
        </p>{" "}
        <Formik
          initialValues={{ firstName: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(3, "Less then 3 characters")
              .max(15, "Must be 15 characters or less")
              .required("Required"),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              //   handleNext();
            }, 400);
          }}
        >
          <Form className=" md:px-5 px-3 pb-3">
            <div className=" border  md:px-5 px-3 pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Personal Information</h4>
              </div>
              <div className="flex flex-col md:flex-wrap	 md:flex-row justify-around items-center	py-3	">
                <div className=" w-60 md:w-28 flex flex-col text-[14px] ">
                  <label
                    htmlFor="applicant_title"
                    className=" text-lg font-medium "
                  >
                    Title *
                  </label>
                  <select
                    id="applicant_title"
                    name="applicant_title"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Purchase</option>
                    <option value="2">Refinance</option>
                    <option value="4">Switch</option>{" "}
                  </select>

                  <ErrorMessage name="firstName" />
                </div>{" "}
                <div className="w-60 md:w-48 lg:w-64 flex flex-col text-[14px] ">
                  <label htmlFor="first_name" className=" text-lg font-medium">
                    First Name *
                  </label>
                  <input
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60 md:w-44 lg:w-72 flex flex-col text-[14px] ">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Last Name *
                  </label>
                  <input
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="lastname" />
                </div>
                <div className="w-60 md:w-36 lg:w-62 flex flex-col text-[14px] ">
                  <label htmlFor="initial" className=" text-lg font-medium ">
                    Initial *
                  </label>
                  <input
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
              </div>
              <div className=" lg:w-30 flex flex-col lg:flex-row justify-around items-center	py-3	">
                <div className="w-60 md:w-28 flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Birthday *
                  </label>
                  <input
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="date"
                    placeholder="mm/dd/yyy"
                  />

                  <ErrorMessage name="firstName" />
                  <p className="text-xs">
                    Ex: MM/DD/YYY. You must be 18 or older to apply.
                  </p>
                </div>
                <div className="w-60 md:w-28 flex flex-col text-[14px] ">
                  <label htmlFor="sin_number" className=" text-lg font-medium ">
                    SIN Number
                  </label>
                  <input
                    className="mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    placeholder="123-456-789"
                  />
                  <ErrorMessage name="sin_number" />
                  <p className="text-xs">Ex:123-456-789</p>
                </div>
                <div className="w-60  md:w-28   flex flex-col text-[14px] ">
                  <label htmlFor="firstbuyer" className=" text-lg font-medium ">
                    Are you a First Time Home Buyer ?
                  </label>
                  <select
                    id="applicant_title"
                    name="applicant_title"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className="w-60  md:w-28  flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Martial Status *
                  </label>
                  <select
                    id="martial_status"
                    name="martial_status"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60  md:w-28  flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Credit Rating
                  </label>
                  <select
                    id="martial_status"
                    name="martial_status"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Very Good">Very Good</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60  md:w-28  flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Number Dependency
                  </label>
                  <input
                    type="number"
                    id="numberdepency"
                    name="numberdepency"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <ErrorMessage name="firstName" />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ApplicationForm;
