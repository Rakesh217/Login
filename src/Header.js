import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <header>
                <h2>Welcome</h2>
                <Link to='/Login'>Login</Link>
                <Link to='/Registration'>Registration</Link>
            </header>
        );
    }
}

export default Header;