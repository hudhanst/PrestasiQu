import axios from 'axios'
// import {
//     ErrorMassages,
//     SuccessMassages
// } from './Messages.Actions'

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
} from './Type.Actions'

import { tokenConfig, tokenConfigmultipleform } from './Auth.Actions'

////// POINT-PELANGGARAN
////// POINT-PELANGGARAN-LIST_LOADED
export const LoadListofPelanggaran = () => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get('http://127.0.0.1:8000/api/pelanggaran/list', tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PELANGGARAN_LIST_DATA_LOADED,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT-PELANGGARAN-VIEW
export const Button_Pelanggaran_DetailView = (PelanggaranID) => (dispatch) => {
    dispatch({
        type: _BUTTON_PELANGGARAN_DETAIL_VIEW_,
        payload: PelanggaranID,
    })
}
export const LoadPelanggaranDetail = (PelanggaranID) => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get(`http://127.0.0.1:8000/api/pelanggaran/detail/${PelanggaranID}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: PELANGGARAN_DETAIL_LOADED,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT-PELANGGARAN-CREATE
export const CreatePelanggaran = (Data, authdata) => (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Nama_Pelanggaran', Data.Nama_Pelanggaran)
    bodydata.append('Jenis_Pelanggaran', Data.Jenis_Pelanggaran)
    bodydata.append('Pelanggaran_Point', Data.Pelanggaran_Point)
    bodydata.append('Keterangan_Pelanggaran', Data.Keterangan_Pelanggaran)
    axios.post('http://127.0.0.1:8000/api/pelanggaran/create', bodydata, tokenConfigmultipleform(getState))
        .then(res => {
            console.log(res)
            dispatch({ type: PELANGGARAN_CREATED })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT-PELANGGARAN-UPDATE
export const Button_UpdatePelanggaran = (PelanggaranID) => (dispatch) => {
    dispatch({
        type: _BUTTON_PELANGGARAN_UPDATE_,
        payload: PelanggaranID,
    })
}
export const LoadPelanggaranUpdate = (PelanggaranID) => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get(`http://127.0.0.1:8000/api/pelanggaran/detail/${PelanggaranID}`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PELANGGARAN_UPDATE_DATA_LOADED,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
}
export const UpdatePelanggaran = (data, authdata) => (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Jenis_Pelanggaran', data.Jenis_Pelanggaran)
    bodydata.append('Pelanggaran_Point', data.Pelanggaran_Point)
    bodydata.append('Keterangan_Pelanggaran', data.Keterangan_Pelanggaran)
    axios.patch(`http://127.0.0.1:8000/api/pelanggaran/detail/${data.id}/update`, bodydata, tokenConfigmultipleform(getState))
        .then(res => {
            dispatch({ type: PELANGGARAN_UPDATED })
        }).catch(err => {
            console.log(err)
            console.log('errornya adalah:', err.response.data)
        })
}
////// POINT-PELANGGARAN-DELETE
export const DeletePelanggaran = (PelanggaranID) => (dispatch, getState)=>{
    axios.delete(`http://127.0.0.1:8000/api/pelanggaran/detail/${PelanggaranID}/delete`, null,tokenConfig(getState))
    .then(res=>{
        console.log(res)
        dispatch({type:PELANGGARAN_DELETED})
    }).catch(err=>{
        console.log(err)
    })
}