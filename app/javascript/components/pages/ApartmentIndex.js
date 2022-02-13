import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import interior from '../assets/interior.jpg'
import apartments from '../mockApartment'

class ApartmentIndex extends Component {
  
  render() {
    const { apartments } = this.props
    
    return(
      <>
      <NavLink to={`/apartmentnew/${apartments.id}`} key={apartments.id}>
           <Button>Add your apartment</Button>
      </NavLink>
  
        <h2>Apartment Index Section Here!</h2>

        
        
        <img src={interior} alt="interior aparment" width="500px" />
        {apartments && apartments.map(apartment => {
          return(
            <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id}>
            <h4>{apartment.street}</h4>
            <p>{apartment.city}</p>
            <p>{apartment.state}</p>
          
            </NavLink>
          )
        })}

        
        
      </>
    )
  }
}
export default ApartmentIndex

