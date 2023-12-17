import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from './UserContext'

class About extends React.Component{
  constructor(props){
    super(props)

    console.log('parent constructor')

  }

  componentDidMount(){
    console.log('parent did mount')
  }
  render(){
    console.log('parent render')
    return(
      <div>

        <h1>about page</h1>
       <UserContext.Consumer>
        {({LoggedInUser})=><h1 className='font-bold'>{LoggedInUser}</h1>}
       </UserContext.Consumer>
      
        <UserClass name={'yogita(class)'} location={'ballarpur'} />
       </div>
     
    )
  

   
  }
}


export default About