import React, { Component } from 'react';



 class Startup extends Component {
    constructor (props){
        super(props);
        this.state ={
            data: []
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
    .then(name => console.log({data: name}));
}



render () {
    return(
       <h1>hola</h1>
    )
}
}

export default Startup