import React, { Component, Fragment } from 'react';
import { Form, FormControl, Button } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <p>Componente de inicio</p>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-info">Search</Button>
                    </Form>
                </div>
            </Fragment>

        )
    }
}

export default Home;
