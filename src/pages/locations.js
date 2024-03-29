import { useRouter } from 'next/router';
import React from 'react';
import { BASE_URL } from '../constants'
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from 'axios';
import Image from 'next/image';



function LocationCard({ location, cb }) {
  const { address, bike } = location;
  const { user } = useUser();
  // const id = user.sub.split('|')[1];
  console.log(user?.email)
  return <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5">
    <Image width={100} height={100} className="object-cover w-full rounded-t-lg h-64 md:w-64 md:rounded-none md:rounded-l-lg" src={bike?.image} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{address}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bike?.name}</p>
      <p className="mb-3 font-normal text-black ">₹{bike?.pricePerHour}/hour</p>
      <a href="#" className="max-w-max inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => cb(location)}
      >
        Rent now
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  </a>
}
export default function LocationPage({ locations }) {
  console.log("The locations are", locations);
  const [time, setTime] = React.useState(null);
  const [filteredLocations, setFilteredLocations] = React.useState(locations);
  const { user } = useUser();
  const router = useRouter()


  const rentBike = (location) => {
    if (!time) {
      alert("Please select a time")
      return
    }
    console.log("renting bike", location);
    const email = user.email;
    const name = user.name;
    console.log(time)
    axios.get(`${BASE_URL}/api/users/${email}`).then((user) => {
      const cur_ride = {
        bike: location.bike._id,
        start_time: new Date(time),
        start_location: location.address,
        cost: location.bike.pricePerHour,
      };
      axios.put(`${BASE_URL}/api/users`, {
        email,
        name,
        current_ride: cur_ride,
        wallet_balance: (user.wallet_balance ?? 5000) - location.bike.pricePerHour,
        ride_history: [...(user.ride_history ?? []), cur_ride]
      }).then((res) => {
        console.log("rented bike", res);
        router.push('/profile')
      }
      ).catch((err) => {
        console.log("error renting bike", err);
      }
      )
    }).catch((err) => {
      console.log("error fetching user", err);
    })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-4/5 m-auto">
        <div className="flex justify-between w-full items-center">

          <h4 className="self-start mb-2 text-4xl ftracking-tight text-gray-900 dark:text-white m-3">Locations</h4>
          <div>
            {/* Text input for location filter */}
            <label for="base-input-t" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location filter</label>
            <input
              onChange={(e) => {
                const value = e.target.value;
                const filtered = locations.filter((location) => location.address.toLowerCase().includes(value.toLowerCase()))
                setFilteredLocations(filtered)
              }}
              type="text" id="base-input-t" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" />
          </div>
          <div>
            {/* <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base input</label> */}
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="datetime-local" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Time" />
          </div>
        </div>
        {filteredLocations.map((location) => {
          return <LocationCard location={location} cb={rentBike} />
        })
        }
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}/api/locations`)
  const locations = await res.json()
  console.log("The backend bikes are", locations);
  // Pass data to the page via props
  return { props: { locations } }
}