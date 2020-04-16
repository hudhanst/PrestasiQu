import {BIODATA_LOADED} from '../Actions/Type.Actions'

const initialState ={
    Biodata : null
}

export default function(state = initialState, action){
    switch(action.type){
        case BIODATA_LOADED:
            return{
                ...state,
                Biodata : action.payload
            }
        default:return state
    }
}