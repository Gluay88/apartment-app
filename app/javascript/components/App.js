import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import Contact from './pages/Contact'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments : []
    }
  }
  
  componentDidMount() {
    this.readApartment()
  }

  readApartment = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }

  createApartment = (newApartment) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readApartment())
    .catch(errors => console.log("Apartment Create Errors:", errors))
  }


  updateApartment = (apartment, id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readApartment())
    .catch(errors => console.log("Apartment update errors: ", errors))
  }
  
  deleteApartment = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readApartment())
    .catch(errors => console.log("Apartment delete errors:", errors))
  }
  
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { apartments } = this.state
    return(
      <>
      <Router>

          <Header {...this.props} />    
      
            <Switch>
                <Route exact path="/" component={Home} />

                <Route
                path="/apartmentindex"
                render={(props) => <ApartmentIndex apartments={this.state.apartments} />}
                />
                
                <Route
                  path="/apartmentshow/:id"
                  render={(props) => {
                    let paramId = +props.match.params.id
                    let apartment = this.state.apartments.find(apartment => apartment.id === paramId)
                    return <ApartmentShow apartment={apartment} deleteApartment={this.deleteApartment} />}} 
                />

                <Route 
                path="/apartmentnew"
                render={(props) => <ApartmentNew createApartment={this.createApartment}/>}
                />

                <Route 
                path="/apartmentedit/:id"
                render={(props) => {
                  let id = props.match.params.id
                  let apartment = this.state.apartments.find(apartment => apartment.id === +id)
                  return <ApartmentEdit updateApartment={this.updateApartment} apartment={apartment} />  
                }}
                />

                <Route path="/contact" component={Contact} />

                <Route component={NotFound} />


                {logged_in &&
            <Route
              path="/myapartments"
              render={(props) => {
                let myApartments = apartments.filter(apt => apt.user_id === current_user.id)
                return <ApartmentProtectedIndex apartments={myApartments} />
              }}
            />
          }
          {logged_in &&
            <Route
              path="/apartmentnew"
              render={(props) => {
                return(
                  <ApartmentNew
                    current_user={current_user} createApartment={this.createApartment}
                  />
                )
              }}
            />
          }
               
            </Switch>
              
          <Footer />
          
        </Router>
        
      </>
    )
  }
}

export default App