import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


class ApartmentShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            newApartment: {
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
                user_id:""     
        },
        submitted: false
        }
    }

    handleSubmit = () => {
        this.props.deleteApartment(this.props.apartment.id)
        this.setState({ submitted: true })
    }

    

  render() {
      const { apartment } = this.props
    return (
        <>
        <div>
            <p>Street: {apartment.street} </p>
            <p>City: {apartment.city} </p>
            <p>State: {apartment.state} </p>
            <p>Manager: {apartment.manager} </p>
            <p>Email: {apartment.email} </p>
            <p>Price: {apartment.price} </p>
            <p>Bedrooms: {apartment.bedrooms} </p>
            <p>Bathrooms: {apartment.bathrooms} </p>
            <p>Pets Allowed: {apartment.pets} </p>

            
        </div>

        <NavLink to={`/apartmentedit/${apartment.id}`} key={apartment.id}>
            <Button>Edit Apartment Info</Button>
        </NavLink>
        <br/>

        <NavLink to="/apartmentindex" onClick={this.handleSubmit}>
            <Button>Delete Apartment Profile</Button>
        </NavLink>

        <br/>
        <NavLink to="/apartmentindex">
                <Button>Back</Button>
        </NavLink>

        
       </>
  

    )
  }
}

export default ApartmentShow