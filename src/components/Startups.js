import React, { Component, Fragment } from 'react';
import DataStartups from '../data/dataStartups.json';



class Startups extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {</
    //         data: []
    //     }
    // }
    // componentWillMount() {
    //     fetch('http://45.232.252.23/laboratoria/public/_/items/startups', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: 'Bearer laboratoriaToken2019',
    //             'Content-type': 'application/json; '
    //         }
    //     }
    //     )
    //         .then(response => response.json())
    //         .then(data => this.setState({ data }));
    // }

    render() {
        return (
            <Fragment>
                <div className="contentStartups">
                {DataStartups.data.map((projectDetail, index)=>{
                        return (
                            <div className="card" key={index}>
                            <img
                                className="imgProjects card-img-top"
                                src={projectDetail.logo}
                                alt={projectDetail.name}
                                title={projectDetail.name}
                             />
                            <div className="card-body">
                                <h5 className="card-title">{projectDetail.name}</h5>
                                <p className="card-text">{projectDetail.one_liner}</p>
                                <p className="card-text">{projectDetail.website}</p>
                                <p className="card-text">{projectDetail.startup_status}</p>
                            <a
                                href={projectDetail.linkProject}
                                rel="noopener noreferrer"
                                target="_blank"
                             >
                                Ir al proyecto
                             </a>
                            <a
                                href={projectDetail.linkReadme}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Ver más detalles del proyecto
                            </a>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        )
                    })}
                </div>
               
            </Fragment>
        )
    }
}

export default Startups;


