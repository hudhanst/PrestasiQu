import axios from 'axios'
import {BIODATA_LOADED} from './Type.Actions'
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
