import React,{useReducer} from 'react';
import WeatherReducer from './weatherReducer'
import WeatherContext from './weatherContext';
import axios from 'axios'
import weatherReducerForecast from './weatherReducerForecast';
const WeatherState = (props) => {
    var initialStateWeatherCurrent = {
        weather: {},
       
    }

    var initialStateWeatherForecast = {
        weatherForecast:{}
    }
    const apikey= "0672e4df0584cbff17ca38108a11ac59"


    const [stateCurrent, dispatchCurrent] = useReducer(WeatherReducer, initialStateWeatherCurrent);
    const [stateForecast, dispatchForecast] = useReducer(weatherReducerForecast, initialStateWeatherForecast);

    const getWeatherCurrentNameCity = async (cityName) => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric&lang=sp`)
        dispatchCurrent({
            type: "GET_WEATHERCURRENT_NAMECITY",
            payload:res.data
        })
    }

    const getWeatherCurrentGeolocation = async (coo)=>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coo.lat}&lon=${coo.lon}&units=metric&appid=${apikey}&lang=sp`)
        dispatchCurrent({
            type:"GET_WEATHERCURRENT_GEOLOCATION",
            payload:res.data
        })
    }

    const getWeatherCall5HourlyNameCity =async(cityName)=>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apikey}&lang=sp`)
        dispatchForecast({
            type: "GET_WEATHERFORECAST_NAMECITY",
            payload: res.data
        })
    }

    const getWeatherCall5HourlyGeolocation = async (coo)=>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coo.lat}&lon=${coo.lon}&units=metric&appid=${apikey}&lang=sp`)
        dispatchForecast({
            type: "GET_WEATHERFORECAST_GEOLOCATION",
            payload: res.data
        })
    }

    return (
        <WeatherContext.Provider value={{
            weather:stateCurrent.weather,
            weatherForecast: stateForecast.weatherForecast,
            getWeatherCurrentNameCity,
            getWeatherCurrentGeolocation,
            getWeatherCall5HourlyGeolocation,
            getWeatherCall5HourlyNameCity
            }}>
            {props.children}
        </WeatherContext.Provider>
    )
};

export default WeatherState;
