import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
        <h1>Header goes here!</h1>
      </div>
      
      
    )
  }
}
export default Header