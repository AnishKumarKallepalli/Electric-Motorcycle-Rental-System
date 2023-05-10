import { BASE_URL } from "@/constants";
import BikeRating from "@/components/Profile/BikeRating";
import Header from "@/components/Header";
import UserPhoto from "@/components/UserPhoto";
import { useUser } from "@auth0/nextjs-auth0/client";

import React, { useEffect } from "react";

export default function Profile() {
  const { user } = useUser();
  const [data, setData] = React.useState(null);

  async function getUserInfo() {
    if (!user?.email) return;
    const res = await fetch(`/api/users/${user.email}`);
    const data = await res.json();
    console.log("The user is", data);
    setData(data);
  }

  useEffect(() => {
    console.log("The user is", user);
    //fetch user info from backend
    getUserInfo();
  }, [user]);

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="border rounded-lg p-4">
                <UserPhoto username={user?.name} photo={user?.picture} balance={data?.wallet_balance}></UserPhoto>
                <h2 className="text-gray-800 text-lg lg:text-xl font-bold mb-3"></h2>

              </div>
            </div>

            <div className="lg:col-span-2">
              {data?.current_ride?.start_time ? <><div className="border-b pb-4 md:pb-6">
                <h1 className="text-gray-800 text-xl lg:text-xl font-bold">
                  Current Ride
                </h1>
              </div>

                <div className="divide-y">
                  <BikeRating
                    rating={0}
                    place={data.current_ride.start_location}
                    date={data.current_ride.start_time}
                    cost={data.current_ride.cost}
                    bike={data.current_ride.bike.name}
                    hours={data.current_ride.cost / data.current_ride.bike.pricePerHour}
                  />
                </div></> : null}

              <div className="border-b pb-4 md:pb-6">
                <h1 className="text-gray-800 text-xl lg:text-xl font-bold">
                  Previous Bookings
                </h1>
              </div>

              <div className="divide-y">
                {data?.ride_history?.map((ride) => (

                  <BikeRating
                    rating={0}
                    place={ride.start_location}
                    date={ride.start_time}
                    cost={ride.cost}
                    bike={ride.bike.name}
                    hours={"1"}
                  />
                ))
                }
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

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}/api/users`)
  const listofbikes = await res.json()
  // Pass data to the page via props
  return { props: { listofbikes } }
}