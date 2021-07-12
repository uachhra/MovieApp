import {Link} from 'react-router-dom'
import React, { Component } from 'react';

const NavBar = () => {
    return (
        <div class="topnav">
            <Link to="/" class="active" >BookMyTickets</Link>
            <Link to='/movies' >Movies</Link>
            <Link to='/shows' >TV Show</Link>
            
            <Link to='/register' style={{float:"right"}}>Register</Link>
            <Link to='/login' style={{float:"right"}}>Login</Link>
            
            


        </div>
        
    );


}

export default NavBar;