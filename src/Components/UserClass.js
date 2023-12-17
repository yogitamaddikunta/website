import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2

        }
        console.log('children constructor')
    }

    componentDidMount(){
        console.log('child mpunt')
    }
    render(){
        console.log('children render');
        const{count}=this.state;
        const{name,location}=this.props
        return(
            <div className='user-div'>
                <h1>count:{count}</h1>
                 <button onClick={()=>{
                    this.setState(
                        {
                            count:this.state.count+1,
                            count2:this.state.count2+1,
                        }
                    )
                 }}>click me</button>
                 <h3>name:{name}</h3>
                 <h3>location:{location}</h3>
                 <h3>email:yogitamaddikunta@gmail.com</h3>
                
            </div>
            
        )
       
    }

}

export default UserClass