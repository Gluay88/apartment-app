import React, { Component } from 'react'


class ApartmentProtectedIndex extends Component {
  render() {
      const { apartments } = this.props
    return (
      <>
      <h3>My Apartment Listings</h3>
      { apartments && apartments.map(apartment => {
        return(
          
         <div>
          <h4>{apartment.street}</h4>
          <p>{apartment.city}</p>
          <p>{apartment.state}</p>
          <p>{apartment.manager}</p>
          <p>{apartment.email}</p>
          <p>{apartment.price}</p>
          <p>{apartment.bedrooms}</p>
          <p>{apartment.bathrooms}</p>
          <p>{apartment.pets}</p>
          </div>
        )
      })}
        
        
      </>
    )
  }
}

export default ApartmentProtectedIndex