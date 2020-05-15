import {
    ////// POINT-LOADING
    PELANGGARAN_LOADING,
    ////// POINT-PELANGGARAN
    ////// POINT-PELANGGARAN-LIST_LOADED
    PELANGGARAN_LIST_DATA_LOADED,
    ////// POINT-PELANGGARAN-VIEW
    _BUTTON_PELANGGARAN_DETAIL_VIEW_,
    PELANGGARAN_DETAIL_LOADED,
    ////// POINT-PELANGGARAN-CREATE
    PELANGGARAN_CREATED,
    ////// POINT-PELANGGARAN-UPDATE
    _BUTTON_PELANGGARAN_UPDATE_,
    PELANGGARAN_UPDATE_DATA_LOADED,
    PELANGGARAN_UPDATED,
    ////// POINT-PELANGGARAN-DELETE
    PELANGGARAN_DELETED,

} from '../Actions/Type.Actions'

const initialState = {
    ////// POINT-LOADING
    isPelanggaranLoading: false,
    ////// POINT-PELANGGARAN
    ////// POINT-PELANGGARAN-LIST_LOADED
    Data_Pelanggaran: [],
    ////// POINT-PELANGGARAN-VIEW
    Pelanggaran_ID: null,
    Pelanggaran: null,
    ////// POINT-PELANGGARAN-UPDATE
    Pelanggaran_Update_ID: null,
    Pelanggaran_Update: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        ////// POINT-LOADING
        case PELANGGARAN_LOADING:
            return {
                ...state,
                isPelanggaranLoading: true,
            }
        ////// POINT-PELANGGARAN
        ////// POINT-PELANGGARAN-LIST_LOADED
        case PELANGGARAN_LIST_DATA_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Data_Pelanggaran: action.payload,
            }
        ////// POINT-PELANGGARAN-VIEW
        case _BUTTON_PELANGGARAN_DETAIL_VIEW_:
            return{
                ...state,
                Pelanggaran_ID: action.payload,
            }
        case PELANGGARAN_DETAIL_LOADED:
            return{
                ...state,
                isPelanggaranLoading: false,
                Pelanggaran: action.payload,
            }
        ////// POINT-PELANGGARAN-CREATE
        case PELANGGARAN_CREATED:
            return{
                ...state,
            }
        ////// POINT-PELANGGARAN-UPDATE
        case _BUTTON_PELANGGARAN_UPDATE_:
            return{
                ...state,
                Pelanggaran_Update_ID: action.payload,
            }
        case PELANGGARAN_UPDATE_DATA_LOADED:
            return{
                ...state,
                isPelanggaranLoading: false,
                Pelanggaran_Update: action.payload,
            }
        case PELANGGARAN_UPDATED:
            return{
                ...state,
            }
        ////// POINT-PELANGGARAN-DELETE
        case PELANGGARAN_DELETED:
            return{
                ...state,
            }
        default: return state
    }
}