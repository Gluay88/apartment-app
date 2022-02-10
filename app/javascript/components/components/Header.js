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
   

    return (
      <div>
        <h1>Apartment Hunter App</h1>
        
              { logged_in &&
                  <a href={sign_out_route}>Sign Out</a>  
              }
              {!logged_in &&
                  <a href={sign_in_route}>Sign In</a>   
              }
        
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