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
////// PRESTASI-PRESTASI
////// PRESTASI-PRESTASI-LOAD
export const LoadPrestasiListofPrestasi = (BiodataID) => (dispatch, getState) => {
    axios(`http://127.0.0.1:8000/api/prestasi/prestasi-list-byuser/${BiodataID}`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PRESTASI_LIST_PRESTASI_LOADED,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
}
export const GetPrestasiDetail = (BiodataID) => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get(`http://127.0.0.1:8000/api/biodata/user/${BiodataID}/point`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PRESTASI_SCORE_LOADED,
                payload: res.data.Point
            })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI-PRESTASIUNCONFIRM
////// PRESTASI-PRESTASIUNCONFIRM-LOAD
export const LoadListofUnconfirmPrestasi = () => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get('http://127.0.0.1:8000/api/prestasi/unconfirm-list', tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PRESTASI_PRESTASIUNCONFIRM_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI.PRESTASICONFIRM
////// PRESTASI.PRESTASICONFIRM-LOAD
export const LoadListofConfirmPrestasi = () => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get('http://127.0.0.1:8000/api/prestasi/confirm-list', tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PRESTASI_PRESTASICONFIRM_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI.SUBMISSION
////// PRESTASI.SUBMISSION-LOAD-DETAIL
export const Button_PrestasiDetailView = (PrestasiID) => (dispatch) => {
    dispatch({
        type: _BUTTON_PRESTASI_DETAIL_VIEW_,
        payload: PrestasiID,
    })
}
export const LoadPrestasiSubmissionDetail = (PrestasiSubmissionID) => (dispatch, getState) => {
    dispatch({ type: PRESTASI_LOADING })
    axios.get(`http://127.0.0.1:8000/api/prestasi/detail/${PrestasiSubmissionID}`, tokenConfig(getState))
        .then(res => {
            // console.log(res)
            dispatch({
                type: PRESTASI_PRESTASISUBMISSION_DETAIL_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}
////// PRESTASI.SUBMISSION-CREATE
export const PrestasiSubmit = (UserNomerInduk, TargetBiodataID, ket, authdata) => (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/biodata/user/${TargetBiodataID}/nomerinduk`, tokenConfig(getState))
        .then(nmres => {
            console.log(nmres)
            // dispatch({type:BIODATAID_TO_NOMERINDUK_LOADED})
            const TargetNomerInduk = nmres.data.NomerInduk
            const bodydata = new FormData();

            bodydata.append('Nomer_Induk_Pengaju', UserNomerInduk)
            bodydata.append('Nomer_Induk_Dituju', TargetNomerInduk)
            bodydata.append('Nama_Prestasi', ket.Nama_Prestasi)
            bodydata.append('No_Sertifikat', ket.No_Sertifikat)
            bodydata.append('Katagori_Prestasi', ket.Katagori_Prestasi)
            bodydata.append('Tingkatan_Prestasi', ket.Tingkatan_Prestasi)
            bodydata.append('Nama_Instansi', ket.Nama_Instansi)
            bodydata.append('Prestasi_Point', ket.Prestasi_Point)
            bodydata.append('Keterangan', ket.Keterangan)
            if (ket.Lampiran !== null) {
                bodydata.append('Lampiran', ket.Lampiran);
            }

            axios.post('http://127.0.0.1:8000/api/prestasi/create', bodydata, tokenConfigmultipleform(getState))
                .then(pores => {
                    console.log(pores)
                    dispatch({ type: PRESTASI_PRESTASISUBMISSION_CREATED })
                }).catch(poerr => {
                    console.log(poerr)
                })
        }).catch(nmerr => {
            console.log(nmerr)
        })
}
////// PRESTASI.PRESTASIACCEPTION
export const PrestasiAcception = (PrestasiID, UserNI, AcceptionAction, authdata) => (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Nomer_Induk_Assessor', UserNI)
    if (AcceptionAction === 'Accepted') {
        axios.patch(`http://127.0.0.1:8000/api/prestasi/prestasi-acception-accepted/${PrestasiID}`, bodydata, tokenConfig(getState))
            .then(paares => {
                console.log(paares)
                const Point_Akhir = paares.data.Prestasi_Point
                const NomerIndukDituju = paares.data.Nomer_Induk_Dituju
                const PointUpdateData = new FormData();

                PointUpdateData.append('Point', Point_Akhir)
                axios.patch(`http://127.0.0.1:8000/api/biodata/update_biodata_point/${NomerIndukDituju}/accretion`, PointUpdateData, tokenConfigmultipleform(getState))
                    .then(pures => {
                        console.log(pures)
                    }).catch(puerr => {
                        console.log(puerr)
                    })
            }).catch(paaerr => {
                console.log(paaerr)
            })
    } else {
        axios.patch(`http://127.0.0.1:8000/api/prestasi/prestasi-acception-rejected/${PrestasiID}`, bodydata, tokenConfig(getState))
            .then(paeres => {
                console.log(paeres)
            }).catch(paeerr => {
                console.log(paeerr)
            })
    }
}