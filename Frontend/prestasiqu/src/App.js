import React, { Fragment } from 'react';

import {connect} from 'react-redux'

import {BrowserRouter as Router} from 'react-router-dom'

import {LoadUser} from './Store/Actions/Auth.Actions'

import BaseRouter from './router'
import Navbar from './Components/Container/navbar'
import Massages from './Components/Container/Massages'

class App extends React.Component{
  componentDidMount(){
    this.props.LoadUser()
  }
  render(){
    return(
      <div className="App">
        <Router>
          <Fragment>
            <Navbar />
            <Massages />
            <div className="container custom-container-setting">
              <BaseRouter  />
            </div>
          </Fragment>
        </Router>
       </div> 
    )
  }
}
const mapStateToProps=state=>({
  auth:state.Auth
})
export default connect(mapStateToProps,{LoadUser})(App)
