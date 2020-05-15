import axios from 'axios'

// import {
//     ErrorMassages,
//     SuccessMassages
// } from './Messages.Actions'

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
} from './Type.Actions'

import { tokenConfig, tokenConfigmultipleform } from './Auth.Actions'

////// PRESTASI
////// PRESTASI.INSTANSI
////// PRESTASI.INSTANSI-GET
export const LoadListofInstansi = () => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get('http://127.0.0.1:8000/api/instansi/list', tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: INSTANSI_LIST_DATA_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
export const Button_Instansi_DetailView = (InstansiID) => (dispatch, getState) => {
    dispatch({
        type: _BUTTON_INSTANSI_DETAIL_VIEW_,
        payload: InstansiID,
    })
}
export const LoadInstansiDetail = (InstansiID) => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get(`http://127.0.0.1:8000/api/instansi/detail/${InstansiID}`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: INSTANSI_DETAIL_LOADED,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI.INSTANSI-CREATE
export const CreateInstansi = (Data, authdata) => (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Nama_Instansi', Data.Nama_Instansi)
    bodydata.append('Jenis_Instansi', Data.Jenis_Instansi)
    bodydata.append('Keterangan_Instansi', Data.Keterangan_Instansi)
    axios.post('http://127.0.0.1:8000/api/instansi/create', bodydata, tokenConfigmultipleform(getState))
        .then(res => {
            //    console.log(res)
            dispatch({ type: INSTANSI_CREATED })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI.INSTANSI-UPDATE
export const Button_UpdateInstansi = (InstansiID) => (dispatch, getState) => {
    dispatch({
        type: _BUTTON_INSTANSI_UPDATE_,
        payload: InstansiID,
    })
}
export const LoadInstansiUpdate = (InstansiID) => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get(`http://127.0.0.1:8000/api/instansi/detail/${InstansiID}/update`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: INSTANSI_UPDATE_DATA_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
export const UpdateInstansi = (data, authdata) => (dispatch, getState) => {
    const bodydata = new FormData();

    // bodydata.append('Nama_Instansi', data.Nama_Instansi)
    bodydata.append('Jenis_Instansi', data.Jenis_Instansi)
    bodydata.append('Keterangan_Instansi', data.Keterangan_Instansi)
    axios.patch(`http://127.0.0.1:8000/api/instansi/detail/${data.id}/update`, bodydata, tokenConfigmultipleform(getState))
        .then(res => {
            // console.log(res)
            dispatch({ type: INSTANSI_UPDATED })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI.INSTANSI-DELETE
export const DeleteInstansi = (InstansiID) => (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/instansi/detail/${InstansiID}/delete`, null, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({ type: INSTANSI_DELETED })
        }).catch(err => {
            console.log(err)
        })
}