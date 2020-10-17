import React from "react"
import Axios from "axios";
import Menu from "./Menu.jsx";


class SignUp extends React.Component{
   constructor(props){
       super(props);
       this.state={
        
          loggedIn:false
          
          
       }
       this.handleChange=this.handleChange.bind(this)
       this.signUp=this.signUp.bind(this)
   }
  
   signUp(){
    let user=this.state.user
    let email=this.state.email
    var mdp=this.state.password
 Axios.post("/api/signup",{user,email,mdp})
 .then(response=>{
   console.log(response)
})
.catch(err=>{throw err})
this.setState({loggedIn:!this.state.loggedIn})
}
   
   
   handleChange(e){
       this.setState({[e.target.name]:e.target.value})
   }
   
  
    render(){
        console.log(this.state)
      if(this.state.loggedIn){
        return <Menu/>
      }else{
        return( 
          <div> 
            <h1>Sign Up</h1>
            <h2>User name :</h2>
            <input type="text" placeholder="Enter your user name" name="user" onChange={this.handleChange}></input>
            <h2> E-mail</h2>
          <input type="text" placeholder="Enter your E-mail " name="email" onChange={this.handleChange}></input>
          <h2>Password :</h2>
          <input type="password" placeholder="Enter your password" name="password" onChange={this.handleChange}></input> <br></br>
          <button className="button" onClick={this.signUp}>Sign up</button>
          </div>
         
              )}
    }
}
export default SignUp;