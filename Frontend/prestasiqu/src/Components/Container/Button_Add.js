import React from 'react'

////// BIODATA
////// BIODATA-SISWA
import BiodataAddSiswaModal from './Modal/Modal.Biodata_AddSiswa'
////// BIODATA-GURU
import BiodataAddGuruModal from './Modal/Modal.Biodata_AddGuru'
////// BIODATA-ADMIN
import BiodataAddAdminModal from './Modal/Modal.Biodata_AddAdmin'
////// POINT
////// POINT-PRESTASI
import PelanggaranAddModal from './Modal/Modal.Pelanggaran_Add'
////// POINT-POINT-ADD
import PointAddModal from './Modal/Modal.Point_AddPoint'
////// PRESTASI
////// PRESTASI-INSTANSI-ADD
import InstansiAddModal from './Modal/Modal.Prestasi_AddInstansi'
////// PRESTASI-PRESTASI-ADD
import PrestasiAddModal from './Modal/Modal.Prestasi_AddPrestasi'

////// BIODATA
////// BIODATA-SISWA
////// BIODATA-SISWA-ADD
export const ButtonAddSiswa = () => {
    return (
        <div>
            <BiodataAddSiswaModal />
            <button data-toggle="modal" data-target="#BiodataAddSiswaModal" className='btn btn-lg btn-block btn-colorize-green'>Create Siswa Biodata</button>

        </div>
    )
}
////// BIODATA-GURU
////// BIODATA-GURU-ADD
export const ButtonAddGuru = () => {
    return (
        <div>
            <BiodataAddGuruModal />
            <button data-toggle="modal" data-target="#BiodataAddGuruModal" className='btn btn-lg btn-block btn-colorize-green'>Create Guru Biodata</button>

        </div>
    )
}
////// BIODATA-ADMIN
////// BIODATA-ADMIN-ADD
export const ButtonAddAdmin = () => {
    return (
        <div>
            <BiodataAddAdminModal />
            <button data-toggle="modal" data-target="#BiodataAddAdminModal" className='btn btn-lg btn-block btn-colorize-green'>Create Admin Biodata</button>

        </div>
    )
}
////// POINT
////// POINT-PELANGGARAN-ADD
export const ButtonAddPelanggaran = () => {
    return (
        <div>
            <PelanggaranAddModal />
            <button data-toggle="modal" data-target="#PelanggaranAddModal" className='btn btn-lg btn-block btn-colorize-green'>Create Pelanggaran Detail</button>

        </div>
    )
}
////// POINT-POINT-ADD
export const ButtonAddPoint = () => {
    return (
        <div>
            <PointAddModal />
            <button data-toggle="modal" data-target="#PointAddPointModal" className='btn btn-lg btn-block btn-colorize-green'>Create a Point</button>

        </div>
    )
}
////// PRESTASI
////// PRESTASI-INSTANSI-ADD
export const ButtonAddInstansi = () => {
    return (
        <div>
            <InstansiAddModal />
            <button data-toggle="modal" data-target="#PrestasiAddInstansiModal" className='btn btn-lg btn-block btn-colorize-green'>Create Instansi Detail</button>

        </div>
    )
}
////// PRESTASI-PRESTASI-ADD
export const ButtonAddPrestasi = () => {
    return (
        <div>
            <PrestasiAddModal />
            <button data-toggle="modal" data-target="#PrestasiAddPrestasiModal" className='btn btn-lg btn-block btn-colorize-green'>Create a Prestasi</button>

        </div>
    )
}