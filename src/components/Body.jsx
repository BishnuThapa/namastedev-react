import React from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Restro card Container */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* LIMIT RESULTS ON FETCH { resList.slice(0,5).map(restaurant=><RestaurantCard resData={restaurant} />)} */}
      </div>
    </div>
  );
}

export default Body