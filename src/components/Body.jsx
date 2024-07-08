import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {
  // const [listOfRestaurants,setListOfRestaurants] = useState(resList);
  const [listOfRestaurants,setListOfRestaurants] = useState([]);

  useEffect(() => { fetchData() }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()
    console.log(json)
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    .restaurants);
  }

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Restro card Container */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* LIMIT RESULTS ON FETCH { resList.slice(0,5).map(restaurant=><RestaurantCard resData={restaurant} />)} */}
      </div>
    </div>
  );
}

export default Body