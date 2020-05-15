import React from 'react'

import PelanggaranDelete from '../Detail/PelanggaranDelete'

const PelanggaranDeleteModal = () => {
    return (
        <div className="modal fade" id="PelanggaranDeleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Pelanggaran Delete</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <PelanggaranDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PelanggaranDeleteModal