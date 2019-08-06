import React, { Component, Fragment } from 'react';
// import Chart from './Charts';

class Startups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startups: [],
            founders: [],
            updates: []
        }
    }
    componentWillMount() {
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
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Startups;
