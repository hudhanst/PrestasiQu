import {combineReducers} from 'redux'

import Auth from './Auth.Reducer'
import Messages from './Messages.Reducer'
const RootReducer = combineReducers({
    Auth, Messages
})

export default RootReducer

// export default combineReducers({
//     Auth
// })