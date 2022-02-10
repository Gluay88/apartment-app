import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import Contact from './pages/Contact'
import mockApartment from './mockApartment'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments : mockApartment
    }
  }
  
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
      <Router>
        <Header />
      <h1>Gluay Apartment App</h1>

      <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apartmentindex">ApartmentIndex</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
          </NavItem>   
      </Nav>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/apartmentindex" component={ApartmentIndex} /> */}
                <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />
                <Route path="/contact" component={Contact} />
            </Switch>
       
              {logged_in &&
                <div>
                  <a href={sign_out_route}>Sign Out</a>
                </div>
              }
              {!logged_in &&
                <div>
                  <a href={sign_in_route}>Sign In</a>
                </div>
              }
          <Footer />
        </Router>
        
      </>
    )
  }
}

export default App