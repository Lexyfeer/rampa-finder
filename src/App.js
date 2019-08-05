import React, {Component} from 'react';
import './App.css';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import Main from "./components/main";

import NavbarProfile from './components/Navbar';

class App extends Component{
    render(){
        return(
            <div className="App">
               <NavbarProfile />
            </div>
        )
    }
}

export default App;