import React from 'react'

import Filter from '../Filter'
import BiodataDataLengkap from '../Detail/BiodataTabel.DataLengkap'
import PrestasiSubmissionModal from './Modal.PrestasiSubmission'

const PrestasiAddModal = () => {
    return (
        <div className="modal fade" id="PrestasiAddPrestasiModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-super" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Create a Prestasi</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Filter tablename={'tabeldatalengkap'} tdnumber={1}/>
                        <BiodataDataLengkap proptype={'prestasi'} />
                        <PrestasiSubmissionModal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrestasiAddModal