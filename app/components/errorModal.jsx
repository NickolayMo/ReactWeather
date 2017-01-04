'use strict';
import React from 'react';

class ErrorModal extends React.Component{
    componentDidMount(){
        let modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    }
    render(){
        return (
            <div className="reveal" id="errorModal" data-reveal>
                <h1>Error:</h1>
                <p className="text-center">{this.props.errorText}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>

            </div>
        );
    }
}
export default ErrorModal;