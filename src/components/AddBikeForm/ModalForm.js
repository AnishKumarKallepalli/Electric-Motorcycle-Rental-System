import React from "react";
import FormInput from "./FormInput";
import { BASE_URL } from "@/constants";

const formInputs = [
  "name",
  "rating",
  "age",
  "price",
  "mileage",
  "pricePerHour",
  "available",
  "location",
  "charge"
];
export default function ModalForm() {
  const submitHandler = (e) => {
      e.preventDefault();
  }
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Add Bike
            </h2>

            {/* <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
          </div>
          {/* <!-- text - end --> */}

          {/* <!-- form - start --> */}
          <form
            className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
            onSubmit={submitHandler}
            method="post"
            action={`${BASE_URL}/api/bikes`}
          >
            {formInputs.map((name, idx) => (
              <FormInput content={name} key={idx} />
            ))}
            <FormInput content={"image"} isFile={true} />
            <div className="sm:col-span-2">
              <label
                for="additionalInfo"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                required
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Submit
              </button>

              <span className="text-gray-500 text-sm">*Required</span>
            </div>

            <p className="text-gray-400 text-xs">
              By adding a bike you agree to our{" "}
              <a
                href="#"
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
          {/* <!-- form - end --> */}
        </div>
      </div>
    </div>
  );
}
