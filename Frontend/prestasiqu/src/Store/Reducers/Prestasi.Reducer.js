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
    ////// PRESTASI.PRESTASI
    ////// PRESTASI.PRESTASI-LOAD
    PRESTASI_LIST_PRESTASI_LOADED,
    PRESTASI_SCORE_LOADED,
    ////// PRESTASI.PRESTASIUNCONFIRM
    ////// PRESTASI.PRESTASIUNCONFIRM-LOAD
    PRESTASI_PRESTASIUNCONFIRM_LOADED,
    ////// PRESTASI.PRESTASICONFIRM
    ////// PRESTASI.PRESTASICONFIRM-LOAD
    PRESTASI_PRESTASICONFIRM_LOADED,
    ////// PRESTASI.SUBMISSION
    ////// PRESTASI.SUBMISSION-LOAD-DETAIL
    _BUTTON_PRESTASI_DETAIL_VIEW_,
    PRESTASI_PRESTASISUBMISSION_DETAIL_LOADED,
    ////// PRESTASI.SUBMISSION-CREATE
    PRESTASI_PRESTASISUBMISSION_CREATED,
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
    ////// PRESTASI.PRESTASI
    ////// PRESTASI.PRESTASI-LOAD
    Prestasi_Prestasi: [],
    Prestasi_Score: null,
    ////// PRESTASI.PRESTASIUNCONFIRM
    ////// PRESTASI.PRESTASIUNCONFIRM-LOAD
    Prestasi_PrestasiUnconfirm: [],
    ////// PRESTASI.PRESTASICONFIRM
    ////// PRESTASI.PRESTASICONFIRM-LOAD
    Prestasi_PrestasiConfirm: [],
    ////// PRESTASI.SUBMISSION
    ////// PRESTASI.SUBMISSION-LOAD-DETAIL
    Prestasi_ID: null,
    Prestasi: null,
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
        ////// PRESTASI.PRESTASI
        ////// PRESTASI.PRESTASI-LOAD
        case PRESTASI_LIST_PRESTASI_LOADED:
            return {
                ...state,
                Prestasi_Prestasi: action.payload,
            }
        case PRESTASI_SCORE_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Prestasi_Score: action.payload
            }
        ////// PRESTASI.PRESTASIUNCONFIRM
        ////// PRESTASI.PRESTASIUNCONFIRM-LOAD
        case PRESTASI_PRESTASIUNCONFIRM_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Prestasi_PrestasiUnconfirm: action.payload,
            }
        ////// PRESTASI.PRESTASICONFIRM
        ////// PRESTASI.PRESTASICONFIRM-LOAD
        case PRESTASI_PRESTASICONFIRM_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Prestasi_PrestasiConfirm: action.payload
            }
        ////// PRESTASI.SUBMISSION
        ////// PRESTASI.SUBMISSION-LOAD-DETAIL
        case _BUTTON_PRESTASI_DETAIL_VIEW_:
            return {
                ...state,
                Prestasi_ID: action.payload,
            }
        case PRESTASI_PRESTASISUBMISSION_DETAIL_LOADED:
            return {
                ...state,
                isPrestasiLoading: false,
                Prestasi: action.payload
            }
        ////// PRESTASI.SUBMISSION-CREATE
        case PRESTASI_PRESTASISUBMISSION_CREATED:
            return {
                ...state,
            }
        default: return state
    }
}