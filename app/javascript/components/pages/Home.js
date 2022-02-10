import React, { Component } from 'react'
import apartment from '../assets/apartment.jpg'


class Home extends Component {
  render() {
    return (
      <>
      <h1>Home Page</h1>
      <img src={apartment} alt="doors" width="500px"/>
        
      </>
    )
  }
}
export default Home