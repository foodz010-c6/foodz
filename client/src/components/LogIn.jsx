import React from 'react'
import $ from "jquery"
import SignUp from './components/SingUp.jsx';


class LogIn extends React.Component{
    constructor(props){
        super(props);

     this.confirmOrder = this.confirmOrder.bind(this);
        this.state={
            EmailAdress:"",
            passWord:"",
        }
    }

     confirmOrder(){
      var email= $("#email").val()
      var pass= $("#passWord").val()

     this.setState({
         EmailAdress:email,
         passWord:pass,
        })
    }
    render(){
        return(
        <div>
            <div  className="order" ><strong className="title">Log In : </strong></div>
            <input type="text" placeholder="please enter your E-mail" id="email" required></input><br/>
            <input type="text" placeholder="please enter your passWord" id="passWord" required></input>
            <button className="button" onClick={this.confirmOrder}>Log In </button>
        </div>
        )}
}
export default LogIn;
