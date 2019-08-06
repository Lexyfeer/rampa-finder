import React, { Component } from 'react';



 class Startups extends Component {
    constructor (props){
        super(props);
        this.state ={
            startups: [],
            founders:[],
            updates:[]
        }
    }
componentWillMount(){
    fetch('http://45.232.252.23/laboratoria/public/_/items/startups', 
    { method: 'GET',
        headers: {
        Authorization: 'Bearer laboratoriaToken2019',    
        'Content-type': 'application/json; '     
    }
    }
    )
    .then(response =>  response.json ()) 
    .then(data => {this.setState({startups: data.data})});

    fetch('http://45.232.252.23/laboratoria/public/_/items/founders', 
    { method: 'GET',
        headers: {
        Authorization: 'Bearer laboratoriaToken2019',    
        'Content-type': 'application/json; '     
    }
    }
    )
    .then(response =>  response.json ()) 
    .then(data => console.log({founders: data}));

    fetch('http://45.232.252.23/laboratoria/public/_/items/portfolio_updates', 
    { method: 'GET',
        headers: {
        Authorization: 'Bearer laboratoriaToken2019',    
        'Content-type': 'application/json; '     
    }
    }
    )
    .then(response =>  response.json ()) 
    .then(updates => console.log({updates: updates}));
}


render () {
    const { startups }= this.state;
    return(
       
      <div>
          {
              startups.map((startup)=>{
                  if(startup.startup_status == "Seguimiento"){
                    return(<ul>{startup.name + " " + startup.startup_status + " " + startup.descripcion}</ul>)
                  }
                  
              })
          }
      </div>
     
    )
}
 }

export default Startups;