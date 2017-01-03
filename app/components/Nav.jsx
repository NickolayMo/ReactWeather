'use strict';
import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
    render(){
        return (
            <nav>
               <IndexLink to="/" activeClassName="active" activeStyle={{ color: 'red' }}>Get Weather</IndexLink>
               <Link to="/about" activeClassName="active"activeStyle={{ color: 'red' }}>About</Link>
               <Link to="/examples" activeClassName="active" activeStyle={{ color: 'red' }}>Examples</Link>
            </nav>
        );
    }
}
export default Nav;