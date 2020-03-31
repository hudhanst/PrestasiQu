import {CREATE_MASSAGES} from '../Actions/Type.Actions'

const initialState={}

export default function(state=initialState,actions){
    switch(actions.type){
        case CREATE_MASSAGES:
            return(state=actions.payload)
        default:
            return state
    }
}