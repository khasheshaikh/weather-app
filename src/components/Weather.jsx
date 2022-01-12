import React,{useState} from 'react';
import {Row,Col,Button,DropdownButton,Dropdown} from "react-bootstrap";
import "./Weather.css";


export default function Weather ({onFetchWeather}) {
  
    const [data, setData] = useState(false);
    const [city, setCity] = useState("mumbai");
    
    

    async function GetWeatherData() {
      const data = await onFetchWeather({city});
         
  if (data) {
    setData(data);
    console.log(data);
    
    
  }else{
    console.log("fetch error");
  }

}
function handleCityChange(event) {
  setCity(event.target.value);
}


    return(
      
      <div className="main">
      
      


{ data ? (
  <div>

    

<div className="center">
<input value={city} onChange={handleCityChange} type="text"></input>


<Button onClick={GetWeatherData}>fetch</Button>
</div>
  <Row>
<Col md="1"></Col>
<Col md="2">

<div className="card">
      <h2>Today</h2>
      <h5>{data.list[0].dt_txt}</h5>
      <h1>{data.list[0].main.temp}°C</h1>
      <h2>{data.list[0].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png` } alt="hi"></img>
      
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>Yesterday</h2>
      <h5>{data.list[8].dt_txt}</h5>
      <h1>{data.list[8].main.temp}°C</h1>
      <h2>{data.list[8].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png` } alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>2 days ago</h2>
      <h5>{data.list[16].dt_txt}</h5>
      <h1>{data.list[16].main.temp}°C</h1>
      <h2>{data.list[16].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png` } alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>3 days ago</h2>
      <h5>{data.list[24].dt_txt}</h5>
      <h1>{data.list[24].main.temp}°C</h1>
      <h2>{data.list[24].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png` } alt="hi"></img>
</div>  
</Col>
<Col md="2">
<div className="card">
<h2>4 days</h2>
      <h5>{data.list[32].dt_txt}</h5>
      <h1>{data.list[32].main.temp}°C</h1>
      <h2>{data.list[32].weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png` } alt="hi"></img>
</div>  
</Col>
<Col md="1"></Col>

</Row> 
</div>
):(<div>

    

<div className="center">
<input value={city} onChange={handleCityChange} type="text"></input>


<Button onClick={GetWeatherData}>fetch</Button>
</div></div>
)}

    
</div>
  )
    }
  