import React from 'react'

import { ButtonAddInstansi } from '../../Container/Button_Add'
import Print from '../../Container/Print'

import InstansiTableDataInstansi from '../../Container/Detail/InstansiTabel.Datainstansi'
import InstansiDetailViewModal from '../../Container/Modal/Modal.InstansiDetail_View'
import InstansiUpdateModal from '../../Container/Modal/Modal.Instansi_Update'
import InstansiDeleteModal from '../../Container/Modal/Modal.Instansi_Delete'
class DataInstansi extends React.Component {
    render() {
        return (
            <div>
                <h1 className='position-center'>-Data Instansi-</h1>
                <ButtonAddInstansi />
                <Print />
                <InstansiTableDataInstansi />
                <InstansiDetailViewModal />
                <InstansiUpdateModal />
                <InstansiDeleteModal />
            </div>
        )
    }
}

export default DataInstansi