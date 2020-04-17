import axios from 'axios'
import {BIODATA_LOADED, BIODATA_ACCOUNT_LOADED} from './Type.Actions'
import {tokenConfig, defualtheader} from './Auth.Actions'

export const LoadBiodata = (BiodataID) => (dispatch, getState)=>{
    axios.get(`http://localhost:8000/api/auth/biodata/${BiodataID}`)
    .then(res=>{
        dispatch({
            type : BIODATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}

export const LoadBiodataAccount = (UserID) => (dispatch, getState)=>{
    axios.get(`http://127.0.0.1:8000/api/auth/user/${UserID}`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_ACCOUNT_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}