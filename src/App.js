import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import Startup from './components/Startup';

class App extends Component{
    render(){
        return(
            <div>
               <h1>App</h1>
               <Startup />
            </div>
        )
    }
}

export default App;