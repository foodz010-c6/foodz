import React from "react"
import Axios from "axios"
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            orderedFood:"",
            total:0,
            fullName:"",
            adress:"",
            phone:0,

        }
    }
    confirmOrder(){
    }
render(){
    return(
        <div>
            <div >{this.props.order.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}</div>
            <div  >{this.props.total} </div>
            <input type="text" placeholder="please enter your fullname" id="name"></input>
            <input type="text" placeholder="please enter your adress" id="adress"></input>
            <input type="value" placeholder="please enter your number" id="number" ></input>
            <button onClick={this.confirmOrder.bind(this)}>Confirm your order</button>
        </div>
    )
}
}
export default UserInfo;
