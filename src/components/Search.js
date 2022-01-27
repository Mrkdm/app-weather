import React, { useContext, useState } from 'react';

import WeatherContext from '../context/weatherContext'


const Search = () => {
    const [cityName, setCityName] = useState(null);
    const { getWeatherCurrentNameCity, getWeatherCall5HourlyNameCity}=  useContext(WeatherContext)

    const getWeather = (e)=>{
        e.preventDefault()
        getWeatherCurrentNameCity(cityName)
        getWeatherCall5HourlyNameCity(cityName)
    }
    return (
        <>


            <div className="col-lg-12 mb-5">
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" style={{fontSize:"20px"}} id="basic-addon1">
                    <i className="fas fa-search-location"></i>
                    </span>
                    <input type="text" onChange={(e)=> setCityName(e.target.value)} className="form-control" placeholder="Busca tu ciudad" aria-label="Ciudad" aria-describedby="basic-addon1"/>
                    <button className="btn btn-success" onClick={getWeather} type="button">Buscar</button>
                </div>
            </div>


        </>
    );
};

export default Search;
