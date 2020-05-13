import React from 'react'

import BiodataSiswaAdd from '../Detail/BiodataSiswaAdd'

const BiodataAddSiswaModal = () => {
    return (
        <div className="modal fade" id="BiodataAddSiswaModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Create Siswa Biodata</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <BiodataSiswaAdd />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiodataAddSiswaModal