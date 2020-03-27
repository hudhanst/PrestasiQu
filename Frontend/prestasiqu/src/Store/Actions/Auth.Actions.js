import axios from 'axios'
import {USER_LOADING, USER_LOADED} from './Type.Actions'

export const loaduser = () => (dispatch, getState)=>{
    dispatch({type:USER_LOADED})

    // axios.get()
}