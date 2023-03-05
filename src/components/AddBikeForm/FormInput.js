import React from "react";

export default function FormInput({ content, isFile=false }) {
  return (
    <div className="sm:col-span-2">
      <label
        for="company"
        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
      >
        {content}
      </label>
      <input
        type={isFile ? "file" : "text"}
        name="company"
        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
      />
    </div>
  );
}
