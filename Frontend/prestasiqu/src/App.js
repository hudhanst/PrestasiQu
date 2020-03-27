import React from 'react';

import {Provider} from 'react-redux'
import Store from './Store/Store'
import BaseRouter from './router'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './Security/PrivateRoute'
import Login from './Components/Layout/Account/login'
import {loaduser} from './Store/Actions/Auth.Actions'
class App extends React.Component{
  componentDidMount(){
    Store.dispatch(loaduser())
  }

  render(){
    return(
      <div className="App">
      <Provider store={Store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={BaseRouter}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </Router>
      </Provider>
       </div> 
    )
  }
}

export default App;
