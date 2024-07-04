import React from 'react'
import { CDN_URL } from '../utils/constants';
 const RestaurantCard = (props) => {
   const { resData } = props;
   const {
     cloudinaryImageId,
     name,
     avgRating,
     cuisines,
     costForTwo,
     deliveryTime,
   } = resData?.data;
   return (
     <div className="res-card">
       <img
         className="res-image"
         src={CDN_URL
            +
           cloudinaryImageId
         }
         alt="test"
       />
       <h3>{name}</h3>
       <h4>{cuisines.join(",")}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{costForTwo / 100} FOR TWO.</h4>
       <h4>{deliveryTime} min</h4>
     </div>
   );
 };

export default RestaurantCard