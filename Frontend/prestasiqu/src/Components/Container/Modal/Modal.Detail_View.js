import React from 'react'

import BiodataDetail from '../Detail/BiodataDetail'
import AccountDetail from '../Detail/AccountDetail'

const ViewDetailModal = () => {
    return (
        <div className="modal fade" id="ViewDetailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Detail View</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <BiodataDetail />
                        </div>
                        <div>
                            <AccountDetail />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetailModal