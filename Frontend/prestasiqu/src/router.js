import React from 'react'
import {Route} from 'react-router-dom'
import content from './Components/Layout/content'
import Login from './Components/Layout/Account/login'
import Logout from './Components/Layout/Account/logout'
// import PrivateRoute from './Security/PrivateRoute'
const BaseRouter = () =>{
    return(
        <div>
            {/* <PrivateRoute exact path="/" component={content}/> */}
            <Route exact path="/" component={content}/>
            {/* <Route exact path="/login" component={Login}/> */}
            {/* <Route exact path="/" component={Logout}/> */}
        </div>
    )
}

export default BaseRouter