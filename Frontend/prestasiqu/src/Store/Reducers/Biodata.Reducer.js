import {BIODATA_LOADED, BIODATA_ACCOUNT_LOADED} from '../Actions/Type.Actions'

const initialState ={
    Biodata : null,
    Account : null,
}

export default function(state = initialState, action){
    switch(action.type){
        case BIODATA_LOADED:
            return{
                ...state,
                Biodata : action.payload
            }
        case BIODATA_ACCOUNT_LOADED:
            return{
                ...state,
                Account : action.payload
            }
        default:return state
    }
}