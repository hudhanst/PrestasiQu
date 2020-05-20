import React from 'react'

import { ButtonAddPrestasi } from '../../Container/Button_Add'
import Print from '../../Container/Print'

import PrestasiSubmissionDetailViewModal from '../../Container/Modal/Modal.PrestasiSubmissionDetail_View'
import PrestasiTabelDataUnconfirmPrestasi from '../../Container/Detail/PrestasiTabel.DataUnconfirmPrestasi'
import PrestasiTabelDataConfirmPrestasi from '../../Container/Detail/PrestasiTabel.DataConfirmPrestasi'

class PrestasiPengajuan extends React.Component{
    state = {
        isUnconfirmTableOpen: false,
        isConfirmTableOpen: true,
    }
    OpenTableOrNot(stateName, stateValue) {
        this.setState({ [stateName]: !stateValue })
    }
    render(){
        const {
            isUnconfirmTableOpen,
            isConfirmTableOpen,
        } = this.state
        return(
            <div>
                <h1 className='position-center'>-Pengajuan Prestasi-</h1>
                <ButtonAddPrestasi />
                <Print />

                <PrestasiSubmissionDetailViewModal />

                <h3 onClick={() => this.OpenTableOrNot('isUnconfirmTableOpen', isUnconfirmTableOpen)}><b>Unconfirmed Prestasi</b></h3>
                {isUnconfirmTableOpen ?
                    <PrestasiTabelDataUnconfirmPrestasi />
                    : null}

                <h3 onClick={() => this.OpenTableOrNot('isConfirmTableOpen', isConfirmTableOpen)}><b>List All Confirmed Prestasi</b></h3>
                {isConfirmTableOpen ?
                    <PrestasiTabelDataConfirmPrestasi />
                    : null}
            </div>
        )
    }
}

export default PrestasiPengajuan