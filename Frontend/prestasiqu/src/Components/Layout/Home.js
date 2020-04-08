import React from 'react'
import {connect} from 'react-redux'
import {LogOut} from '../../Store/Actions/Auth.Actions'
class Home extends React.Component{
    render(){
        // this.componentDidMount(){
        //     window.location.reload
        // }
        const {isAuthenticated, user}=this.props.auth
        return(
            <div>
            <center> <h1>selamat datang</h1>
            <strong>{user ? `welcom ${user.nomerinduk}`:""}</strong><br />
            <strong>{user ? `welcom ${user.id}`:""}</strong><br />
            <strong>{user ? `welcom ${user.profile}`:""}</strong>
            <button onClick={this.props.LogOut} className="nav-link btn btn-info btn-sm text-light">Logout</button>
            </center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>
        )
    }
}

const mapStateToProps=state=>({
    auth:state.Auth
})


export default connect(mapStateToProps,{LogOut})(Home)