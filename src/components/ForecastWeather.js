import React, { useContext, useEffect, useState } from 'react';
import WeatherContext from '../context/weatherContext';
import myStyles from '../assets/css/index.module.css'

import iconPresion from '../assets/icons/atmosferico.png'
import iconViento from '../assets/icons/viento.png'
import iconTemperatura from '../assets/icons/temperatura.png'
import iconHumedad from '../assets/icons/humidity.png'
import iconFlecha from '../assets/icons/flecha.png'

const ForecastWeather = () => {
  const [data, setData] = useState(null)

  const [index, setIndex] = useState(0)

  const [fecha, setFecha] = useState(null)



  const { weatherForecast, getWeatherCall5HourlyGeolocation } = useContext(WeatherContext);



  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coo = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      getWeatherCall5HourlyGeolocation(coo)
    })
  }, []);

  console.log(weatherForecast)

  useEffect(() => {
    if (
      !weatherForecast?.city?.name &&
      !weatherForecast?.list


    ) return
    setData({
      name: weatherForecast.city.name,
      list: weatherForecast.list,

    })

  }, [weatherForecast])



  const verify = (num, dateObject) => {


    const getIndex = data && data.list.findIndex((objeto, indice, data) => {
      return objeto.dt === num;
    })
    setIndex(getIndex)
    setFecha(dateObject)
  }


  const dayOne = data && data.list.slice(0, 7);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-sm-">
          <table className={"table mt-5 table-hover " + myStyles.tableBg}>
            <thead>
              <tr className={myStyles.tableHeadBg}>

                <th scope="col">
                  <span className="text-center">
                    <i class={"fas fa-clock " + myStyles.iconStyle}></i>
                  </span>
                </th>
                <th cope="col">
                  <span className="text-center">
                    <i class={"fas fa-thermometer-half " + myStyles.iconStyle}></i>
                  </span>
                </th>
                <th scope="col">
                  <span className="text-center">
                    <i class={"fas fa-tint " + myStyles.iconStyle}></i>
                  </span>
                </th>
                <th scope="col">
                  <span className="text-center">
                    <i class={"fas fa-wind " + myStyles.iconStyle}></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {

                data && dayOne.map((wthr) => {
                  const unixTimestamp = data && wthr.dt
                  const milliseconds = unixTimestamp * 1000
                  const dateObject = new Date(milliseconds)
                  return (
                    <tr key={wthr.dt} onClick={() => verify(wthr.dt, dateObject)}>
                      <td scope='row'>
                        {data && dateObject.toLocaleString("es-ES", { hour: "numeric" })}:00
                      </td >
                      <td >
                        <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(wthr.main.temp)}
                        °c
                      </td>
                      <td>
                        <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && wthr.main.humidity}%<div className="progress border border-1 border-dark rounded-3">
                          <div className="progress-bar bg-info" style={{ width: `${data && wthr.main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td>
                        <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && wthr.wind.speed}m/S
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-lg-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="card-title">
                <h2>{data && data.name}</h2>



              </div>
              <div className="card-body m-0">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-sm-6" >
                      {fecha ?
                        <p className="text-muted">
                          {fecha && data && fecha.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}
                          :00
                        </p> :
                        <p></p>
                      }
                      {index || index == 0 ?

                        <div className="">
                          <p>Sensación termica</p>
                          <h2>{data && Math.round(data.list[index].main.feels_like)}°c</h2>
                          <p>Probabilidad de lluvia</p>
                          <div className="d-flex">
                            <h2 className='m-2'>{Math.round(data && data.list[index].pop * 100)}%</h2>
                            <div className={"progress border border-primary " + myStyles.progressCircle}>
                              <div className="progress-bar bg-info" style={{ width: `${data && data.list[index].pop * 100}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

                            </div>
                          </div>
                          <p>Humedad</p>
                          <div className="d-flex">
                            <h2 className='m-2'>{data && Math.round(data.list[index].main.humidity)}%</h2>
                            <div className={"progress border border-primary " + myStyles.progressCircle}>
                              <div className="progress-bar" style={{ backgroundColor: "#c9dbec", width: `${data && Math.round(data.list[index].main.humidity)}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

                            </div>
                          </div>

                          {data && data.list[index].rain
                            ? <div className="">
                              <p>Volumen de Lluvia</p>
                              <div className="d-flex">
                                <h2>{data && data.list[index].rain['3h']} </h2>
                                <p className='h5 mt-2'>mm</p>
                              </div>
                            </div>
                            : <div className=""></div>

                          }
                          <p>Presion Atmosferica</p>
                          <div className="d-flex">
                            <h2>{data && data.list[index].main.pressure}</h2>
                            <p className='h5 mt-2'>pa</p>
                          </div>


                        </div>



                        : <div></div>
                      }
                    </div>
                    <div className="col-md-6 col-sm-6 mb-4 bg-light ">
                      <div className="mt-4 text-center">
                        <img style={{ width: "160px" }} src={` http://openweathermap.org/img/wn/${data && data.list[index].weather[0].icon}@2x.png`} alt="" />
                      </div>
                      <h2 className="display-3 text-center">
                        {Math.round(data && data.list[index].main.temp)}
                        °c
                      </h2>
                      <h4 style={{ textTransform: "capitalize" }} className='text-center'>
                        {data && data.list[index].weather[0].description}
                      </h4>
                      
                      
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="text-center">
                            <p className="">Temp / max </p>
                            <p className="">{Math.round(data && data.list[index].main.temp_max)}°c</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <div className="text-center">
                            <p className="">Temp / min </p>
                            <p className=""> {Math.round(data && data.list[index].main.temp_min)}°c</p>
                          </div>
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <p>Dirección / viento </p>
                      <img src={iconFlecha} style={{ transform: `rotate(${data && data.list[index].wind.deg}deg)` }} className={myStyles.iconStyle2 + " " + myStyles.rotateArrow} alt="" />

                    </div>
                    <div className="col-md-4">
                      <p>Velocidad / viento</p>
                      <h2>{Math.round(data && data.list[index].wind.speed)} m/S</h2>
                    </div>
                    <div className="col-md-4">
                      <p> Racha / viento</p>
                      <h2>{Math.round(data && data.list[index].wind.gust)}m/S</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastWeather;
