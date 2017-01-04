'use strict';
import React from 'react';
import {Link} from 'react-router';

class Example extends React.Component{
    render(){
        return (
           <div>
               <h1 className="text-center page-title">Examples</h1>
               <p>Here are a few example locations to try out:</p>
               <ol>
                   <li>
                       <Link to="/?location=Rio">Rio</Link>
                   </li>
               </ol>
           </div>
        );
    }
}
export default Example;