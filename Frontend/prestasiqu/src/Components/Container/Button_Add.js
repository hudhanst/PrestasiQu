import React from 'react'

////// BIODATA
////// BIODATA-SISWA
import BiodataAddSiswaModal from './Modal/Modal.Biodata_AddSiswa'
////// BIODATA-GURU
import BiodataAddGuruModal from './Modal/Modal.Biodata_AddGuru'
////// BIODATA-ADMIN
import BiodataAddAdminModal from './Modal/Modal.Biodata_AddAdmin'
////// PRESTASI
////// PRESTASI-PRESTASI
import PelanggaranAddModal from './Modal/Modal.Pelanggaran_Add'

////// BIODATA
////// BIODATA-SISWA
////// BIODATA-SISWA-ADD
export const ButtonAddSiswa = () =>{
    return(
        <div>
            <BiodataAddSiswaModal />
            <button data-toggle="modal" data-target="#BiodataAddSiswaModal" className='btn btn-lg btn-block btn-colorize-green'>Create Siswa Biodata</button>

        </div>
    )
}
////// BIODATA-GURU
////// BIODATA-GURU-ADD
export const ButtonAddGuru = () =>{
    return(
        <div>
            <BiodataAddGuruModal />
            <button data-toggle="modal" data-target="#BiodataAddGuruModal" className='btn btn-lg btn-block btn-colorize-green'>Create Guru Biodata</button>

        </div>
    )
}
////// BIODATA-ADMIN
////// BIODATA-ADMIN-ADD
export const ButtonAddAdmin = () =>{
    return(
        <div>
            <BiodataAddAdminModal />
            <button data-toggle="modal" data-target="#BiodataAddAdminModal" className='btn btn-lg btn-block btn-colorize-green'>Create Admin Biodata</button>

        </div>
    )
}
////// PELANGGARAN
////// PELANGGARAN-PELANGGARAN-ADD
export const ButtonAddPelanggaran = () =>{
    return(
        <div>
            <PelanggaranAddModal />
            <button data-toggle="modal" data-target="#PelanggaranAddModal" className='btn btn-lg btn-block btn-colorize-green'>Create Pelanggaran Detail</button>

        </div>
    )
}