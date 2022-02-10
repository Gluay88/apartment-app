import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, NavItem } from 'reactstrap'


class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    
    console.log("logged_in", logged_in);
    console.log("current_user", current_user);
    console.log("new_user_route", new_user_route);
    console.log("sign_in_route", sign_in_route);
    console.log("sign_out_route", sign_out_route);

    return (
      <div>
        <h1>Apartment Hunter App</h1>
        {/* pass the props here.. */}
        <Nav>
          <NavItem>
          <div className="nav-bar">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </div>
          <div className="nav-bar">
            <NavLink to="/apartmentindex" className="nav-link">ApartmentIndex</NavLink>
          </div>
          <div className="nav-bar" className="nav-link">
            <NavLink to="/contact">Contact</NavLink>
          </div>
            
          </NavItem>   
      </Nav>
      </div>
      
      
      
    )
  }
}
export default Header