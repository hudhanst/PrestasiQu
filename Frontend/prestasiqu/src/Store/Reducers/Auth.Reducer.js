import {USER_LOADING, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL} from '../Actions/Type.Actions'

const initialState={
    token:localStorage.getItem('token'),
    // isAuthenticated:null,
    isAuthenticated:false,
    isLoading:false,
    user:null,
}
export default function(state=initialState, actions){
    switch(actions.type){
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
                user:null
            }
        default:
            return state
    }
}