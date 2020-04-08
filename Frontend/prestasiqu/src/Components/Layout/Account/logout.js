import React from 'react';

import {connect} from 'react-redux'
import {LogOut} from '../../../Store/Actions/Auth.Actions'

import { Redirect } from 'react-router-dom';



class Logout extends React.Component{
  state={
    redirectstatus:false
  }
  componentDidMount() {
    this.props.LogOut()
    setTimeout(() => this.setState({ redirectstatus: true }), 3000)
  }
  // componentWillUnmount() {
  //   clearTimeout(this.id)
  // }
  render(){
    return(
      <div className="Logout">
          <h2 className="position-center">Logout page</h2>
          {this.state.redirectstatus?<Redirect to="/login" />:null}
      </div>
    )
  }
}

const mapStateToProps=state=>({
  auth:state.Auth
})
export default connect(mapStateToProps,{LogOut})(Logout)

