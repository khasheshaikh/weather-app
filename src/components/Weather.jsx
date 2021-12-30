import React,{useState} from 'react';
import {Row,Col,Button} from "react-bootstrap";
import "./Weather.css";


export default function Weather ({onFetchWeather}) {
  
    const [data, setData] = useState([]);
    const [lat, setLat] = useState("19.07");
    const [lon, setLon] = useState("72.87");
    

    async function GetWeatherData() {
      const data = await onFetchWeather({lat,lon});
  
  if (data) {
    setData(data);
    console.log(data);
  }else{
    console.log("fetch error");
  }

}
function handleLatChange(event) {
  setLat(event.target.value);
}

function handleLanChange(event) {
  setLon(event.target.value);
}
    return(
      <div>
      
       
<div className="center">
  <h1>5- day forecast</h1>
  
</div>
      

<div className="center">
<input value={lat} onChange={handleLatChange} type="number"></input>
<input value={lon} onChange={handleLanChange} type="number"></input>
<Button onClick={GetWeatherData}>fetch</Button>
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
  )
    }
  