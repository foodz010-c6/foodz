import React from 'react'
import $ from "jquery"


class SigIn extends React.Component{
    constructor(props){
        super(props);

        this.confirmOrder = this.confirmOrder.bind(this)
        this.state={
            EmailAdress:"",
            passWord:"",
            signInData:[{}]
        }
    }
     confirmOrder(){
      var email= $("#email").val()
      var pass= $("#passWord").val()

     this.setState({
         EmailAdress:email,
         passWord:pass,
         signInData: {email,pass}
        })
    }
    render(){
           console.log(this.state.signInData)
    return(
        <div>
            <div  className="order" ><strong className="title">Sign In : </strong>{this.props.total}</div>
            <div className="inputs">
            <input type="text" placeholder="please enter your E-mail" id="email" required></input><br />
            <input type="text" placeholder="please enter your passWord" id="passWord" required></input>
            </div>
            <button className="button" onClick={this.confirmOrder}>Sign In </button>
        </div>
    )}
}
export default SigIn;


