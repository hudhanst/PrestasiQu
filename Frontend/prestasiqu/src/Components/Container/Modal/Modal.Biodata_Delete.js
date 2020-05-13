import React from 'react'

import BiodataDelete from '../Detail/BiodataDelete'

const BiodataDeleteModal = () => {
    return (
        <div className="modal fade" id="BiodataDeleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Biodata Delete</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <BiodataDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiodataDeleteModal