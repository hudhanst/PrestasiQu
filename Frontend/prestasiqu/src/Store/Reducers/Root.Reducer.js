import {combineReducers} from 'redux'

import Auth from './Auth.Reducer'
import Messages from './Messages.Reducer'
import Biodata from './Biodata.Reducer'
const RootReducer = combineReducers({
    Auth, Messages, Biodata
})

export default RootReducer

// export default combineReducers({
//     Auth
// })