import React from "react"
import ReactDOM from 'react-dom';
import Axios from "axios";
import $ from "jquery";
import Menu from "./components/Menu.jsx";
import SingUp from "./components/SingUp.jsx"

class App extends React.Component{
   constructor(props){
       super(props);
       this.state={
          users:[],
          loggedIn:false,
          count:0
          
       }
   }
   componentDidMount(){
    
      const settings={
        method:"GET",
        url:"/api/logIn"
      }
      Axios(settings)
       .then(users =>{
         this.setState({
          users :users.data
         })
       })
       .catch(err=>{throw err})
 }
   
   handleClick(){
     var name=$("#name").val()
     var mail=$("#mail").val()
     var mdp=$("#mdp").val()
     if((name.length>3)&&(mail.length>3)&&(mdp.length>3)){
      this.state.users.map(user=>{
        if((user.userName===name)&&(user.email===mail)&&(user.mdp===mdp)){
          alert("Welcome")
          this.setState({loggedIn:!this.state.loggedIn})
        }else{
          alert("No such user")
          this.setState({count:this.state.count+1})
        }
      })

     }
    
     
   }
  
    render(){
      console.log(this.state)
      if(this.state.loggedIn){
        return <Menu/>
      }else if(this.state.count===3){
        return <SingUp/>
      }else{
        return( 
          <div> 
            <h1>Log in</h1>
            <h2>User name :</h2>
            <input type="text" placeholder="Enter your user name" id="name"></input>
            <h2> E-mail</h2>
          <input type="text" placeholder="Enter your E-mail " id="mail"></input>
          <h2>Password :</h2>
          <input type="password" placeholder="Enter your password" id="mdp" ></input> <br></br>
          <button onClick={this.handleClick.bind(this)}>Log in</button>
          </div>
         
              )
      }
       
    }

}

ReactDOM.render(<App />, document.getElementById('app'));