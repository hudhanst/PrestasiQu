import axios from 'axios'

import {ErrorMassages} from './Messages.Actions'
import {
    USER_LOADING,
    USER_LOADED,
    // CONVERT_TO_USER,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    USER_EXPIRED,
} from './Type.Actions'

export const tokenConfig = (getState) =>{
    const token = getState().Auth.token //get token from state
    const config = {//Header request
        headers:{
            'Content-Type':'application/json'
        }
    }
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}

export const tokenConfigmultipleform = (getState) =>{
    const token = getState().Auth.token //get token from state
    const config = {//Header request
        headers:{
            'Content-Type':'multipart/form-data'
            // 'Content-Type':'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
        }
    }
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}

export const defualtheader = () =>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    return config
}

export const LoadUser = () => (dispatch, getState)=>{
    dispatch({type:USER_LOADING})

    axios.get('http://127.0.0.1:8000/api/auth/user', tokenConfig(getState))
    .then(res=>{
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })
    }).catch(err=>{
        console.log(err)
        if(err.response){
            if(err.response.status === 401){
                dispatch({type: USER_EXPIRED})
            }else{
                console.log(err)
            }
        }else{
            console.log(err)
        }
    })
}
//TODO export const LoadPermission
export const LogIn = (nomerinduk, password) => (dispatch) =>{
    const body =JSON.stringify({nomerinduk, password})
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    // axios.post('http://127.0.0.1:8000/api/auth/login',body, defualtheader())
    axios.post('http://127.0.0.1:8000/api/auth/login',body, config)
    .then(res=>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    }).catch(err=>{
        // console.log(err.response.data)
        dispatch(ErrorMassages(err.response.data))
        // console.log(nomerinduk, password, config)
        // dispatch(returnErrors(err.response.data, err.response.status))
    })
}

export const LogOut = () =>(dispatch, getState) =>{
    axios.post('http://127.0.0.1:8000/api/auth/logout', null, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type: LOGOUT_SUCCESS
        })
    }).catch(err=>{
        if(err.response.status === 401){
            dispatch({
                type: USER_EXPIRED
            })
        }else{
            console.log(err)
        }
    })
}
// export const GetUserFromUserData = () =>(dispatch)=>{
//     dispatch({
//         type: CONVERT_TO_USER
//     })
// }