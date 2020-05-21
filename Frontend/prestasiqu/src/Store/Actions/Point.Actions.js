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
            window.location.reload(true)
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
export const DeletePelanggaran = (PelanggaranID) => (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/pelanggaran/detail/${PelanggaranID}/delete`, null, tokenConfig(getState))
        .then(res => {
            console.log(res)
            dispatch({ type: PELANGGARAN_DELETED })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT-POINT
////// POINT-POINT-LOAD
export const LoadPointListofPoint = (BiodataID) => (dispatch, getState) => {
    axios(`http://127.0.0.1:8000/api/point/point-list-byuser/${BiodataID}`, tokenConfig(getState))
        .then(res => {
            console.log(res)
            dispatch({
                type: POINT_LIST_POINT_LOADED,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
}
export const GetPointDetail = (BiodataID) => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get(`http://127.0.0.1:8000/api/biodata/user/${BiodataID}/point`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: POINT_SCORE_LOADED,
                payload: res.data.Point
            })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT-POINTUNCONFIRM
////// POINT-POINTUNCONFIRM-LOAD
export const LoadListofUnconfirmPoint = () => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get('http://127.0.0.1:8000/api/point/unconfirm-list', tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: POINT_POINTUNCONFIRM_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT.POINTCONFIRM
////// POINT.POINTCONFIRM-LOAD
export const LoadListofConfirmPoint = () => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get('http://127.0.0.1:8000/api/point/confirm-list', tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: POINT_POINTCONFIRM_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT.SUBMISSION
////// POINT.SUBMISSION-LOAD-DETAIL
export const Button_PointDetailView = (PointID) => (dispatch) => {
    dispatch({
        type: _BUTTON_POINT_DETAIL_VIEW_,
        payload: PointID,
    })
}
export const LoadPointSubmissionDetail = (PointSubmissionID) => (dispatch, getState) => {
    dispatch({ type: PELANGGARAN_LOADING })
    axios.get(`http://127.0.0.1:8000/api/point/detail/${PointSubmissionID}`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: POINT_POINTSUBMISSION_DETAIL_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
////// POINT.SUBMISSION-CREATE
export const PointSubmit = (UserNomerInduk, TargetBiodataID, ket, authdata) => (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/biodata/user/${TargetBiodataID}/nomerinduk`, tokenConfig(getState))
        .then(nmres => {
            console.log(nmres)
            // dispatch({type:BIODATAID_TO_NOMERINDUK_LOADED})
            const TargetNomerInduk = nmres.data.NomerInduk
            const bodydata = new FormData();

            bodydata.append('Nomer_Induk_Pengaju', UserNomerInduk)
            bodydata.append('Nomer_Induk_Dituju', TargetNomerInduk)
            bodydata.append('Nama_Pelanggaran', ket.Nama_Pelanggaran)
            bodydata.append('Keterangan', ket.Keterangan)
            if (ket.Lampiran !== null) {
                bodydata.append('Lampiran', ket.Lampiran);
            }

            axios.post('http://127.0.0.1:8000/api/point/create', bodydata, tokenConfigmultipleform(getState))
                .then(pores => {
                    console.log(pores)
                    dispatch({ type: POINT_POINTSUBMISSION_CREATED })
                    window.location.reload(true)
                }).catch(poerr => {
                    console.log(poerr)
                })
        }).catch(nmerr => {
            console.log(nmerr)
        })
}
////// POINT.POINTACCEPTION
export const PointAcception = (PointID, UserNI, AcceptionAction, authdata) => (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Nomer_Induk_Assessor', UserNI)
    if (AcceptionAction === 'Accepted') {
        axios.patch(`http://127.0.0.1:8000/api/point/point-acception-accepted/${PointID}`, bodydata, tokenConfig(getState))
            .then(paares => {
                console.log(paares)
                const Point_Akhir = paares.data.Point_Pengurang
                const NomerIndukDituju = paares.data.Nomer_Induk_Dituju
                const PointUpdateData = new FormData();

                PointUpdateData.append('Point', Point_Akhir)
                axios.patch(`http://127.0.0.1:8000/api/biodata/update_biodata_point/${NomerIndukDituju}/subtraction`, PointUpdateData, tokenConfigmultipleform(getState))
                    .then(pures => {
                        console.log(pures)
                        window.location.reload(true)
                    }).catch(puerr => {
                        console.log(puerr)
                    })
            }).catch(paaerr => {
                console.log(paaerr)
            })
    } else {
        axios.patch(`http://127.0.0.1:8000/api/point/point-acception-rejected/${PointID}`, bodydata, tokenConfig(getState))
            .then(paeres => {
                console.log(paeres)
            }).catch(paeerr => {
                console.log(paeerr)
            })
    }
}