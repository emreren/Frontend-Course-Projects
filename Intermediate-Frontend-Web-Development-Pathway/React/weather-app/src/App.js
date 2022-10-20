import './App.css';
import City from './components/City';
import Forecast from './components/Forecast';

import {WeatherContextProvider} from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <City />
        <Forecast />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
