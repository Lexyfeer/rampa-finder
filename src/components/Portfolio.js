import React, { Component, Fragment } from 'react';
import Search from './Search';

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Search />
                    <p>Componente para mostrar solo las startups que ya tengan en su portafolio</p>
                    
                </div>
            </Fragment>

        )
    }
}

export default Portfolio;
