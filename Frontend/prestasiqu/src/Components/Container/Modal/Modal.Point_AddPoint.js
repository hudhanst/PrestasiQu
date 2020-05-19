import React from 'react'

import Filter from '../Filter'
import BiodataDataLengkap from '../Detail/BiodataTabel.DataLengkap'
import PointSubmissionModal from './Modal.PointSubmission'
// import PelanggaranSubmission from '../Detail/PelanggaranSubmission'

const PointAddModal = () => {
    return (
        <div className="modal fade" id="PointAddPointModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-super" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Create a Point</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Filter tablename={'tabeldatalengkap'} tdnumber={1}/>
                        <BiodataDataLengkap proptype={'point'} />
                        <PointSubmissionModal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PointAddModal