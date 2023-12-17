/** 
 * div id='parent'
 * <div class='child'>hellow child
 */
import React,{Suspense, lazy, useEffect} from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
//import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
// import Grocery from './Components/Grocery';
import UserContext from './Components/UserContext';
const Grocery=lazy(()=>import('./Components/Grocery'))
const About=lazy(()=>import('./Components/About'))
import appStore from './Utilis/appStore';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
const AppLayout=()=>{
  const[userName,setUserName]=useState(null);

useEffect(()=>{
  const data={
    name:'yogita'
  }
  setUserName(data.name)
},[])
    return(

      <Provider store={appStore}>
      <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
        <>
           <Header/>
          <Outlet/>

     
        </>
        </UserContext.Provider>
        </Provider>
          
      
    )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>

      },
      {
        path:'/about',
        element:<Suspense fallback={<h1>loading.....</h1>}><About/></Suspense>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense>
      },{
        path:'/cart',
        element:<Cart/>
      }
      
    ],
    errorElement:<Error/>
  },
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)