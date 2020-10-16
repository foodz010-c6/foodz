 import React from 'react'
 
 class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
          ordredFood:[],
          total:0
 
        }
        
    }
    checkboxes(){
      var con = document.getElementById('container');
      var items = con.getElementsByTagName('input');
      var arr=[]
      var cost=0
      
      for(var i=0;i<items.length;i++){
        // console.log(items[i].name)
        // console.log(items[i].value)
        if(items[i].checked){
          arr.push(items[i].name)
          cost+= JSON.parse(items[i].value)
    }
   
    }
    this.setState({ordredFood:arr,total:cost})

  }
   
   
  
     render(){
      console.log(this.state)
         return(
          
         <div id="container" >
                 {this.props.menu.map(item => (
                     <div key={item.id}>
          <h4 id="title" >{item.food} {item.price}</h4>
           <input id="checkmark" type="checkbox" value={item.price} name={item.food}></input>
           
          </div>

        ))}
              <div>
                  <button onClick={this.checkboxes.bind(this) }>submit</button>
            </div>
         </div>
         
               )
             }
 
 }
export default Menu;