import React,{useEffect,useState} from 'react';
import {Row,Col} from "react-bootstrap";
import "./Home.css";


export const Home=()=>{

    const [data, setData] = useState([]);

    const GetWeatherData = async () => {
        try {
          const res = await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&exclude=minutely,hourly&appid=104df50695a2f73b2d604242576c5690"
          );
          const actualData = await res.json();
          setData(actualData);
          console.log([actualData.current.weather[0].icon]);
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
      <h5>{data.timezone}</h5>
      <h1>{data.current.temp}</h1>
      <h2>{data.current.weather[0].main}</h2>
      <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}></img>
      
     
    
</div>  
</Col>
<Col md="2">
<div className="card">
      <h5>{data.timezone}</h5>
      <h1>{data.current.temp}</h1>
</div>  
</Col>
<Col md="2">
<div className="card">
      <h5>{data.timezone}</h5>
      <h1>{data.current.temp}</h1>
</div>  
</Col>
<Col md="2">
<div className="card">
      <h5>{data.timezone}</h5>
      <h1>{data.current.temp}</h1>
</div>  
</Col>
<Col md="2">
<div className="card">
      <h5>{data.timezone}</h5>
      <h1>{data.current.temp}</h1>
</div>  
</Col>
<Col md="1"></Col>

</Row>

     
   
    
    
    
  

</div>
    )
}