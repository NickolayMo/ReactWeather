'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import Example from  './components/Example';
import About from './components/About';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="examples" component={Example}></Route>
        </Route>


    </Router>,
    document.getElementById('root')
);
