import React from "react";

export default function FormInput({ content, isFile=false }) {
  return (
    <div className="sm:col-span-2">
      <label
        for={content}
        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
      >
        {content[0].toUpperCase() + content.slice(1)}
      </label>
      <input
        required
        type={isFile ? "file" : "text"}
        name={content}
        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
      />
    </div>
  );
}
