import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form,FormControl,InputGroup} from 'react-bootstrap'
import CityName from './CityName'

function Dropdown() {

  const [cityName, setCityName] = useState("Mumbai")
  const [city, setCity] = useState("Mumbai")

  function handleClick() {
    setCity(cityName)
  }

  function handleChange(e) {
    setCityName(e.target.value)
  }

  return (
    <div>
      <InputGroup className="mb-3 searc-box">
        <FormControl
          placeholder="Enter your city name..."
          aria-label="Enter your city name..."
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button variant="outline-success" id="button-addon2" onClick={handleClick}>
          Fetch
        </Button>
      </InputGroup>
      
       {/* <div className="Dropdown">
         <Form.Select
          aria-label="Default select example"
           className="form-select"
           onChange={handleChange}
         >
           <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
           <option value="Nashik">Nashik</option>
         </Form.Select>
         <span>
          <Button onClick={handleClick} variant="outline-success">
          Fetch
           </Button>{' '}
         </span>

     </div> */}

      <CityName city={city}/>

    </div>
  )
}

export default Dropdown
