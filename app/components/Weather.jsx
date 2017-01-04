'use strict';

import React from 'react';
import Form from './weather/Form';
import Message from './weather/Message';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from  './ErrorModal';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading:false,
            errorText:undefined
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
                    isLoading:false,
                    errorText:undefined
                });
            },
            function (error) {
                that.setState({
                    isLoading:false,
                    errorText:error.message,
                    location:null,
                    temp: null
                });
            }
        );

    }


    render() {
        let {isLoading, location, temp, errorText} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }else if(location && temp){
                return <Message location={location} temp={temp}/>;
            }

        }
        function renderError(){
            if(typeof errorText === 'string'){
                return (
                    <ErrorModal errorText={errorText}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">
                    Get Weather
                </h1>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}

            </div>
        );
    }
}
export default Weather;