import React from 'react'

import PrestasiSubmissionDetail from '../Detail/PrestasiSubmissionDetail'

const PrestasiSubmissionDetailViewModal = () => {
    return (
        <div className="modal fade" id="ViewPrestasiSubmissionDetailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Prestasi Submission Detail View</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <PrestasiSubmissionDetail />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrestasiSubmissionDetailViewModal