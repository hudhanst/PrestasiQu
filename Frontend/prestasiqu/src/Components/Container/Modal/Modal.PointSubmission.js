import React from 'react'

import BiodataDetail from '../Detail/BiodataDetail'
import PointSubmission from '../Detail/PointSubmission'

const PointAddModal = () => {
    return (
        <div className="modal fade" id="PointSubmissionModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Submission Point</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <BiodataDetail />
                        <hr />
                        <PointSubmission />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PointAddModal