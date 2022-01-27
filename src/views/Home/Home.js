import React from 'react';
import CurrentWeather from '../../components/currentWeather';
import ForecastWeather from '../../components/ForecastWeather';

const Home = () => {


  return (
    <>
     <div className="page-header text-center mt-4">
      <h1>Weather App</h1>
    </div>
    <CurrentWeather/>
    <div className="container-fluid">
    <ForecastWeather/>
    </div>
    </>
  );
};

export default Home;
