import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import contactus from '../assets/contactus.jpg'

class Contact extends Component {
  render() {
    return (
      <div>
          <h1>Contact Page Goes Here!</h1>
          <img src={contactus} alt="contact us" width="350px" />
      </div>
    )
  }
}

export default Contact