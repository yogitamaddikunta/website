import React,{useState} from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
 
   // console.log(data)
   const handleClick=()=>{
     setShowIndex();
   }
  return (
    <div >
        <div className='w-6/12 mx-auto my-2 p-2 bg-slate-100 border-b-2 ' >
            <div className='flex justify-between cursor-pointer' onClick={handleClick} >
            <span className="font-semibold ">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            


            </div>
             {showItems &&<ItemList items={data.itemCards}/>}           
            

        </div>
    </div>
  )
}

export default RestaurantCategory