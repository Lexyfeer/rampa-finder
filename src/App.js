import React, {Component} from 'react';
import './App.css';
import Startups from './components/Startups';
import NavbarProfile from './components/Navbar'

class App extends Component{
    render(){
        return(
            <div className="App">
               <NavbarProfile />
               <Startups />
            </div>
        )
    }
}

export default App;
