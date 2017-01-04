'use strict';
import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
    render(){
        return (
            <div className="top-bar">
                <div className="top-bar-title">
                    <strong>WeatherApp</strong>
                </div>
                <div id="responsive-menu">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li>
                                <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                            </li>
                            <li>
                                <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                            </li>
                            <li>
                                <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}
export default Nav;