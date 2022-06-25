import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'


function Header() {

  const [toggle, setToggle] = useState(false)

  function handleClick(){
      toggle ? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = 'black'
      toggle ? document.body.style.color = 'black' : document.body.style.color = 'white'
      setToggle(!toggle)
  }

  return (
    <div className='heading'>
     { toggle ? <Button id="dark" variant="outline-light" className='Mode' onClick={handleClick}>Light Mode</Button> :  <Button id="light" variant="outline-dark" className='Mode' onClick={handleClick}>Dark Mode</Button> }
      <h1 className="heading-text">5-Day Forecast.</h1>
    </div>
  )
}
export default Header
