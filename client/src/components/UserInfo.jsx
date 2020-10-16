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
      var user= $("#name").val()
      var add= $("#adress").val()
      var number=$("#number").val()
      var str=""
     this.props.order.map(item=>{str+=item+","})
  
     this.setState({fullName:user,
        adress:add ,
         ordredFood:str.replace(/,\s*$/, "") ,
         total:this.props.total,
          phone:JSON.parse(number)
        })

      if((user.length>0) && (add.length>0) && (number.length>0)){ 
        let name = this.state.fullName;
        let adress = this.state.adress;
        let phone = this.state.phone;
        let total = this.state.total;
        let ordredFood = this.state.ordredFood;
          
       Axios.post('api/order',{name,adress,phone,total,ordredFood})
          .then(response=>{
              console.log(response)
          })
          .catch(err=>{throw err})
      }
    }


render(){
    return(
        <div>
            <div className="order" >{this.props.order.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}</div>
            <div  className="order" ><strong className="title">Total price: </strong>{this.props.total} </div>
            <div className="inputs">
            <input type="text" placeholder="please enter your fullname" id="name" required></input><br />
            <input type="text" placeholder="please enter your adress" id="adress" required></input><br />
            <input type="value" placeholder="please enter your number" id="number" required></input>
            </div>
            <button className="button" onClick={this.confirmOrder.bind(this)}>Confirm your order</button>
        </div>
    )
}
}
export default UserInfo;
