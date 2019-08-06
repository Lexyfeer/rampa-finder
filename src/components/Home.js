import React, { Component, Fragment } from 'react';
import Search from './Search';
// import Chart from './Charts';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startups: [],
            founders: [],
            updates: []

        }
        this.viewStartups = this.viewStartups.bind(this);

    }


    viewStartups() {
        fetch('http://45.232.252.23/laboratoria/public/_/items/startups',
            {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer laboratoriaToken2019',
                    'Content-type': 'application/json; '
                }
            }
        )
            .then(response => response.json())
            .then(data => { this.setState({ startups: data.data }) });
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
        const { startups } = this.state;

        return (

            <Fragment>

                <div className="contentStartups">
                    <Search />
                    <h1>Startups pendientes por evaluar</h1>
                    {startups.map((startup, index) => {

                        if (startup.startup_status === 'Seguimiento') {

                            return (
                                <div className="card" key={index}>
                                    <img
                                        className="imgProjects card-img-top"
                                        src={startup.logo}
                                        alt={startup.name}
                                        title={startup.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{startup.name}</h5>
                                        <p className="card-text">{startup.one_liner}</p>
                                        <p className="card-text"> Status: {startup.startup_status}</p>
                                        <p className="card-text"> Sitio web: www.{startup.website}</p>

                                        
                                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Button with data-target
                                        </button>

                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                                <h2>Locación: {startup.location}</h2>
                                                <h3>Calificación: {startup.eval_num}</h3>
                                                <p>Descripcioncompleta: {startup.descripcion}</p>
                                                <p>Descubierta en: {startup.descubierta_en}</p>
                                            </div>
                                        </div>
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
