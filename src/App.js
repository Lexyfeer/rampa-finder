import React, {Component} from 'react';
import './App.css';
import NavbarProfile from './components/Navbar'

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
