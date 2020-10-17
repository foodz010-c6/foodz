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
            next:false,
            users:[],
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


     confirmOrder(){
      var email= $("#email").val()
      var pass= $("#passWord").val()

     this.setState({
         EmailAdress:email,
         passWord:pass,
         next:!this.state.next
        })
    }
    render(){
        console.log(this.state.users)
         if(this.state.next){
                return <SignUp />
    } else { 
        return(
        <div>
            <div  className="order" ><strong className="title">Log In : </strong></div>
            <div className="inputs">
            <input type="text" placeholder="please enter your E-mail" id="email" required></input><br />
            <input type="text" placeholder="please enter your passWord" id="passWord" required></input>
            </div>
            <button className="button" onClick={this.confirmOrder}>Log In </button>
        </div>
        )}
    }
}
export default LogIn;
