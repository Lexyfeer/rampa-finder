import React, { Component, Fragment } from 'react';
import Search from './Search';
import Value from './InformationStartups';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        startups: [],
        founders: [],
        updates: [],
    
          observaciones: '',
          evaluacion: '',
          eval_num: 0,
      
        // chartData: {}
    }
    this.viewStartups= this.viewStartups.bind(this);
}

viewStartups(){
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
}

componentWillMount() {
  this.viewStartups();

    fetch('http://45.232.252.23/laboratoria/public/_/items/founders',
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer laboratoriaToken2019',
                'Content-type': 'application/json; '
            }
        }
    )
        .then(response => response.json())
        .then(data => { this.setState({ founders: data.data }) });
    
}

upDate(id, value){  
  fetch('http://45.232.252.23/laboratoria/public/_/items/startups/'+ id,{
      method: 'PATCH', 
      headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json;',
       Authorization: 'Bearer laboratoriaToken2019'
      },
      body: JSON.stringify(value),
     }
     ).then(response => response.json())
     .then(data =>{
         console.log('exito',data)
         return data
     }).catch(error => console.error('Error:', error));         
  }

// componentWillMount(){
//   this.getChartData();
// }
//
// getChartData() {
//   //Ajax calls here
//   this.setState({
//     chartData: {
//       // updates.crecimiento
//       // updates.ventas_mes
//       labels: ['Myrna', 'Liz', 'Lexy', 'Karen', 'Chío'],
//       datasets: [{
//         label: 'Sleep time',
//         data: [2, 4, 2, 0, 7],
//         backgroundColor: ['turquoise', 'palegreen', 'lightcoral', 'orange', 'pink'],
//       }]
//     }
//   })
// }
// startupName = (update, startup) => {
//   console.log('fuera if', startup.id)
//
//   if(update.startup === startup.id) {
//     let startup =
//     console.log(startup, 'dentro de if')
//     return startup.name;
//   }
// }
//
// keys(id).forEach(
//   console.log(startup.id);
// )
handlerobser=(e)=>{
  this.setState({observaciones: e.target.value})
}
handlerSubmit=(e)=>{
e.preventDefault();
console.log('si click')
const alData ={
  observaciones: this.state.observaciones
}

this.upDate()
}
render() {
  
    const { startups } = this.state;
    // const { founders } = this.state;
    return (

      <Fragment>
      <div className="contentStartups">
        <Search />
        <h1>Startups pendientes por evaluar</h1>
        {startups.map((startup, index) => {
          if (startup.startup_status  === 'Seguimiento') {

            return (
              <div className="card" key={index}>

              <div className="card-body">
                <h5 className="card-title">{startup.name}</h5>
                <p className="card-text">{startup.one_liner}</p>
                <p className="card-text">{startup.website}</p>
                <p className="card-text">{startup.startup_status}</p>
                <a
                href={startup.linkProject}
                rel="noopener noreferrer"
                target="_blank"
                >
                Ir al proyecto
                </a>
                <a
                href={startup.linkReadme}
                rel="noopener noreferrer"
                target="_blank"
                >
                Ver más detalles del proyecto
                </a>
                <form onSubmit={this.handlerSubmit}>
                <Value handlerProp={this.handlerobser}/>
                </form>
                
              </div>
            </div>
          )
        }
      })}
      </div>
         </Fragment>
       )
     }
}



export default Home;

