import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className='filter-btn' onClick={() => {
          const filteredList=listOfRestaurants.filter(res=>res.data.avgRating >4)
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {/* Restro card Container */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* LIMIT RESULTS ON FETCH { resList.slice(0,5).map(restaurant=><RestaurantCard resData={restaurant} />)} */}
      </div>
    </div>
  );
}

export default Body