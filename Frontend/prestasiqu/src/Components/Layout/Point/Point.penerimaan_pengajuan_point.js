import React from 'react'

import PointTabelDataUnconfirmPoint from '../../Container/Detail/PointTabel.DataUnconfirmPoint'
import PointSubmissionAcceptModal from '../../Container/Modal/Modal.PointSubmissionAccept'

class PointPenerimaan extends React.Component{
    render(){
        return(
            <div>
                <h1 className='position-center'>-Penerimaan Poin-</h1>
                <hr />
                <h3><b>Unconfirmed Point</b></h3>
                <PointTabelDataUnconfirmPoint ConfirmingPoint={true} />
                <PointSubmissionAcceptModal />
            </div>
        )
    }
}

export default PointPenerimaan