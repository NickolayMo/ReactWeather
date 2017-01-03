'use strict';

import React from 'react';
import Form from './weather/Form';
import Message from './weather/Message';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading:false
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(location){
        let that = this;
        this.setState({isLoading:true});
        openWeatherMap.getTemp(location).then(
            function(temp){
                that.setState({
                    location:location,
                    temp: temp,
                    isLoading:false
                });
            },
            function (error) {
                that.setState({isLoading:false});
                alert(error);
            }
        );

    }

    render() {
        let {isLoading, location, temp} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather</h3>;
            }else if(location && temp){
                return <Message location={location} temp={temp}/>;
            }

        }

        return (
            <div>
                <h1>
                    Get Weather
                </h1>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>


        );
    }
}
export default Weather;