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
import ApartmentShow from './pages/ApartmentShow'


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
      
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />
                
                <Route
                  path="/apartmentshow/:id"
                  render={(props) => {
                    let paramId = +props.match.params.id
                    let apartment = this.state.apartments.find(apartment => apartment.id === paramId)
                    return <ApartmentShow apartment={apartment} deleteCat={this.deleteCat} />}} 
                  />

                <Route path="/contact" component={Contact} />

            </Switch>
       
              
          <Footer />
        </Router>
        
      </>
    )
  }
}

export default App