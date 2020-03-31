import React from 'react'
import {connect} from 'react-redux'
import {LogOut} from '../../Store/Actions/Auth.Actions'
class content extends React.Component{
    render(){
        // this.componentDidMount(){
        //     window.location.reload
        // }
        const {isAuthenticated, user}=this.props.auth
        return(
            <div>
            <h1>selamat datang</h1>
            <strong>{user ? `welcom ${user.nomerinduk}`:""}</strong>
            <button onClick={this.props.LogOut} className="nav-link btn btn-info btn-sm text-light">Logout</button>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    auth:state.Auth
})


export default connect(mapStateToProps,{LogOut})(content)