import './assets/bootstrap/bootstrap.min.css'
import Home from "./views/Home/Home";
import './index.css'
import WeatherState from "./context/weatherState";

function App() {
  return (
    <>
    <WeatherState>
        <Home/>
    </WeatherState>
    </>
  );
}

export default App;
