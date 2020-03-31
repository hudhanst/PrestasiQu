import {USER_LOADING, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL} from '../Actions/Type.Actions'

const initialState={
    token:localStorage.getItem('token'),
    // isAuthenticated:null,
    isAuthenticated:false,
    isLoading:false,
    user:null,
}
export default function(state=initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
            console.log('loading')

        case USER_LOADED:
            return{
                // ...state,
                // isLoading:false,
                // isAuthenticated:true,
                // user:actions.payload
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
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