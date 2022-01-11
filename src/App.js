import logo from './logo.svg';
import React from "react";

import './App.css';
import Weather from './components/Weather'

function App() {
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
    <div>
    <h1>Welcome</h1>
      <Weather onFetchWeather={GetWeatherData}/>
    </div>
  
  
    
   
  );
  }

export default App;
