import BikeRating from "@/components/BikeRating";
import Header from "@/components/Header";
import UserPhoto from "@/components/UserPhoto";
import { useUser } from "@auth0/nextjs-auth0/client";

import React from "react";

export default function Profile() {
    const {user} = useUser();
    
  return (
    <>
      <div className="bg-black py-6 sm:py-8 lg:py-12">
        <Header></Header>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="border rounded-lg p-4">
                <UserPhoto username={user?.name} photo={user?.picture}></UserPhoto>
                <h2 className="text-gray-800 text-lg lg:text-xl font-bold mb-3"></h2>

              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="border-b pb-4 md:pb-6">
                <h2 className="text-gray-800 text-lg lg:text-xl font-bold">
                  Previous Bookings
                </h2>
              </div>

              <div className="divide-y">
                <BikeRating
                  rating={5}
                  place={"Jubilee Hills"}
                  date={"Mar 4, 2023"}
                  cost={"300"}
                  bike={"Ola Electric"}
                  hours={"4"}
                />
                <BikeRating
                  rating={4}
                  place={"Jubilee Hills"}
                  date={"Mar 4, 2023"}
                  cost={"300"}
                  bike={"Ola Electric"}
                  hours={"4"}
                />
              </div>

              <div className="border-t pt-6">
                <a
                  href="#"
                  className="flex items-center text-indigo-400 hover:text-indigo-500 active:text-indigo-600 font-semibold transition duration-100 gap-0.5"
                >
                  Show all bookings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
