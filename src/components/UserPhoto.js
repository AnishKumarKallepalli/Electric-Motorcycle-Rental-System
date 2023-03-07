import React from 'react'
import Image from 'next/image';

export default function UserPhoto(props) {
  const { username, photo, balance } = props;
  return (
    <>

      <div class="flex flex-col items-center">
        <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <Image src={photo} width={376} height={100} loading="lazy" alt="User Profile Picture" class="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div class="text-indigo-500 md:text-lg font-bold text-center">{username}</div>
          <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">{balance ? <div>Wallet: ₹{balance}</div> : null}</p>
          <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-1">Add Money</button>

        </div>
      </div>

    </>
  )
}
