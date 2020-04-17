import React, { Fragment } from 'react';

import {connect} from 'react-redux'
// import Store from './Store/Store'

import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
// import PrivateRoute from './Security/PrivateRoute'

import {LoadUser, GetUserFromUserData} from './Store/Actions/Auth.Actions'

import BaseRouter from './router'
import Navbar from './Components/Container/navbar'
// import Home from './Components/Layout/Home'
// import Login from './Components/Layout/Account/login'

class App extends React.Component{
  // UserCheck(){
  //   // console.log(localStorage.getItem('token'))
  //   const {isAuthenticated, user, token, userdata} = this.props.auth
  //   // console.log(token,isAuthenticated, user,userdata)
  //   if (user === null && userdata != null){
  //     this.props.GetUserFromUserData()
  //     console.log("unpurify", user)
  //   }else if(user === null && userdata === null ){
  //     this.props.LoadUser()//TODO update loaduser() not saveing into userdata
  //   }
  // }
  componentDidMount(){
    this.props.LoadUser()
  }
  render(){
    return(
      <div className="App">
        <Router>
          <Fragment>
            <Navbar />
            <div className="container custom-container-setting">
              {/* <Switch> */}
              {/* <PrivateRoute exact path="/" component={Home}/> */}
              {/* <Route exact path="/" component={Home}/> */}
              {/* <Route exact path="/login" component={Login}/> */}
              <BaseRouter  />
            {/* </Switch> */}
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
export default connect(mapStateToProps,{LoadUser, GetUserFromUserData})(App)
