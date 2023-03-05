import React from "react";

export default function Earnings() {
  return (
    <>
      <div class="flex flex-col items-end gap-4">
        <div class="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
          <div class="space-y-1">
            <div class="flex justify-between text-gray-500 gap-4">
              <span>Total Rental Earnings</span>
              <span>₹8000</span>
            </div>

            <div class="flex justify-between text-gray-500 gap-4">
              <span>Average Earning per bike</span>
              <span>₹800</span>
            </div>
          </div>

          <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-start text-gray-800 gap-4">
              <span class="text-lg font-bold">Total Rental Earnings</span>

              <span class="flex flex-col items-end">
                <span class="text-lg font-bold">₹8000</span>
                {/* <span class="text-gray-500 text-sm">including VAT</span> */}
              </span>
            </div>
          </div>
        </div>

        {/* <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Check out
        </button> */}
      </div>
    </>
  );
}
