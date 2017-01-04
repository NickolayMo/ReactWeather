'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component{
    componentDidMount(){

        let modalMarkup = (
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
        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        let modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    }

    render(){
        return (
            <div></div>
        );
    }
}
export default ErrorModal;