import React from "react";
import Image from "next/image";

export default function AddBike({bikeImg, bikeName,location,color,costOfBike,mileage,costPerHour}) {
  return (
    <div>
      <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <a
          href="#"
          className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative"
        >
          <Image
            src={bikeImg}
            loading="lazy"
            height={100}
            width={100}
            alt="Photo of Bike"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
          ></Image>
        </a>

        <div className="flex flex-col justify-between flex-1 py-4">
          <div>
            <a
              href="#"
              className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
            >
              {bikeName}
            </a>

            <span className="block text-gray-500">Location: {location}</span>
            <span className="block text-gray-500">Color: {color}</span>
          </div>

          <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">
            Cost of Bike (in Lakhs): {costOfBike}
            </span>

            <span className="flex items-center text-gray-500 text-sm gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Available for rent
              
            </span>
            <button className="mt-3 text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">
              Delete bike
            </button>
          </div>
        
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
        
          </div>
            <br />
          <div className="pt-3 md:pt-2 pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span className="block text-gray-800 md:text-lg font-bold">Cost per hour: ₹{costPerHour}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
