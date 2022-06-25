import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GridCards from './GridCards'

function CityName(props) {
  return (
    <div>
      <div className="heading-body">
        <p>{props.city} </p>
      </div>
      <GridCards city={props.city} />
    </div>
  )
}
export default CityName
