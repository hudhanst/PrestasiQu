import {
    ////// PRESTASI
    ////// PRESTASI-LOADING
    PRESTASI_LOADING,
    ////// PRESTASI.INSTANSI
    ////// PRESTASI.INSTANSI-LIST_LOADED
    INSTANSI_LIST_DATA_LOADED,
    ////// PRESTASI.INSTANSI-VIEW
    _BUTTON_INSTANSI_DETAIL_VIEW_,
    INSTANSI_DETAIL_LOADED,
    ////// PRESTASI.INSTANSI-CREATE
    INSTANSI_CREATED,
    ////// PRESTASI.INSTANSI-UPDATE
    _BUTTON_INSTANSI_UPDATE_,
    INSTANSI_UPDATE_DATA_LOADED,
    INSTANSI_UPDATED,
    ////// PRESTASI.INSTANSI-DELETE
    INSTANSI_DELETED,
} from '../Actions/Type.Actions'

const initialState = {
    ////// PRESTASI
    ////// PRESTASI-LOADING
    isPrestasiLoading: false,
    ////// PRESTASI.INSTANSI
    ////// PRESTASI.INSTANSI-LIST_LOADED
    Data_Instansi: [],
    ////// PRESTASI.INSTANSI-VIEW
    Instansi_ID: null,
    Instansi: null,
    ////// PRESTASI.INSTANSI-UPDATE
    Instansi_Update_ID: null,
    Instansi_Update: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        ////// PRESTASI-LOADING
        case PRESTASI_LOADING:
            return {
                ...state,
                isPrestasiLoading: true,
            }
        ////// PRESTASI-INSTANSI
        ////// PRESTASI-INSTANSI-LIST_LOADED
        case INSTANSI_LIST_DATA_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Data_Instansi: action.payload,
            }
        ////// PRESTASI-INSTANSI-VIEW
        case _BUTTON_INSTANSI_DETAIL_VIEW_:
            return {
                ...state,
                Instansi_ID: action.payload,
            }
        case INSTANSI_DETAIL_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Instansi: action.payload,
            }
        ////// PRESTASI-INSTANSI-CREATE
        case INSTANSI_CREATED:
            return {
                ...state,
            }
        ////// PRESTASI-INSTANSI-UPDATE
        case _BUTTON_INSTANSI_UPDATE_:
            return {
                ...state,
                Instansi_Update_ID: action.payload,
            }
        case INSTANSI_UPDATE_DATA_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Instansi_Update: action.payload,
            }
        case INSTANSI_UPDATED:
            return {
                ...state,
            }
        ////// PRESTASI-INSTANSI-DELETE
        case INSTANSI_DELETED:
            return {
                ...state,
            }
        default: return state
    }
}