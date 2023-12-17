import { useContext, useState } from "react";
import { LOGO_URL } from "../Utilis/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from '../Utilis/useOnlinestatus';
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const[btnNameReact,setBtnNameReact]=useState('Login');
    const onlinestatus=useOnlinestatus();
    const{LoggedInUser}=useContext(UserContext)
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(
        <div className='Header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100'>
            <div className='logo-container'>
            <img className='w-40' src={LOGO_URL} alt='img-logo'/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className='px-4 font-bold text-lg'>onlinestatus:{onlinestatus?"✅":"🔴"}</li>
                    <li className='px-4 font-bold text-lg'><Link to='/' className="hover:underline underline-offset-8 decoration-2 mt-1">Home</Link></li>
                    <li className='px-4 font-bold text-lg'><Link to='/about' className="hover:underline underline-offset-8 decoration-2 mt-1">About Us</Link></li>
                    <li className='px-4 font-bold text-lg'><Link to='/contact'className="hover:underline underline-offset-8 decoration-2 mt-1">contact us</Link></li>
                    <li className='px-4 font-bold text-lg'><Link to='/grocery'className="hover:underline underline-offset-8 decoration-2 mt-1">Grocery</Link></li>
                    <li className='px-4 font-bold text-lg'> <Link to='/cart'className="hover:underline underline-offset-8 decoration-2 mt-1">cart-({cartItems.length})</Link></li>
                    <button className="btn font-bold text-lg" onClick={()=>{
                       btnNameReact==='Login'?setBtnNameReact('Logout'):setBtnNameReact('Login')

                    }}>{btnNameReact}</button>
                    <li className='px-4 font-bold text-lg'>{LoggedInUser}</li>
                </ul>
            </div>
            
        </div>
    )
  }
export default Header;