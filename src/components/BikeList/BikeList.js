import React, {useState} from "react";
import BikeStats from "./BikeStats";
import Earnings from "./Earnings";
import AddBike from "../AddBikeForm/AddBike";
import Modal from "../Modal";
import { Kristi } from "@next/font/google";
const bikeData = [
  {
    bikeName: "Ola Electric",
    location: "Shamirpet",
    color: "Red",
    costOfBike: 1.2,
    mileage: 23,
    bikeImg:
      "https://images.unsplash.com/photo-1620802051782-725fa33db067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200",
    costPerHour: 399,
  },
  {
    bikeName: "Vespa Electric",
    location: "Shamirpet",
    color: "Red",
    costOfBike: 1.2,
    mileage: 23,
    bikeImg:
      "https://images.unsplash.com/photo-1620802051782-725fa33db067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200",
    costPerHour: 399,
  },
  {
    bikeName: "Tata Motors",
    location: "Shamirpet",
    color: "Red",
    costOfBike: 1.2,
    mileage: 23,
    bikeImg:
      "https://images.unsplash.com/photo-1620802051782-725fa33db067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200",
    costPerHour: 399,
  },
];

export default function BikeList({listofbikes}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Bikes For Rental
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">
            {/* <!-- product - start --> */}
            <div className="flex">
            <button onClick={() => setOpen(true)} className="ml-auto w-48 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Add Bike
            </button>
            </div>

            {listofbikes?.map((bike, key) => (
              <BikeStats
                key={bike._id}
                id={bike._id}
                bikeName={bike.name}
                location={bike.location}
                costOfBike={bike.price}
                mileage={bike.mileage}
                bikeImg={bike.image}
                costPerHour={bike.pricePerHour ? bike.pricePerHour : bike.costOfBike}
                charge={bike.charge}
                available={bike.available}
              />
            ))}
            <Modal open={open} setOpen={setOpen}/>
          </div>

          {/* <!-- totals - start --> */}
          <Earnings />
          {/* <!-- totals - end --> */}
        </div>
      </div>
    </>
  );
}


