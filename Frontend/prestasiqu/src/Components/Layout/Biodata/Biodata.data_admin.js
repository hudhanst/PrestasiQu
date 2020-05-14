import React from 'react'

import { ButtonAddAdmin } from '../../Container/Button_Add'
import Print from '../../Container/Print'
import Filter from '../../Container/Filter'

import BiodataTableDataAdmin from '../../Container/Detail/BiodataTabel.Dataadmin'
import DetailViewModal from '../../Container/Modal/Modal.Detail_View'
import BiodataUpdateModal from '../../Container/Modal/Modal.Biodata_Update'
import AccountUpdateModal from '../../Container/Modal/Modal.Account_Update'
import BiodataDeleteModal from '../../Container/Modal/Modal.Biodata_Delete'
class DataAdmin extends React.Component {
    render() {
        return (
            <div>
                <h1 className='position-center'>-Data Admin-</h1>
                <ButtonAddAdmin />
                <Print />
                <Filter tablename={'tabeldataadmin'} tdnumber={1} />
                <BiodataTableDataAdmin />
                <DetailViewModal />
                <BiodataUpdateModal />
                <AccountUpdateModal />
                <BiodataDeleteModal />
            </div>
        )
    }
}

export default DataAdmin