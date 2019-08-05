import React, { Component } from 'react';



 class Startups extends Component {
    constructor (props){
        super(props);
        this.state ={
            data: []
        }
    }
componentWillMount(){
    fetch('http://45.232.252.23/laboratoria/public/_/items/startups', { method: 'GET',
    headers: {
        Authorization: 'Bearer laboratoriaToken2019',    
        'Content-type': 'application/json; '     
    }
    }
    )
    .then(response =>  response.json ()) 
    .then(data => this.setState({data}));
}



render () {
    return(
        <div> Aqui van los datos </div> 




    )
}
}

export default Startups;