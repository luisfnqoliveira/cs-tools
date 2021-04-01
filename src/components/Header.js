import React, { Component } from 'react';
import upittLogo from '../assets/images/Upitts_Logo.svg';


class Header extends Component {

    render() {
        return ( 
            <header className = "App-header" >
                <img src = {upittLogo} alt = 'logo' className = "App-logo" />
                <p className = "title" >
                    Memory Paging Practice System
                </p> 
            </header>
        );
    }
}

export default Header;