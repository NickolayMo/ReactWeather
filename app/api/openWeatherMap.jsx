'use strict';

import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=6e7a4d7d6624adae5ea3d1c5ecadffb3&units=metric';

export default {
    getTemp: function(location){
        let encodedLocation = encodeURIComponent(location);
        let requestedUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestedUrl).then(
            function(res){
                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                }else {
                    return res.data.main.temp;
                }
            },
            function(res){
                throw new Error(res);
            }
        );
    }
}