import {combineReducers} from 'redux'

import Auth from './Auth.Reducer'
import Messages from './Messages.Reducer'
import Biodata from './Biodata.Reducer'
import Pelanggaran from './Pelanggaran.Reducer'
const RootReducer = combineReducers({
    Auth, Messages, Biodata, Pelanggaran
})

export default RootReducer