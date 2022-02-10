import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import interior from '../assets/interior.jpg'
import apartments from '../mockApartment'

class ApartmentIndex extends Component {
  render() {
    return(
      <>
        <h2>Apartment Index Section Here!</h2>
        
        <img src={interior} alt="interior aparment" width="500px" />
        {this.props.apartments.map(apartment => {
          return(
            <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id}>
            <h4>{apartment.name}</h4>
            <p>{apartment.price}</p>
            <p>{apartment.location}</p>
            
            <img src={apartment.image} alt="apartment photo" width="200px"/>
            </NavLink>
          )
        })}
        
      </>
    )
  }
}
export default ApartmentIndex

