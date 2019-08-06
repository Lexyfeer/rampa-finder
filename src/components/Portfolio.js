import React, { Component, Fragment } from 'react';
import Chart from './Charts';
import Search from './Search';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startups: [],
            updates: []
        }
    }

    componentWillMount() {
        fetch('http://45.232.252.23/laboratoria/public/_/items/portfolio_updates',
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer laboratoriaToken2019',
                'Content-type': 'application/json; '
            }
        }
    )
        .then(response => response.json())
        .then(data => {this.setState({ updates: data.data }) });
    }
    render() {
        const { updates } = this.state;
        return (
            <Fragment>
                <div>
                    
                    <p>Componente para mostrar solo las startups que ya tengan en su portafolio</p>

                    {updates.map((update, index) => {
                   if (update.crecimiento !== 'null') {
                       return (
                           <div className="card" key={index}>
                               <div className="card-body">
                                  <p className="card-text">{update.startup}</p>
                                   <h5 className="card-title">{update.crecimiento}</h5>
                                   <p className="card-text">{update.mes}</p>
                                   <p className="card-text">{update.fecha}</p>
                                   <a
                                       href={update.fecha}
                                       rel="noopener noreferrer"
                                       target="_blank"
                                   >
                                   </a>
                                   <a
                                       href={update.mes}
                                       rel="noopener noreferrer"
                                       target="_blank"
                                   >
                                       Ver más detalles del proyecto
                                  </a>
                                   <a href="#" className="btn btn-primary">Go somewhere</a>
                               </div>
                               <Chart
                               chartData = "1"
                               labels = "2"
                               data = "3"
                               title="Crecimiento"
                               legendPosition="bottom"
                               />
                           </div>
                       )
                   }
               })}
                    
                </div>
            </Fragment>

        )
    }
}

export default Portfolio;
