import axios from 'axios'
import FormData from 'form-data'
import {
    ErrorMassages,
    SuccessMassages
} from './Messages.Actions'

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
} from './Type.Actions'

import {tokenConfig, tokenConfigmultipleform} from './Auth.Actions'

////// LOAD DETAIL
export const LoadBiodata = (BiodataID) => (dispatch, getState)=>{
    axios.get(`http://localhost:8000/api/auth/biodata/${BiodataID}`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_DETAIL_LOADED,
            payload : res.data,
        })
    }).catch(err=>{
        console.log(err)
    })
}
export const LoadBiodataAccount = (UserID) => (dispatch, getState)=>{
    axios.get(`http://127.0.0.1:8000/api/auth/user/${UserID}`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_ACCOUNT_DETAIL_LOADED,
            payload : res.data,
        })
    }).catch(err=>{
        console.log(err)
    })
}
////// BIODATA UPDATE
export const Button_UpdateBiodata = (BiodataID) => (dispatch) =>{
    dispatch({
        type:_BUTTON_UPDATE_BIODATA_,
        payload : BiodataID
    })
}
export const LoadBiodataUpdate = (BiodataID) => (dispatch, getState)=>{
    axios.get(`http://127.0.0.1:8000/api/auth/biodata/${BiodataID}/update`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_UPDATE_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
export const UpdateBiodata = (data, authdata) => (dispatch, getState)=>{
    const bodydata = new FormData();

    bodydata.append('Nama', data.Nama);
    bodydata.append('Agama', data.Agama);
    bodydata.append('TempatLahir', data.TempatLahir);
    bodydata.append('TanggalLahir', data.TanggalLahir);
    bodydata.append('Alamat', data.Alamat);
    bodydata.append('NomerTLP', data.NomerTLP);
    bodydata.append('Email', data.Email);
    bodydata.append('InstansiPendidikanTerakhir', data.InstansiPendidikanTerakhir);
    if (authdata.siswa === true && (authdata.staff === false || authdata.admin === false)){
        bodydata.append('PendidikanTerakhir', data.PendidikanTerakhir);
        bodydata.append('Status', data.Status);
    }
    if(data.Profilepicture !== null){
        bodydata.append('Profilepicture', data.Profilepicture);
    }

    // console.log("authdata",authdata)
    // console.log('bodydata',bodydata)
    // console.log('config',tokenConfigmultipleform(getState))
    axios.patch(`http://127.0.0.1:8000/api/auth/biodata/${data.id}/update`,bodydata, tokenConfigmultipleform(getState))
    .then(res=>{
        console.log('sukses')
        dispatch({
            type : BIODATA_UPDATED,
            payload : res.data
        })
        // console.log('res',res)
        dispatch(SuccessMassages('update biodata berhasil'))
    }).catch(err=>{
        dispatch(ErrorMassages(err.response.data))
        console.log(err)
        console.log('errornya adalah:',err.response.data)
    })
}
////// BIODATA ACCOUNT UPDATE
export const Button_UpdateBiodataAccount = (BiodataAccountID) => (dispatch) =>{
    dispatch({
        type:_BUTTON_UPDATE_BIODATA_ACCOUNT_,
        payload : BiodataAccountID
    })
}
export const LoadBiodataAccountUpdate = (BiodataAccountID) => (dispatch, getState)=>{
    axios.get(`http://127.0.0.1:8000/api/auth/user/${BiodataAccountID}/update`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_ACCOUNT_UPDATE_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
export const UpdateBiodataAccount = (data, authdata) =>(dispatch, getState)=>{
    // console.log('data',data)
    // console.log('authdata',authdata)
    const bodydata = new FormData();

    bodydata.append('nomerinduk', data.nomerinduk);
    if (data.changepassword === true){
        console.log('password ganti')
        bodydata.append('password', data.password1);
    }else{
        console.log('password tidak ganti')
    }
    // bodydata.append('password', data.password);
    bodydata.append('active', data.active);
    bodydata.append('siswa', data.siswa);
    bodydata.append('staff', data.staff);
    bodydata.append('admin', data.admin);
    bodydata.append('supervisor', data.supervisor);
    bodydata.append('superuser', data.superuser);

    axios.patch(`http://127.0.0.1:8000/api/auth/user/${data.id}/update`, bodydata, tokenConfigmultipleform(getState))
    .then(res=>{
        console.log('sukses')
        dispatch({
            type : BIODATA_ACCOUNT_UPDATED,
            payload : res.data
        })
        console.log('res',res)
        dispatch(SuccessMassages('update account berhasil'))
    }).catch(err=>{
        dispatch(ErrorMassages(err.response.data))
        console.log(err)
        console.log('errornya adalah:',err.response.data)
    })
}
////// BIODATA SISWA
export const LoadListofSiswa = (BiodataID) => (dispatch, getState)=>{
    axios.get('http://localhost:8000/api/auth/list_biodata_siswa', tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : SISWA_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}



