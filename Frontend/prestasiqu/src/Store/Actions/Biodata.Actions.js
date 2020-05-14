import axios from 'axios'
import FormData from 'form-data'
import {
    ErrorMassages,
    SuccessMassages
} from './Messages.Actions'

import {
    ////// LOADING
    BIODATA_LOADING,
    ////// LOAD DETAIL
    _BUTTON_DETAIL_VIEW_,
    BIODATA_DETAIL_LOADED,
    BIODATA_ACCOUNT_DETAIL_LOADED,
    ////// BIODATA-UPDATE
    _BUTTON_UPDATE_BIODATA_,
    BIODATA_UPDATE_DATA_LOADED,
    BIODATA_UPDATED,
    ////// BIODATA-DELETE
    BIODATA_DELETED,
    ////// BIODATA ACCOUNT-UPDATE
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
} from './Type.Actions'

import {tokenConfig, tokenConfigmultipleform} from './Auth.Actions'

////// LOAD DETAIL
export const Button_DetailView = (BiodataID) => (dispatch) => {
    dispatch({
        type :_BUTTON_DETAIL_VIEW_,
        payload : BiodataID
    })
}
export const LoadBiodata = (BiodataID) => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get(`http://localhost:8000/api/biodata/user/${BiodataID}`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_DETAIL_LOADED,
            payload : res.data,
        })
    }).catch(err=>{
        console.log(err)
    })
}
export const LoadBiodataAccount = (BiodataID) => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get(`http://127.0.0.1:8000/api/auth/user/${BiodataID}`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_ACCOUNT_DETAIL_LOADED,
            payload : res.data,
        })
    }).catch(err=>{
        console.log(err)
    })
}
////// BIODATA-UPDATE
export const Button_UpdateBiodata = (BiodataID) => (dispatch) =>{
    dispatch({
        type:_BUTTON_UPDATE_BIODATA_,
        payload : BiodataID
    })
}
export const LoadBiodataUpdate = (BiodataID) => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get(`http://127.0.0.1:8000/api/biodata/user/${BiodataID}/update`, tokenConfig(getState))
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
    axios.patch(`http://127.0.0.1:8000/api/biodata/user/${data.id}/update`,bodydata, tokenConfigmultipleform(getState))
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
////// BIODATA-DELETE
export const DeleteBiodata = (BiodataID, authdata) => (dispatch, getState)=>{
    axios.delete(`http://127.0.0.1:8000/api/biodata/user/${BiodataID}/delete`, null, tokenConfig(getState))
    .then(res=>{
        dispatch({type:BIODATA_DELETED})
        console.log(res)
        window.location.reload(true)
    }).catch(err=>{
        console.log(err)
    })
}
////// BIODATA ACCOUNT-UPDATE
export const Button_UpdateBiodataAccount = (BiodataID) => (dispatch) =>{
    dispatch({
        type:_BUTTON_UPDATE_BIODATA_ACCOUNT_,
        payload : BiodataID
    })
}
export const LoadBiodataAccountUpdate = (BiodataID) => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get(`http://127.0.0.1:8000/api/auth/user/${BiodataID}/update`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : BIODATA_ACCOUNT_UPDATE_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
export const UpdateBiodataAccount = (BiodataID, data, authdata) =>(dispatch, getState)=>{
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

    axios.patch(`http://127.0.0.1:8000/api/auth/user/${BiodataID}/update`, bodydata, tokenConfigmultipleform(getState))
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
export const LoadListofSiswa = () => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get('http://localhost:8000/api/biodata/list_biodata_siswa', tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : SISWA_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
////// BIODATA SISWA-CREATE
export const CreateBiodataasSiswa = (Data, authdata) =>(dispatch, getState)=>{
    const bodydata = new FormData()
    
    bodydata.append('NomerInduk', Data.NomerInduk)
    bodydata.append('Nama', Data.Nama)
    bodydata.append('Agama', Data.Agama)
    bodydata.append('TempatLahir', Data.TempatLahir)
    bodydata.append('TanggalLahir', Data.TanggalLahir)
    bodydata.append('Alamat', Data.Alamat)
    bodydata.append('NomerTLP', Data.NomerTLP)
    bodydata.append('Email', Data.Email)
    bodydata.append('InstansiPendidikanTerakhir', Data.InstansiPendidikanTerakhir)
    if(Data.Profilepicture !== null){
        bodydata.append('Profilepicture', Data.Profilepicture);
    }

    axios.post('http://127.0.0.1:8000/api/biodata/register_biodata_siswa', bodydata, tokenConfigmultipleform(getState))
    .then(biores=>{
        console.log('SISWA_BIODATA_CREATED',biores)
        dispatch({type:SISWA_BIODATA_CREATED})
        const tgllahir = biores.data.TanggalLahir
        var password = tgllahir.replace(new RegExp("-", "g"), '')
        const nomerinduk =  biores.data.NomerInduk
        const profile = biores.data.id
        const AccountData = JSON.stringify({nomerinduk, password, profile})
        console.log('AccountData',AccountData)
        axios.post('http://127.0.0.1:8000/api/auth/register_user_siswa',AccountData,tokenConfig(getState))
        .then(accres=>{
            console.log('SISWA_ACCOUNT_CREATED',accres)
            dispatch({type:SISWA_ACCOUNT_CREATED})
            console.log('SISWA_FULLY_CREATED')
            dispatch({type:SISWA_FULLY_CREATED})
        }).catch(accerr=>{
            console.log('SISWA_ACCOUNT_FAILED_CREATE',accerr)
            dispatch({type:SISWA_ACCOUNT_FAILED_CREATE})
        })
    }).catch(bioerr=>{
        console.log('SISWA_BIODATA_FAILED_CREATE',bioerr)
        dispatch({type:SISWA_BIODATA_FAILED_CREATE})
    })
}
////// BIODATA STAFF
export const LoadListofStaff = () => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get('http://127.0.0.1:8000/api/biodata/list_biodata_staff', tokenConfig(getState))
    .then(res=>{
        console.log(res)
        dispatch({
            type : STAFF_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
////// BIODATA STAFF-CREATE
export const CreateBiodataasStaff = (Data, authdata) =>(dispatch, getState)=>{
    const bodydata = new FormData()
    
    bodydata.append('NomerInduk', Data.NomerInduk)
    bodydata.append('Nama', Data.Nama)
    bodydata.append('Agama', Data.Agama)
    bodydata.append('TempatLahir', Data.TempatLahir)
    bodydata.append('TanggalLahir', Data.TanggalLahir)
    bodydata.append('Alamat', Data.Alamat)
    bodydata.append('NomerTLP', Data.NomerTLP)
    bodydata.append('Email', Data.Email)
    bodydata.append('PendidikanTerakhir', Data.PendidikanTerakhir)
    bodydata.append('InstansiPendidikanTerakhir', Data.InstansiPendidikanTerakhir)
    if(Data.Profilepicture !== null){
        bodydata.append('Profilepicture', Data.Profilepicture);
    }

    axios.post('http://127.0.0.1:8000/api/biodata/register_biodata_staff', bodydata, tokenConfigmultipleform(getState))
    .then(biores=>{
        console.log('STAFF_BIODATA_CREATED',biores)
        dispatch({type:STAFF_BIODATA_CREATED})
        const tgllahir = biores.data.TanggalLahir
        var password = tgllahir.replace(new RegExp("-", "g"), '')
        const nomerinduk =  biores.data.NomerInduk
        const profile = biores.data.id
        const AccountData = JSON.stringify({nomerinduk, password, profile})
        console.log('AccountData',AccountData)
        axios.post('http://127.0.0.1:8000/api/auth/register_user_staff',AccountData,tokenConfig(getState))
        .then(accres=>{
            console.log('STAFF_ACCOUNT_CREATED',accres)
            dispatch({type:STAFF_ACCOUNT_CREATED})
            console.log('STAFF_FULLY_CREATED')
            dispatch({type:STAFF_FULLY_CREATED})
        }).catch(accerr=>{
            console.log('STAFF_ACCOUNT_FAILED_CREATE',accerr)
            dispatch({type:STAFF_ACCOUNT_FAILED_CREATE})
        })
    }).catch(bioerr=>{
        console.log('STAFF_BIODATA_FAILED_CREATE',bioerr)
        dispatch({type:STAFF_BIODATA_FAILED_CREATE})
    })
}
////// BIODATA ADMIN
export const LoadListofAdmin = () => (dispatch, getState)=>{
    dispatch({type:BIODATA_LOADING})
    axios.get('http://127.0.0.1:8000/api/biodata/list_biodata_admin', tokenConfig(getState))
    .then(res=>{
        console.log(res)
        dispatch({
            type : ADMIN_DATA_LOADED,
            payload : res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
////// BIODATA ADMIN-CREATE
export const CreateBiodataasAdmin = (Data, authdata) =>(dispatch, getState)=>{
    const bodydata = new FormData()
    
    bodydata.append('NomerInduk', Data.NomerInduk)
    bodydata.append('Nama', Data.Nama)
    bodydata.append('Agama', Data.Agama)
    bodydata.append('TempatLahir', Data.TempatLahir)
    bodydata.append('TanggalLahir', Data.TanggalLahir)
    bodydata.append('Alamat', Data.Alamat)
    bodydata.append('NomerTLP', Data.NomerTLP)
    bodydata.append('Email', Data.Email)
    bodydata.append('PendidikanTerakhir', Data.PendidikanTerakhir)
    bodydata.append('InstansiPendidikanTerakhir', Data.InstansiPendidikanTerakhir)
    if(Data.Profilepicture !== null){
        bodydata.append('Profilepicture', Data.Profilepicture);
    }

    axios.post('http://127.0.0.1:8000/api/biodata/register_biodata_admin', bodydata, tokenConfigmultipleform(getState))
    .then(biores=>{
        console.log('ADMIN_BIODATA_CREATED',biores)
        dispatch({type:ADMIN_BIODATA_CREATED})
        const tgllahir = biores.data.TanggalLahir
        var password = tgllahir.replace(new RegExp("-", "g"), '')
        const nomerinduk =  biores.data.NomerInduk
        const profile = biores.data.id
        const AccountData = JSON.stringify({nomerinduk, password, profile})
        console.log('AccountData',AccountData)
        axios.post('http://127.0.0.1:8000/api/auth/register_user_admin',AccountData,tokenConfig(getState))
        .then(accres=>{
            console.log('ADMIN_ACCOUNT_CREATED',accres)
            dispatch({type:ADMIN_ACCOUNT_CREATED})
            console.log('ADMIN_FULLY_CREATED')
            dispatch({type:ADMIN_FULLY_CREATED})
        }).catch(accerr=>{
            console.log('ADMIN_ACCOUNT_FAILED_CREATE',accerr)
            dispatch({type:ADMIN_ACCOUNT_FAILED_CREATE})
        })
    }).catch(bioerr=>{
        console.log('ADMIN_BIODATA_FAILED_CREATE',bioerr)
        dispatch({type:ADMIN_BIODATA_FAILED_CREATE})
    })
}
