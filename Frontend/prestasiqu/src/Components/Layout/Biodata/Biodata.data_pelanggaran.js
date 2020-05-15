import React from 'react'

import { ButtonAddPelanggaran } from '../../Container/Button_Add'
import Print from '../../Container/Print'

import PelanggaranTabelDataPelanggaran from '../../Container/Detail/PelanggaranTabel.Datapelanggaran'
import PelanggaranDetailViewModal from '../../Container/Modal/Modal.PelanggaranDetail_View'
import PelanggaranUpdateModal from '../../Container/Modal/Modal.Pelanggaran_Update'
import PelanggaranDeleteModal from '../../Container/Modal/Modal.Pelanggaran_Delete'
class DataPelanggaran extends React.Component{
    render(){
        return(
            <div>
                <h1 className='position-center'>-Data Pelanggaran-</h1>
                <ButtonAddPelanggaran />
                <Print />
                <PelanggaranTabelDataPelanggaran />
                <PelanggaranDetailViewModal />
                <PelanggaranUpdateModal />
                <PelanggaranDeleteModal />
            </div>
        )
    }
}

export default DataPelanggaran