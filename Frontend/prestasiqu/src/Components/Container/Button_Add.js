import React from 'react'

import BiodataAddSiswaModal from './Modal/Modal.Biodata_AddSiswa'
import BiodataAddGuruModal from './Modal/Modal.Biodata_AddGuru'
import BiodataAddAdminModal from './Modal/Modal.Biodata_AddAdmin'

////// SISWA 
////// SISWA-ADD 
export const ButtonAddSiswa = () =>{
    return(
        <div>
            <BiodataAddSiswaModal />
            <button data-toggle="modal" data-target="#BiodataAddSiswaModal" className='btn btn-lg btn-block btn-colorize-green'>Create Siswa Biodata</button>

        </div>
    )
}
////// GURU 
////// GURU-ADD 
export const ButtonAddGuru = () =>{
    return(
        <div>
            <BiodataAddGuruModal />
            <button data-toggle="modal" data-target="#BiodataAddGuruModal" className='btn btn-lg btn-block btn-colorize-green'>Create Guru Biodata</button>

        </div>
    )
}
////// ADMIN 
////// ADMIN-ADD
export const ButtonAddAdmin = () =>{
    return(
        <div>
            <BiodataAddAdminModal />
            <button data-toggle="modal" data-target="#BiodataAddAdminModal" className='btn btn-lg btn-block btn-colorize-green'>Create Admin Biodata</button>

        </div>
    )
}