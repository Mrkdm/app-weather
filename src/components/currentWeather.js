
import React, { useContext, useEffect, useState } from 'react';
import WeatherContext from '../context/weatherContext';
import myStyles from '../assets/css/index.module.css'
import iconPresion from '../assets/icons/atmosferico.png'
import iconViento from '../assets/icons/viento.png'

import iconHumedad from '../assets/icons/humidity.png'
import Search from './Search';
const CurrentWeather = () => {
    const [data, setData] = useState(null)


    const { weather, getWeatherCurrentGeolocation } = useContext(WeatherContext)
  
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const coo = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        getWeatherCurrentGeolocation(coo)
      })
    }, []);
  
    console.log(weather)
  
    useEffect(() => {
      if (!weather?.main?.temp &&
        !weather?.main?.humidity &&
        !weather?.sys?.country &&
        !weather?.wind?.speed &&
        !weather?.main?.pressure &&
        !weather?.main?.feels_like &&
        !weather?.clouds?.all &&
        !weather?.weather?.[0]?.icon &&
        !weather?.weather?.[0]?.description &&
        !weather?.name
      ) return
      setData({
        name: weather.name,
        country: weather.sys.country,
        windSpeed: weather.wind.speed,
        temp: weather.main.temp,
        pressure: weather.main.pressure,
        feels_like: weather.main.feels_like,
        humidity: weather.main.humidity,
        icon: weather.weather[0].icon,
        clouds: weather.clouds.all,
        description: weather.weather[0].description
      })
  
    }, [weather])
    return (
        <div className="container-fluid">

            <div className="row mt-5">
                <div className="col-md-7 col-sm-12 mx-auto">

                    <div className="card bg-primary mx-auto" style={{ width: "100%" }}>
                        <div className="card-body ">
                            <div className="card-header text-center">
                                <img src={` http://openweathermap.org/img/wn/${data && data.icon}@2x.png`} className='img-fluid' alt="" />
                            </div>
                            <h2 className="card-title display-2 text-white text-center">{data && Math.round(data.temp)}°C</h2>
                            <h6 className="card-subtitle text-center mb-2 text-muted">{data && data.name} / {data && data.country}</h6>
                            <div className="container d-flex justify-content-center">
                                <div className="d-flex m-1">
                                    <span className={"m-1 " + myStyles.iconStyle}>
                                        <img src={iconViento} className={myStyles.iconStyle} alt="" />

                                    </span>
                                    <p className='m-2 text-white'><b>{data && Math.round(data.windSpeed)} m/s </b></p>

                                </div>
                                <div className="d-flex m-1">
                                    <span className={"m-1 " + myStyles.iconStyle}>
                                        <img src={iconPresion} className={myStyles.iconStyle} alt="" />
                                    </span>
                                    <p className='m-2 text-white'><b>{data && Math.round(data.pressure)} hPa</b></p>

                                </div>
                                <div className="d-flex m-1">
                                    <span className={"m-1 " + myStyles.iconStyle}>
                                        <img src={iconHumedad} className={myStyles.iconStyle} alt="" />
                                    </span>
                                    <p className='m-2 text-white'><b>{data && Math.round(data.humidity)}%</b></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-5">
                    <div className="row">
                    <Search/>
                    </div>
                    <div className="card bg-secondary">
                        <div className="card-body">
                            <div className="d-flex p-2">
                                <h5 className="m-2">Sensación termica:  </h5>
                                <p className="text-success m-2 h5"> {data && Math.round(data.feels_like)}°c </p>
                            </div>
                            <div className="d-flex p-2">
                                <h5 className="m-2">Nubosidad:  </h5>
                                <p className="text-success m-2 h5"> {data && Math.round(data.clouds)}%</p>
                            </div>

                            <div className="d-flex p-2">
                                <h5 className="m-2">Descripción  </h5>
                                <p style={{textTransform:"capitalize"}} className="text-success m-2 h5"> {data && data.description} </p>
                            </div>

                         
                           
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CurrentWeather;
