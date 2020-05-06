import {
    ////// LOAD DETAIL
    BIODATA_DETAIL_LOADED,
    BIODATA_ACCOUNT_DETAIL_LOADED,
    ////// BIODATA UPDATE
    _BUTTON_UPDATE_BIODATA_,
    BIODATA_UPDATE_DATA_LOADED,
    BIODATA_UPDATED,
    ////// BIODATA ACCOUNT UPDATE
    _BUTTON_UPDATE_BIODATA_ACCOUNT_,
    BIODATA_ACCOUNT_UPDATE_DATA_LOADED,
    BIODATA_ACCOUNT_UPDATED,
    ////// BIODATA SISWA
    SISWA_DATA_LOADED,
} from '../Actions/Type.Actions'

const initialState ={
    ////// LOAD DETAIL
    Biodata : null,
    Account : null,
    ////// BIODATA UPDATE
    Update_Biodata_ID :null,
    Update_Biodata : null,
    ////// BIODATA ACCOUNT UPDATE
    Update_Biodata_Account_ID :null,
    Update_Biodata_Account : null,
    ////// BIODATA SISWA
    Data_Siswa : []
}

export default function(state = initialState, action){
    switch(action.type){
        ////// LOAD DETAIL
        case BIODATA_DETAIL_LOADED:
            return{
                ...state,
                Biodata : action.payload,
            }
        case BIODATA_ACCOUNT_DETAIL_LOADED:
            return{
                ...state,
                Account : action.payload
            }
        ////// BIODATA UPDATE
        case _BUTTON_UPDATE_BIODATA_:
            return{
                ...state,
                Update_Biodata_ID :action.payload
            }
        case BIODATA_UPDATE_DATA_LOADED:
            return{
                ...state,
                Update_Biodata : action.payload
            }
        case BIODATA_UPDATED:
            return{
                ...state,
            }
        ////// BIODATA ACCOUNT
        case _BUTTON_UPDATE_BIODATA_ACCOUNT_:
            return{
                ...state,
                Update_Biodata_Account_ID :action.payload
            }
        case BIODATA_ACCOUNT_UPDATE_DATA_LOADED:
            return{
                ...state,
                Update_Biodata_Account : action.payload
            }
        case BIODATA_ACCOUNT_UPDATED:
            return{
                ...state,
            }
        ////// BIODATA SISWA
        case SISWA_DATA_LOADED:
            return{
                ...state,
                Data_Siswa : action.payload
            }
        default:return state
    }
}