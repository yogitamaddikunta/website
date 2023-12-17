import { useContext } from "react";
import { CDN_URL } from "../Utilis/constants";
import UserContext from "./UserContext";
const RestaurantCard=(props)=>{
    const { resData }=props;
    const{LoggedInUser}=useContext(UserContext)

    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info;
    return(
        <div className=" w-[300] px-3 mt-4 mr-10 bg-slate-50 hover:bg-slate-200">
            <img className='w-[300] h-[300]' src={CDN_URL+ cloudinaryImageId }alt="food-logo"/>
            <h3 className="font-bold">{name}</h3>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h4>{sla.deliveryTime}minutes</h4> 
            <h3>{LoggedInUser}</h3>
        </div>
    )
}

export const WithPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                 <label className="absolute m-[-2] p-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;