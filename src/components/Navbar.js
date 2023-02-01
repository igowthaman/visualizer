import React, {Component} from "react";
import logo from ".././img/logo.png";


class Navbar extends Component{
    render(){
        return(
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"></img>
                    Visualizer
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;