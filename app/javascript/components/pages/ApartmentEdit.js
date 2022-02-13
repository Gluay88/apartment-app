import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class ApartmentEdit extends Component {
    constructor(props){
        super(props)
        let { street, city, state, manager, email, price, bedrooms, bathrooms, pets, user_id } = this.props.apartment;
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
                user_id:"",
            },
            submitted: false
        }
    }

handleChange = (e) => {
    let { newApartment } = this.state
    newApartment[e.target.name] = e.target.value
    this.setState({ newApartment: newApartment })
}

handleSubmit = () => {
    this.props.updateApartment(this.state.newApartment, this.props.apartment.id)
    this.setState({ submitted: true})
}


  render() {
    return (
      <>
      <h2>Apartment Edit</h2>
      <Form>
            <FormGroup>
                <Label for="name">Street</Label>
                <Input
                type="string"
                name="street"
                onChange={this.handleChange}
                value={this.state.newApartment.street}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">City</Label>
                <Input
                type="string"
                name="city"
                onChange={this.handleChange}
                value={this.state.newApartment.city}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">State</Label>
                <Input
                type="string"
                name="state"
                onChange={this.handleChange}
                value={this.state.newApartment.state}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Manage</Label>
                <Input
                type="string"
                name="manager"
                onChange={this.handleChange}
                value={this.state.newApartment.manager}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Email</Label>
                <Input
                type="string"
                name="email"
                onChange={this.handleChange}
                value={this.state.newApartment.email}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Price</Label>
                <Input
                type="string"
                name="price"
                onChange={this.handleChange}
                value={this.state.newApartment.price}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Bedrooms</Label>
                <Input
                type="integer"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.newApartment.bedrooms}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Bathrooms</Label>
                <Input
                type="integer"
                name="bathrooms"
                onChange={this.handleChange}
                value={this.state.newApartment.bathrooms}
                />
            </FormGroup>
            
            <Button
            name="submit"
            onClick={this.handleSubmit}
            >
                Edit Apartment

            </Button>

        </Form>

        {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />}
      </>
    )
  }
}

export default ApartmentEdit