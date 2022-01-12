import logo from './logo.svg';
import React,{useState} from "react";
import { BsFillSunFill,BsFillMoonFill } from "react-icons/bs";
import './App.css';
import Weather from './components/Weather'

function App() {
  const [dark, setDark] = useState(false)
  async function GetWeatherData ({city}) {
      
      
    try {
      const response = await fetch(
       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=104df50695a2f73b2d604242576c5690`
       
      );
      const data = await response.json();
      if(data){
        return data;
      }else{
        console.log("error");
      }
      
  } catch (e) {
  console.log(e);
  
}

  return null;
}




  
  
  return (
    <div className={dark ? "App dark-mode" : "App light-mode"}>
    <div className="navigation">
    <div>
    <BsFillSunFill className={dark ? "icon-dark": "icon-light"}/>
      <label className="switch">
      
        <input type="checkbox"
          onChange={()=>setDark(!dark)}
        />
        <span className="slider round"></span>
      </label>
      <BsFillMoonFill className={dark ? "icon-dark": "icon-light"}/>
      </div>
      <div className={dark ? "center-dark":"center-light"}>  
      <h1>5- day forecast</h1>
      </div>
    </div>
    
      <Weather onFetchWeather={GetWeatherData}/>
    </div>
  
  
    
   
  );
  }

export default App;
