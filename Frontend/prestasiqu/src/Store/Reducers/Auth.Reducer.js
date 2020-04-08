import {USER_LOADING, USER_LOADED, CONVERT_TO_USER, USER_EXPIRED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, } from '../Actions/Type.Actions'
// import { GetUser } from '../Actions/Auth.Actions'

const initialState={
    token:localStorage.getItem('token'),
    // isAuthenticated:false,
    isAuthenticated:localStorage.getItem('isAuthenticated'),
    isLoading:false,
    userdata:localStorage.getItem('userdata'),
    user:null,
    //TODO permission:null
}
export default function(state=initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            localStorage.setItem('userdata',JSON.stringify(action.payload.user))
            return{
                // ...state,
                // isLoading:false,
                // isAuthenticated:true,
                // user:actions.payload
                ...state,
                isLoading:false,
                // isAuthenticated:action.payload,
                user:action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('isAuthenticated',true)
            localStorage.setItem('userdata',JSON.stringify(action.payload.user))
            // localStorage.setItem('userdata',action.payload.user)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload.user
            }
        case CONVERT_TO_USER:
            return{
                ...state,
                user: JSON.parse(localStorage.getItem("userdata"))
            }
        case LOGIN_FAIL:
        case USER_EXPIRED:
        case LOGOUT_SUCCESS:
            // localStorage.removeItem('token')
            // localStorage.removeItem('isAuthenticated')
            // localStorage.removeItem('userdata')
            localStorage.clear();
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false,
            }
        default:
            return state
    }
}