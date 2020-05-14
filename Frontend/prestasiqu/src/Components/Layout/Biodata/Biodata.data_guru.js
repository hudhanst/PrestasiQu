import React from 'react'

import { ButtonAddGuru } from '../../Container/Button_Add'
import Print from '../../Container/Print'
import Filter from '../../Container/Filter'

import BiodataTableDataGuru from '../../Container/Detail/BiodataTabel.Dataguru'
import DetailViewModal from '../../Container/Modal/Modal.Detail_View'
import BiodataUpdateModal from '../../Container/Modal/Modal.Biodata_Update'
import AccountUpdateModal from '../../Container/Modal/Modal.Account_Update'
import BiodataDeleteModal from '../../Container/Modal/Modal.Biodata_Delete'
class DataGuru extends React.Component {
    render() {
        return (
            <div>
                <h1 className='position-center'>-Data Guru-</h1>
                <ButtonAddGuru />
                <Print />
                <Filter tablename={'tabeldataguru'} tdnumber={1} />
                <BiodataTableDataGuru />
                <DetailViewModal />
                <BiodataUpdateModal />
                <AccountUpdateModal />
                <BiodataDeleteModal />
            </div>
        )
    }
}

export default DataGuru