import {
    BIODATA_LOADED,
    BIODATA_ACCOUNT_LOADED,
    BIODATA_UPDATE_LOADED,
    BIODATA_UPDATED,
    SISWA_DATA_LOADED,
    _BUTTON_UPDATE_BIODATA_,
} from '../Actions/Type.Actions'

const initialState ={
    Biodata : null,
    Update_Biodata : null,
    Update_Biodata_ID :null,
    Account : null,
    Data_Siswa : []
}

export default function(state = initialState, action){
    switch(action.type){
        case BIODATA_LOADED:
            return{
                ...state,
                Biodata : action.payload,
            }
        case BIODATA_ACCOUNT_LOADED:
            return{
                ...state,
                Account : action.payload
            }
        case _BUTTON_UPDATE_BIODATA_:
            return{
                ...state,
                Update_Biodata_ID :action.payload
            }
        case BIODATA_UPDATE_LOADED:
            return{
                ...state,
                Update_Biodata : action.payload
            }
        case BIODATA_UPDATED:
            return{
                ...state,
            }
        case SISWA_DATA_LOADED:
            return{
                ...state,
                Data_Siswa : action.payload
            }
        default:return state
    }
}