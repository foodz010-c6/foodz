import React from 'react'
import $ from "jquery"


class LogIn extends React.Component{
    constructor(props){
        super(props);

        this.confirmOrder = this.confirmOrder.bind(this)
        this.state={
            EmailAdress:"",
            passWord:"",
            logInData:[{}]
        }
    }
     confirmOrder(){
      var email= $("#email").val()
      var pass= $("#passWord").val()

     this.setState({
         EmailAdress:email,
         passWord:pass,
         logInData: {email,pass}
        })
    }
    render(){
           console.log(this.state.logInData)
    return(
        <div>
            <div  className="order" ><strong className="title">Log In : </strong>{this.props.total}</div>
            <div className="inputs">
            <input type="text" placeholder="please enter your E-mail" id="email" required></input><br />
            <input type="text" placeholder="please enter your passWord" id="passWord" required></input>
            </div>
            <button className="button" onClick={this.confirmOrder}>Log In </button>
        </div>
    )}

}
export default LogIn;


