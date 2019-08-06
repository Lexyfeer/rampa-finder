import React, {Component} from 'react';
import './App.css';
import Startups from './components/Startups'
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import Main from "./components/main";

import NavbarProfile from './components/Navbar';

class App extends Component{
    render(){
        return(
            <div className="App">
               <NavbarProfile />
               <Startups/>
            </div>
        )
    }
}

export default App;