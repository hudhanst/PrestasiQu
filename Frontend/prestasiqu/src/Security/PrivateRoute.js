import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute=({component:Component, auth,...rest})=>(
    <Route {...rest} render={props=>{
        // return <Component {...props} />
        if (auth.isLoading){
            return <h2>loading...</h2>
        }else if(!auth.isAuthenticated){
            return <Redirect to="/login" />
        }else{
            return <Component {...props} />
        }
    }}/>
)

const mapStateToProps=state=>({
    auth:state.Auth
})

export default connect(mapStateToProps)(PrivateRoute)