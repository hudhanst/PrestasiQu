import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Layout/Home'
import Login from './Components/Layout/Account/login'
import Logout from './Components/Layout/Account/logout'
import PrivateRoute from './Security/PrivateRoute'
import {LoadUser} from './Store/Actions/Auth.Actions'

// class BaseRouter extends React.Component{
//     componentDidMount(){
//         Store.dispatch(LoadUser())
//     }
//     render(){
const BaseRouter=()=>{
    return(
        <div>
            <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            {/* <Route exact path="/" component={content}/> */}
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            </Switch>
        </div>
    )
    }
// }

export default BaseRouter