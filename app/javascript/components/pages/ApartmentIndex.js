import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import interior from '../assets/interior.jpg'

class ApartmentIndex extends Component {
  render() {
    return(
      <>
        <h2>Apartment Index Section Here!</h2>
        <img src={interior} alt="interior aparment" width="500px" />
        
      </>
    )
  }
}
export default ApartmentIndex

