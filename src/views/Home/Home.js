import React from 'react';
import CurrentWeather from '../../components/currentWeather';
import ForecastWeather from '../../components/ForecastWeather';

const Home = () => {


  return (
    <>

    <div className="page-header">
      <h1 className="text-center mt-5">
        Weather App
      </h1>
    </div>
    <CurrentWeather/>
    <div className="container-fluid">
    <ForecastWeather/>
    </div>
    </>
  );
};

export default Home;
