'use strict';
import React from 'react';

class Message extends React.Component{
    render(){
        return (
            <div>
                <h2>In {this.props.location} now is {this.props.temp} C</h2>
            </div>
        );
    }
}
export default Message;