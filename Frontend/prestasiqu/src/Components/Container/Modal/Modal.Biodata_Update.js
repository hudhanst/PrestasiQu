import React from 'react'

import BiodataUpdate from '../Detail/BiodataUpdate'

const BiodataUpdateModal = () => {
    return (
        <div className="modal fade" id="BiodataUpdateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Biodata Update</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <BiodataUpdate />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiodataUpdateModal