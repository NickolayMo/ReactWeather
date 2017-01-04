'use strict';
import React from 'react';

class Message extends React.Component{
    render(){
        return (
            <div>
                <p className="text-center">In {this.props.location} now is {this.props.temp} C</p>
            </div>
        );
    }
}
export default Message;