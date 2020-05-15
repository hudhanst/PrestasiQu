import {combineReducers} from 'redux'

import Auth from './Auth.Reducer'
import Messages from './Messages.Reducer'
import Biodata from './Biodata.Reducer'
import Point from './Point.Reducer'
import Prestasi from './Prestasi.Reducer'

const RootReducer = combineReducers({
    Auth, Messages, Biodata, Point, Prestasi
})

export default RootReducer