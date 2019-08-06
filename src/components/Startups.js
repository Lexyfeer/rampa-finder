import React, { Component, Fragment } from 'react';
import Search from './Search';

class Startups extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Search />
                    <p>Componente Para mostrar todas las Startups</p>

                </div>
            </Fragment>

        )

    }
}

export default Startups;
