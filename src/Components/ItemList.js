import React from 'react'
import { CDN_URL } from '../Utilis/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../Utilis/cartSlice';


const ItemList = ({items}) => {
  
  const dispatch=useDispatch();
 
  const handleClick=(item)=>{
    dispatch(addItem(item))
   
  }
  console.log(items)
  return (
    <div>

        {items.map((item)=>(
        <div key={item.card.name}className=" p-2 m-2 border-gray-200 border-b-4 text-left flex">
        <div className='w-9/12'>
            <span className='font-semibold'>{item.card.info.name}</span>
            <span className='font-semibold' > -₹  {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
            <p className='text-x'>{item.card.info.description}</p>
         </div>
       
         <div className='w-3/12 p-4'>
          <div className='absolute'>
          <button className='bg-black text-white p-2 rounded-lg mx-16' onClick={()=>handleClick(item)}> Add+
            </button>
            </div>
         <img src={CDN_URL+item.card.info.imageId}/>
          
           
           
        </div>
        </div>))}
       
    </div>
  )
}

export default ItemList