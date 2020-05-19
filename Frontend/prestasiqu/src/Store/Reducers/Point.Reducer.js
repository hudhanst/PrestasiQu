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
    ////// POINT.POINT
    ////// POINT.POINT-LOAD
    POINT_LIST_POINT_LOADED,
    POINT_SCORE_LOADED,
    ////// POINT.POINTUNCONFIRM
    ////// POINT.POINTUNCONFIRM-LOAD
    POINT_POINTUNCONFIRM_LOADED,
    ////// POINT.POINTCONFIRM
    ////// POINT.POINTCONFIRM-LOAD
    POINT_POINTCONFIRM_LOADED,
    ////// POINT.SUBMISSION
    ////// POINT.SUBMISSION-LOAD-DETAIL
    _BUTTON_POINT_DETAIL_VIEW_,
    POINT_POINTSUBMISSION_DETAIL_LOADED,
    ////// POINT.SUBMISSION-CREATE
    POINT_POINTSUBMISSION_CREATED,
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
    ////// POINT.POINT
    ////// POINT.POINT-LOAD
    Point_Point: [],
    Point_Score: null,
    ////// POINT.POINTUNCONFIRM
    ////// POINT.POINTUNCONFIRM-LOAD
    Point_PointUnconfirm: [],
    ////// POINT.POINTCONFIRM
    ////// POINT.POINTCONFIRM-LOAD
    Point_PointConfirm: [],
    ////// POINT.SUBMISSION
    ////// POINT.SUBMISSION-LOAD-DETAIL
    Point_ID: null,
    Point: null,
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
            return {
                ...state,
                Pelanggaran_ID: action.payload,
            }
        case PELANGGARAN_DETAIL_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Pelanggaran: action.payload,
            }
        ////// POINT-PELANGGARAN-CREATE
        case PELANGGARAN_CREATED:
            return {
                ...state,
            }
        ////// POINT-PELANGGARAN-UPDATE
        case _BUTTON_PELANGGARAN_UPDATE_:
            return {
                ...state,
                Pelanggaran_Update_ID: action.payload,
            }
        case PELANGGARAN_UPDATE_DATA_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Pelanggaran_Update: action.payload,
            }
        case PELANGGARAN_UPDATED:
            return {
                ...state,
            }
        ////// POINT-PELANGGARAN-DELETE
        case PELANGGARAN_DELETED:
            return {
                ...state,
            }
        ////// POINT.POINT
        ////// POINT.POINT-LOAD
        case POINT_LIST_POINT_LOADED:
            return {
                ...state,
                Point_Point: action.payload
            }
        case POINT_SCORE_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Point_Score: action.payload,
            }
        ////// POINT.POINTUNCONFIRM
        ////// POINT.POINTUNCONFIRM-LOAD
        case POINT_POINTUNCONFIRM_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Point_PointUnconfirm: action.payload,
            }
        ////// POINT.POINTCONFIRM
        ////// POINT.POINTCONFIRM-LOAD
        case POINT_POINTCONFIRM_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Point_PointConfirm: action.payload,
            }
        ////// POINT.SUBMISSION
        ////// POINT.SUBMISSION-LOAD-DETAIL
        case _BUTTON_POINT_DETAIL_VIEW_:
            return {
                ...state,
                Point_ID: action.payload,
            }
        case POINT_POINTSUBMISSION_DETAIL_LOADED:
            return {
                ...state,
                isPelanggaranLoading: false,
                Point: action.payload,
            }
        ////// POINT.SUBMISSION-CREATE
        case POINT_POINTSUBMISSION_CREATED:
            return {
                ...state,
            }
        default: return state
    }
}