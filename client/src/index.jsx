import React from "react"
import ReactDOM from 'react-dom';
import Axios from "axios";

import Menu from "./components/Menu.jsx";

class App extends React.Component{
   constructor(props){
       super(props);
       this.state={
          
       
       }
   }
  
    render(){
        return( 
        <div >
            <Menu  />
            
        </div>
              )
    }

}
ReactDOM.render(<App />, document.getElementById('app'));