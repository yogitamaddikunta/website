import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Utilis/cartSlice"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch(clearCart())

    }
    return(
        <div className="text-center m-4 p-4">
             <h1 className="font-bold text-2xl">cart</h1>
             <button className="bg-black text-white p-2 rounded-lg" onClick={handleClear}>clear cart</button>
             {cartItems.length===0&&(<h1 className="font-bold m-4 text-lg">cart is empty</h1>)}
             <div className="w-6/12 m-auto">
             
                <ItemList items={cartItems}/>
             </div>
        </div>

    )
        
    
}
export default Cart