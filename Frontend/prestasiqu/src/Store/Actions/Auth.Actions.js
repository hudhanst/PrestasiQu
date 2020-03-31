import axios from 'axios'
import {USER_LOADING, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS} from './Type.Actions'
import {returnErrors} from './Messages.Actions'
import {Redirect} from 'react-router-dom'
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
    })
}

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
        console.log(nomerinduk, password, config)
        // dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({type:LOGIN_FAIL})
    })
}

export const LogOut = () =>(dispatch, getState) =>{
    axios.post('http://127.0.0.1:8000/api/auth/logout', null, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type: LOGOUT_SUCCESS
        })
        // return <Redirect to="/login" />
    }).catch(err=>{
        console.log(err)
    })
}