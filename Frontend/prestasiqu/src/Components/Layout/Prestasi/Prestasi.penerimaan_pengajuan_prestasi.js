import React from 'react'

import PrestasiTabelDataUnconfirmPrestasi from '../../Container/Detail/PrestasiTabel.DataUnconfirmPrestasi'
import PrestasiSubmissionAcceptModal from '../../Container/Modal/Modal.PrestasiSubmissionAccept'

class PrestasiPenerimaan extends React.Component{
    render(){
        return(
            <div>
                <h1 className='position-center'>-Penerimaan Prestasi-</h1>
                <hr />
                <h3><b>Unconfirmed Prestasi</b></h3>
                <PrestasiTabelDataUnconfirmPrestasi ConfirmingPrestasi={true} />
                <PrestasiSubmissionAcceptModal />
            </div>
        )
    }
}

export default PrestasiPenerimaan