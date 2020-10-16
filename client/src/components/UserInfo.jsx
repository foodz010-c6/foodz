import React from "react";
import axios from "axios"

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    // this.onWayOfPayement = this.onChangeWayOfPayement.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: "",
      adress: "",
      phonenumber:'',
      // wayofpayement: [],
      users: [],
      // answer:["paypal","cash"]
    }
  }   

//  componentDidMount() {
//       axios.post('http://localhost:3000/api/userinfo').then(response =>{ 
//               this.setState({
//                   users : response.data.map(user=>user.userName),
//                   address: response.data.user.address,
//                   phonenumber: response.info 
//               })
//       })
//     }
 onChangeUsername(e) {
    this.setState({
      userName: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      adress: e.target.value,
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value,
    });
  }
  
  // onChangeWayOfPayement(e) {
  //   this.setState({
  //     wayofpayement: e.target.value,
  //   });
  // }


  onSubmit(e) {
    e.preventDefault();

    const infos = {
      userName: this.state.userName,
      adress: this.state.adress,
      phonenumber: this.state.phonenumber,
    };
      console.log(infos)
    
    axios
      .post("http://localhost:3000/api/userinfo", infos)
      .then((res) => console.log(res.data));

    // window.location = "/";
}
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          <div className="form-group">
            <label>Address: </label>
            <input
              type="text"
              required
              value={this.state.adress}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              required
              value={this.state.phonenumber}
              onChange={this.onChangePhoneNumber}
            />
          </div>
           {/* <div className="form-group">
            <label>Way Of Payement: </label>
            <select
              ref="userInput"
              required
              value={this.state.wayofpayement}
              onChange={this.onChangeWayOfPayement}
            >
              {this.state.answer.map(function (answ,index) {
                return (
                  <option  key={index} value={answ}>
                    {answ}
                  </option>
                );
              })}
            </select>
          </div> */}
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default UserInfo 