import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from './Reducers/Root.Reducer'
// import Auth from './Reducers/Auth'

const initialState = {}
const middleware = [thunk]
const Store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default Store

