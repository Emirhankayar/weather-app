import React, {useState} from 'react';
import Background from './Background';
import axios from 'axios';
import myKey from './config.js';



function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myKey}`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className="app">
      <div className="container">
        <div className='Bg'><Background weatherDescription = {data.weather ? data.weather[0].main : null} /></div>
        <div className="top">
          <div className="search">
            <input          
            value={location} 
            onChange={event => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder='Enter Location'
            type="text"/>
          </div>
          <div className="location">
            {data ? <p>{data.name}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp-273.15)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{Math.round(data.main.feels_like-273.15)}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{Math.round(data.wind.speed*1.6)}km/h</p> : null}
            <p>Wind speed</p>
          </div>

        </div>
}
      </div>
    </div>
  );
}


export default App;
