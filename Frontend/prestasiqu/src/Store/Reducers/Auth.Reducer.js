import {
    USER_LOADING,
    USER_LOADED,
    USER_EXPIRED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../Actions/Type.Actions'

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:localStorage.getItem('isAuthenticated'),
    isLoading:false,
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
            return{
                ...state,
                isLoading:false,
                user:action.payload,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('isAuthenticated',true)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload.user
            }
        // case CONVERT_TO_USER:
        //     return{
        //         ...state,
        //         user: JSON.parse(localStorage.getItem("userdata"))
        //     }
        case LOGIN_FAIL:
        case USER_EXPIRED:
        case LOGOUT_SUCCESS:
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