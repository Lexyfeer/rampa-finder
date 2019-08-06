import React, { Component, Fragment } from 'react';
import Search from './Search';

class Startups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startups: [],
            founders: [],
            updates: [],

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

componentWillMount(){
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
            .then(founders => console.log({ founders: founders }));
            
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
            .then(updates => console.log({ updates: updates }));
    }

    

    render() {
        /*this.upDate(65, valuetoUpdate )*/;
        const { startups } = this.state;
        return (
            <Fragment>
                <div className="contentStartups">
                    {startups.map((startup, index) => {
                        if (startup.startup_status) {

                            return (
                                <div className="card" key={index}>
                    
                                    <div className="card-body">
                                        <h5 className="card-title">{startup.name}</h5>
                                        <p className="card-text">{startup.one_liner}</p>
                                        <p className="card-text">{startup.website}</p>
                                        <p className="card-text">{startup.startup_status}</p>
                                        <p className="card-text">{startup.observaciones}</p>
                                        <p className="card-text">{startup.eval_num}</p>
                                        <p className="card-text">{startup.evaluacion}</p>

                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            
            
                <div>
                    <Search />
                    <p>Componente Para mostrar todas las Startups</p>

                </div>
            </Fragment>


        )

    }
}

export default Startups;
