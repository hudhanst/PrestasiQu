import React from 'react'

import InstansiDelete from '../Detail/InstansiDelete'

const InstansiDeleteModal = () => {
    return (
        <div className="modal fade" id="InstansiDeleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Instansi Delete</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <InstansiDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstansiDeleteModal