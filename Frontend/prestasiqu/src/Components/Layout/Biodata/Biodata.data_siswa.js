import React from 'react'

import {ButtonAddSiswa} from '../../Container/Button_Add'
import Print from '../../Container/Print'
import Filter from '../../Container/Filter'

import BiodataTabelDatasiswa from '../../Container/Detail/BiodataTabel.Datasiswa'
import DetailViewModal from '../../Container/Modal/Modal.Detail_View'
import BiodataUpdateModal from '../../Container/Modal/Modal.Biodata_Update'
import AccountUpdateModal from '../../Container/Modal/Modal.Account_Update'
import BiodataDeleteModal from '../../Container/Modal/Modal.Biodata_Delete'

const DataSiswa = () =>{
    return(
        <div>
            <h1 className='position-center'>-Data Siswa-</h1>
            <ButtonAddSiswa />
            <Print />
            <Filter tablename={'tabeldatasiswa'} tdnumber={1}/>
            <BiodataTabelDatasiswa />
            <DetailViewModal />
            <BiodataUpdateModal />
            <AccountUpdateModal />
            <BiodataDeleteModal />
        </div>
    )
}

export default DataSiswa