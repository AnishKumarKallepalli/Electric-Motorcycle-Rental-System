import React from 'react'
import FilledStar from './FilledStar'
import EmptyStar from './EmptyStar'


export default function BikeRating({place, cost, bike, hours, date, rating}) {
  return (
    <div> <div className="flex flex-col gap-3 py-4 md:py-8">
    <div>
      <span className="block text-sm font-bold">
        Trip to {place}
      </span>
      <span className="block text-gray-500 text-sm">
        {date}
      </span>
    </div>

    <div className="flex gap-0.5 -ml-1">
     {[...Array(rating)].map((e, key) => <FilledStar />)}
     {[...Array(5-rating)].map((e, key) => <EmptyStar />)}
    </div>

    <p className="text-gray-600">
      Cost: {cost} <br/>
      Hours Used: {hours} <br/>
      Bike: {bike} <br/> 
    </p>
  </div></div>
  )
}
