import React from "react";

export default function FormInput({
  cloudinary,
  value,
  content,
  isFile = false,
}) {
  const cloudinaryHandler = () => {
    cloudinary()
  }
  return (
    <div className={`sm:col-span-2`}>
      <label
        for={content}
        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
      >
        {cloudinary ? (
          <button
            className="inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2"
            onClick={cloudinaryHandler}
          >Upload {content[0].toUpperCase() + content.slice(1)}</button>
        ) : (
          content[0].toUpperCase() + content.slice(1)
        )}
      </label>
      <span className={`${cloudinary ? 'hidden' : 'block'}`}>
      <input
        required
        type={isFile ? "file" : "text"}
        name={content}
        value={value}
        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
      />
      </span>
    </div>
  );
}
