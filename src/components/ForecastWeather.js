import React, { useContext, useEffect, useState } from 'react';
import WeatherContext from '../context/weatherContext';
import myStyles from '../assets/css/index.module.css'

import iconPresion from '../assets/icons/atmosferico.png'
import iconViento from '../assets/icons/viento.png'
import iconTemperatura from '../assets/icons/temperatura.png'
import iconHumedad from '../assets/icons/humidity.png'

const ForecastWeather = () => {
  const [data, setData] = useState(null)

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


  const unixTimestamp1 = data && data.list[0].dt
  const milliseconds1 = unixTimestamp1 * 1000
  const dateObject1 = new Date(milliseconds1)



  const unixTimestamp2 = data && data.list[1].dt
  const milliseconds2 = unixTimestamp2 * 1000
  const dateObject2 = new Date(milliseconds2)


  const unixTimestamp3 = data && data.list[2].dt
  const milliseconds3 = unixTimestamp3 * 1000
  const dateObject3 = new Date(milliseconds3)



  const unixTimestamp4 = data && data.list[3].dt
  const milliseconds4 = unixTimestamp4 * 1000
  const dateObject4 = new Date(milliseconds4)



  const unixTimestamp5 = data && data.list[4].dt
  const milliseconds5 = unixTimestamp5 * 1000
  const dateObject5 = new Date(milliseconds5)


  const unixTimestamp6 = data && data.list[5].dt
  const milliseconds6 = unixTimestamp6 * 1000
  const dateObject6 = new Date(milliseconds6)


  const unixTimestamp7 = data && data.list[6].dt
  const milliseconds7 = unixTimestamp7 * 1000
  const dateObject7 = new Date(milliseconds7)

  const unixTimestamp8 = data && data.list[7].dt
  const milliseconds8 = unixTimestamp8 * 1000
  const dateObject8 = new Date(milliseconds8)

  return (
    <>
     <div className="row">
       <div className="col-lg-6"> <table class="table table-dark mt-5 table-bordered">
        <thead>
          <tr className='table-info'>

            <th scope="col">Horario</th>
            <th cope="col">Temperatura</th>
            <th scope="col">Humedad</th>
            <th scope="col">Viento</th>
          </tr>
        </thead>
        <tbody>

          {/*SECTION */}
          <tr>
            <td>
              {data && dateObject1.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>
            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[0].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[0].main.humidity}%<div class="progress rounded-3">
                <div class="progress-bar bg-light" style={{ width: `${data && data.list[0].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[0].wind.speed}m/S
            </td>

          </tr>
          {/*SECTION */}
          <tr>
            <td>
              {data && dateObject2.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>
            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[1].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[1].main.humidity}%<div class="progress rounded-3">
                <div class="progress-bar bg-light" style={{ width: `${data && data.list[1].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[1].wind.speed}m/S
            </td>

          </tr>

          {/*SECTION */}

          <tr>
            <td>
              {data && dateObject3.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>
            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[2].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[2].main.humidity}%<div class="progress rounded-3">
                <div class="progress-bar bg-light" style={{ width: `${data && data.list[2].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[2].wind.speed}m/S
            </td>
          </tr>

          {/*SECTION */}

          <tr>
            <td>
              {data && dateObject4.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>
            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[3].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[3].main.humidity}%<div class="progress rounded-3">
                <div class="progress-bar bg-light" style={{ width: `${data && data.list[3].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[3].wind.speed}m/S
            </td>
          </tr>
          {/*SECTION */}

          <tr>
            <td>
              {data && dateObject5.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>
            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[4].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[4].main.humidity}%<div class="progress rounded-3">
                <div class="progress-bar bg-light" style={{ width: `${data && data.list[4].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[4].wind.speed}m/S
            </td>
          </tr>

          {/*SECTION */}
          <tr>
            <td>
              {data && dateObject6.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>

            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[5].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[5].main.humidity}%<div class="progress rounded-3">

                <div class="progress-bar bg-light" style={{ width: `${data && data.list[5].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[5].wind.speed}m/S
            </td>
          </tr>
          {/*SECTION */}

          <tr>
            <td>
              {data && dateObject7.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>

            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[6].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[6].main.humidity}%<div class="progress rounded-3">

                <div class="progress-bar bg-light" style={{ width: `${data && data.list[6].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[6].wind.speed}m/S
            </td>
          </tr>


            {/*SECTION */}

            <tr>
            <td>
              {data && dateObject8.toLocaleString("es-ES", { weekday: "long", hour: "numeric" })}:00
            </td>

            <td>
              <img src={iconTemperatura} className={myStyles.iconStyle2} alt="" />{data && Math.round(data.list[7].main.temp)}
              °c
            </td>
            <td>
              <img src={iconHumedad} className={myStyles.iconStyle2} alt="" />{data && data.list[7].main.humidity}%<div class="progress rounded-3">

                <div class="progress-bar bg-light" style={{ width: `${data && data.list[7].main.humidity}%` }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </td>
            <td>
              <img src={iconViento} className={myStyles.iconStyle2} alt="" />{data && data.list[7].wind.speed}m/S
            </td>
          </tr>

          

        </tbody>
      </table></div>
     </div>
    </>
  );
};

export default ForecastWeather;
