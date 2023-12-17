import React, { useState,useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';


import useRestaurant from '../Utilis/useRestaurant';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {

    const{resId}=useParams();
    const resInfo=useRestaurant(resId);
    const[showIndex,setShowIndex]=useState(null)
   

if (resInfo===null){
    return <Shimmer/>
}
    const{name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories=resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      console.log(categories)

  return (

    <div className='text-center '>
        <h1 className='font-bold m-2 text-lg'>{name}</h1>
        <p className='font-bold m-2 text-lg'>{cuisines.join(',')}-{costForTwoMessage}</p>

        <h2>{categories.map((category,index)=>
            <RestaurantCategory key={category?.card?.card.title}data={category?.card?.card} showItems={index===showIndex?true:false} 
            setShowIndex={()=>setShowIndex(index)}
            
            />)}</h2>
    
    </div>
  )
}
export default RestaurantMenu