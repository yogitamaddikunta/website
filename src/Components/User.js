import React, { useState } from 'react'

const User = ({name,location}) => {
    const[count]=useState(0)
    const[count2]=useState(2)
  return (
    <div className='user-div'>
        <h1>count:{count}</h1>
        <h1>count2:{count2}</h1>
        <h3>name:{name}</h3>
        <h3>location:{location}</h3>
        <h3>email:yogitamaddikunta@gmail.com</h3>
    </div>
  )
}

export default User