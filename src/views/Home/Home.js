import React from 'react';
import CurrentWeather from '../../components/currentWeather';
import ForecastWeather from '../../components/ForecastWeather';

const Home = () => {


  return (
    <>
    <CurrentWeather/>
    <div className="container-fluid">
    <ForecastWeather/>
    </div>
    </>
  );
};

export default Home;
