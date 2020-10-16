import React from "react"
import $ from "jquery"
import Confirmation from "./Confirmation.jsx"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ordredFood:"",
            total:0,
            fullName:"",
            adress:"",
            phone:0,
            next:false

        }
    }
    infoSubmit(){
       const user= $("#name").val()
       const add= $("#adress").val()
       const number=$("#number").val()
       var str=""
        this.props.order.map(item=>{str+=item+","})
        if((user.length>0)&&(add.length>0)&&(number.length>0)){
         
     this.setState({fullName:user, adress:add , ordredFood:str.replace(/,\s*$/, "") ,total:this.props.total, phone:JSON.parse(number) , next:!this.state.next })
        }else{
            alert("Please fill out the Form!")
        }
  

      }
      
     
    
render(){
console.log(this.state)
     if(this.state.next){
         return <Confirmation items={this.state.ordredFood} total={this.state.total} name={this.state.fullName} add={this.state.adress} num={this.state.phone} />
     }

    return(
        <div>
           
            <input type="text" placeholder="please enter your fullname" id="name" required></input>
            <input type="text" placeholder="please enter your adress" id="adress" required></input>
            <input type="value" placeholder="please enter your number" id="number" required></input>
            <button onClick={this.infoSubmit.bind(this)}>Submit your info</button>
          
        </div>
    )
}
}
export default UserInfo;
