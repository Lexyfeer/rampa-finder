import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import Startup from './components/Startup';

import NavbarProfile from './components/Navbar';

class App extends Component{
    render(){
        return(
            <div>
               <NavbarProfile />
               <h1>App</h1>
               <Startup />
            </div>
        )
    }
}

export default App;