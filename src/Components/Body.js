
import RestaurantCard,{WithPromotedLabel} from "./RestaurantCard";33
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from '../Utilis/useOnlinestatus';
import UserContext from "./UserContext";
import { useContext } from "react";

const Body=()=>{
    
const[ListOfRestaurants,setListOfRestaurants]=useState([])
const[filterListOfRestaurants,setFilterListOfRestaurants]=useState([])
const[searchText,setSearchText]=useState()
 
const RestaurantCardPromoted=WithPromotedLabel(RestaurantCard);

useEffect(()=>{
      fetchData();
},[])
  
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        



    }

const onlinestatus=useOnlinestatus();

if(onlinestatus===false){
    return (<h1>please check internet connection</h1>)
}
 const {setUserName,LoggedInUser}=useContext(UserContext)
    return ListOfRestaurants.length===0?<Shimmer/>:(
        <div className='body ml-4'>
            <div className='search-container flex mt-4 '>
                <div className=' search '>
                    <input className="border border-solid border-black px-5" type='text' value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    

                    }}/>
                    <button className="bg-green-100 px-4 py-2 ml-6 rounded-lg" onClick={()=>{
                        const filter_list=ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterListOfRestaurants(filter_list)
                    
                    }}>search</button>
                </div>
                <div className='filter'>
                <button className='bg-green-100 px-4 py-2 ml-6 rounded-lg' onClick={()=>{
                    const filter_data=ListOfRestaurants.filter(res=>res.info.avgRating>4.2)
                    setFilterListOfRestaurants(filter_data);

                }}>top rated restro</button></div>
                  <div className="ml-4 pt-2">
                    username:
                  <input className="border border-solid border-black px-5 ml-2" type='text' value={LoggedInUser} onChange={(e)=>{
                    setUserName(e.target.value)

                  }}/>

                  </div>
                
            </div>
            
             <div className='flex flex-wrap '>
               {filterListOfRestaurants.map((restaurant)=>{
                return <Link 
                key={restaurant.info.id}
                 to={"/restaurants/"+restaurant.info.id} >
                    {restaurant.info.avgRating >=4.3?(<RestaurantCardPromoted resData={restaurant}/>):<RestaurantCard resData={restaurant}/>}</Link>
           

               })}
              

             </div>
         
        </div>
       
    )
   
}
export default Body;
