import React, {Component} from 'react';
import Navbar from '../components/Navbar';

let pathname = window.location.pathname

class Header extends React.Component {
    render(){
        return(
            <Navbar title={pathname}/>
        )
    }
}

export default Header;