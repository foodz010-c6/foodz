import React from "react"
import ReactDOM from 'react-dom';
import Axios from "axios";
import Menu from "./components/Menu.jsx";

class App extends React.Component{
   constructor(props){
       super(props);
       this.state={
          menu :[],
       
       }
   }
   componentDidMount(){
        const settings={
          method:"GET",
          url:"/api/menu"
        }
        Axios(settings)
         .then(response =>{
           this.setState({
             menu :response.data
           })
         })
         .catch(err=>{throw err})
   }
    render(){
        return( 
        <div >
            <Menu menu={this.state.menu} />
        </div>
              )
    }

  }
ReactDOM.render(<App />, document.getElementById('app'));