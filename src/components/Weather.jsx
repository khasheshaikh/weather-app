import React,{useEffect,useState} from 'react';
import {Row,Col} from "react-bootstrap";
import "./Weather.css";


export const Weather=()=>{
  
    const [data, setData] = useState([]);
    

    const GetWeatherData = async () => {
      
      
        try {
          const res = await fetch(
           "https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=74.00&units=metric&exclude=minutely,hourly&appid=104df50695a2f73b2d604242576c5690"
          );
          const actualData = await res.json();
          setData(actualData);
          console.log([actualData]);
          
    } catch (err) {
      console.log(err);
    }
  };
    

  
  useEffect(() => {
    GetWeatherData();
  }, []);
    return(

<div>
<div className="center">
  <h1>5- day forecast</h1>
  
</div>
<Row>
<Col md="1"></Col>
<Col md="2">
<div className="card">
      <h2>Today</h2>
      <h5>{data.timezone}</h5>
      <h1>{data.daily[0].temp.day}</h1>
      <h2>{data.daily[0].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png` } alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>Yesterday</h2>
      <h5>{data.timezone}</h5>
      <h1>{data.daily[1].temp.day}</h1>
      <h2>{data.daily[1].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`} alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>2 days ago</h2>
      <h5>{data.timezone}</h5>
      <h1>{data.daily[2].temp.day}</h1>
      <h2>{data.daily[2].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`} alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>3 days ago</h2>
      <h5>{data.timezone}</h5>
      <h1>{data.daily[3].temp.day}</h1>
      <h2>{data.daily[3].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`} alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>4 days</h2>
      <h5>{data.timezone}</h5>
      <h1>{data.daily[4].temp.day}</h1>
      <h2>{data.daily[4].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`} alt="hi"></img>
</div>  
</Col>
<Col md="1"></Col>

</Row>

     
</div>
  );
};