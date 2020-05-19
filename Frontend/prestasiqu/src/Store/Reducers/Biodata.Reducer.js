import {
    ////// LOADING
    BIODATA_LOADING,
    ////// LOAD DETAIL
    _BUTTON_DETAIL_VIEW_,
    BIODATA_DETAIL_LOADED,
    BIODATA_ACCOUNT_DETAIL_LOADED,
    ////// BIODATA UPDATE
    _BUTTON_UPDATE_BIODATA_,
    BIODATA_UPDATE_DATA_LOADED,
    BIODATA_UPDATED,
    ////// BIODATA-DELETE
    BIODATA_DELETED,
    ////// BIODATA ACCOUNT UPDATE
    _BUTTON_UPDATE_BIODATA_ACCOUNT_,
    BIODATA_ACCOUNT_UPDATE_DATA_LOADED,
    BIODATA_ACCOUNT_UPDATED,
    ////// BIODATA SISWA
    SISWA_DATA_LOADED,
    ////// BIODATA SISWA-CREATE
    SISWA_BIODATA_CREATED,
    SISWA_BIODATA_FAILED_CREATE,
    SISWA_ACCOUNT_CREATED,
    SISWA_ACCOUNT_FAILED_CREATE,
    SISWA_FULLY_CREATED,
    ////// BIODATA STAFF
    STAFF_DATA_LOADED,
    ////// BIODATA STAFF-CREATE
    STAFF_BIODATA_CREATED,
    STAFF_BIODATA_FAILED_CREATE,
    STAFF_ACCOUNT_CREATED,
    STAFF_ACCOUNT_FAILED_CREATE,
    STAFF_FULLY_CREATED,
    ////// BIODATA ADMIN
    ADMIN_DATA_LOADED,
    ////// BIODATA ADMIN-CREATE
    ADMIN_BIODATA_CREATED,
    ADMIN_BIODATA_FAILED_CREATE,
    ADMIN_ACCOUNT_CREATED,
    ADMIN_ACCOUNT_FAILED_CREATE,
    ADMIN_FULLY_CREATED,
    ////// BIODATA ALL
    ALL_DATA_LOADED,
} from '../Actions/Type.Actions'

const initialState ={
    ////// LOADING
    isBiodataLoading : false,
    ////// LOAD DETAIL
    Biodata_ID :null,
    Biodata : null,
    Account : null,
    ////// BIODATA UPDATE
    Update_Biodata_ID :null,
    Update_Biodata : null,
    ////// BIODATA ACCOUNT UPDATE
    Update_Biodata_Account_ID :null,
    Update_Biodata_Account : null,
    ////// BIODATA SISWA
    Data_Siswa : [],
    ////// BIODATA STAFF
    Data_Staff : [],
    ////// BIODATA ADMIN
    Data_Admin : [],
    ////// BIODATA ALL
    Data_All : [],
}

export default function(state = initialState, action){
    switch(action.type){
        ////// LOADING
        case BIODATA_LOADING:
            return{
                ...state,
                isBiodataLoading : true,
            }
        ////// LOAD DETAIL
        case _BUTTON_DETAIL_VIEW_:
            return{
                ...state,
                Biodata_ID : action.payload,
            }
        case BIODATA_DETAIL_LOADED:
            return{
                ...state,
                isBiodataLoading : false,
                Biodata : action.payload,
            }
        case BIODATA_ACCOUNT_DETAIL_LOADED:
            return{
                ...state,
                isBiodataLoading : false,
                Account : action.payload,
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
                isBiodataLoading : false,
                Update_Biodata : action.payload,
            }
        case BIODATA_UPDATED:
            return{
                ...state,
            }
        ////// BIODATA-DELETE
        case BIODATA_DELETED:
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
                isBiodataLoading : false,
                Update_Biodata_Account : action.payload,
            }
        case BIODATA_ACCOUNT_UPDATED:
            return{
                ...state,
            }
        ////// BIODATA SISWA
        case SISWA_DATA_LOADED:
            return{
                // ...state,
                isBiodataLoading : false,
                Data_Siswa : action.payload
            }
        ////// BIODATA SISWA-CREATE
        case SISWA_BIODATA_CREATED:
            return{
                ...state,
            }
        case SISWA_BIODATA_FAILED_CREATE:
            return{
                ...state,
            }
        case SISWA_ACCOUNT_CREATED:
            return{
                ...state,
            }
        case SISWA_ACCOUNT_FAILED_CREATE:
            return{
                ...state,
            }
        case SISWA_FULLY_CREATED:
            return{
                ...state,
            }
        ////// BIODATA STAFF
        case STAFF_DATA_LOADED:
            return{
                ...state,
                Data_Staff :action.payload
            }
        ////// BIODATA STAFF-CREATE
        case STAFF_BIODATA_CREATED:
            return{
                ...state,
            }
        case STAFF_BIODATA_FAILED_CREATE:
            return{
                ...state,
            }
        case STAFF_ACCOUNT_CREATED:
            return{
                ...state,
            }
        case STAFF_ACCOUNT_FAILED_CREATE:
            return{
                ...state,
            }
        case STAFF_FULLY_CREATED:
            return{
                ...state,
            }
        ////// BIODATA ADMIN
        case ADMIN_DATA_LOADED:
            return{
                ...state,
                Data_Admin :action.payload
            }
        ////// BIODATA ADMIN-CREATE
        case ADMIN_BIODATA_CREATED:
            return{
                ...state,
            }
        case ADMIN_BIODATA_FAILED_CREATE:
            return{
                ...state,
            }
        case ADMIN_ACCOUNT_CREATED:
            return{
                ...state,
            }
        case ADMIN_ACCOUNT_FAILED_CREATE:
            return{
                ...state,
            }
        case ADMIN_FULLY_CREATED:
            return{
                ...state,
            }
        ////// BIODATA ALL
        case ALL_DATA_LOADED:
            return{
                ...state,
                Data_All :action.payload,
            }
        default:return state
    }
}