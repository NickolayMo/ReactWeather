'use strict';
import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        let location = this.refs.location.value;
        if(location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location"/>
                <button type="submit">Get Weather</button>
            </form>
        );
    }
}

export default Form;