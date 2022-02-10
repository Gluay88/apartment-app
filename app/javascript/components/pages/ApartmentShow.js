import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class ApartmentShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    

  render() {
      const { apartment } = this.props
    return (
        <>
        <div>
            <img src={apartment.image} alt="apartment photo" width="400px" />
            <p>Name: {apartment.name} </p>
            <p>Price: {apartment.price} </p>
            <p>Location: {apartment.location} </p>

        </div>
        <NavLink to={`/apartmentedit/${apartment.id}`} key={apartment.id}>
            Edit Apartment Info
        </NavLink>
       </>
    )
  }
}

export default ApartmentShow