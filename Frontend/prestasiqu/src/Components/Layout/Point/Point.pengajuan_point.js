import React from 'react'

import { ButtonAddPoint } from '../../Container/Button_Add'
import Print from '../../Container/Print'

import PointSubmissionDetailViewModal from '../../Container/Modal/Modal.PointSubmissionDetail_View'
import PointTabelDataUnconfirmPoint from '../../Container/Detail/PointTabel.DataUnconfirmPoint'
import PointTabelDataConfirmPoint from '../../Container/Detail/PointTabel.DataConfirmPoint'

class PointPengajuan extends React.Component {
    state = {
        isUnconfirmTableOpen: false,
        isConfirmTableOpen: true,
    }
    OpenTableOrNot(stateName, stateValue) {
        this.setState({ [stateName]: !stateValue })
    }
    render() {
        const {
            isUnconfirmTableOpen,
            isConfirmTableOpen,
        } = this.state
        return (
            <div>
                <h1 className='position-center'>-Pengajuan Poin-</h1>
                <ButtonAddPoint />
                <Print />
                <PointSubmissionDetailViewModal />
                <h3 onClick={() => this.OpenTableOrNot('isUnconfirmTableOpen', isUnconfirmTableOpen)}><b>Unconfirmed Point</b></h3>
                {/* <hr /> */}
                {isUnconfirmTableOpen ?
                    <PointTabelDataUnconfirmPoint />
                    : null}
                <h3 onClick={() => this.OpenTableOrNot('isConfirmTableOpen', isConfirmTableOpen)}><b>List All Confirmed Point</b></h3>
                {/* <hr /> */}
                {isConfirmTableOpen ?
                    <PointTabelDataConfirmPoint />
                    : null}
            </div>
        )
    }
}

export default PointPengajuan