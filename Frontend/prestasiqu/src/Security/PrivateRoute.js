import React from 'react'

import {connect} from 'react-redux'

import {Route, Redirect} from 'react-router-dom'

import Loading from '../Components/Container/Loading'

const PrivateRoute=({component:Component, auth,...rest})=>(
    <Route {...rest} render={props=>{
        // return <Component {...props} />
        if (auth.isLoading){
            // return <h2>loading...</h2>
            return <Loading />
        }else if(!auth.isAuthenticated){
            return <Redirect to="/login" />
        }else{
            //TODO console.log(rest)
            //TODO if(! "rest" == "rest" api response permission is false return to home )
            return <Component {...props} />
        }
    }}/>
)

const mapStateToProps=state=>({
    auth:state.Auth
})

export default connect(mapStateToProps)(PrivateRoute)