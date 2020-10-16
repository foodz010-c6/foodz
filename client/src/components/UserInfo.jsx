import React from "react"
import Axios from "axios"
import $ from "jquery"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ordredFood:"",
            total:0,
            fullName:"",
            adress:"",
            phone:0,

        }
    }
    confirmOrder(){
      var name= $("#name").val()
      var add= $("#adress").val()
      var number=$("#number").val()
      var str=""
     this.props.order.map(item=>{str+=item+","})
  
    
      if((name.length>0) && (add.length>0) && (number.length>0)){ 
          
          
          this.setState({fullName:name, adress:add , ordredFood:str.replace(/,\s*$/, "") ,total:this.props.total, phone:JSON.parse(number)})
          Axios({
          method:"Post",
          url:"api/order"
      })
          .then(response=>{
              response=this.state
              console.log(response)
          })
          .catch(err=>{throw err})
          
      }
      
     
    }
render(){
 console.log(this.state)
    return(
        <div>
            <div >{this.props.order.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}</div>
            <div  >{this.props.total} </div>
            <input type="text" placeholder="please enter your fullname" id="name" required></input>
            <input type="text" placeholder="please enter your adress" id="adress" required></input>
            <input type="value" placeholder="please enter your number" id="number" required></input>
            <button onClick={this.confirmOrder.bind(this)}>Confirm your order</button>
        </div>
    )
}
}
export default UserInfo;
