import React from 'react'

import { connect } from 'react-redux'

import { LoadBiodataUpdate, UpdateBiodata } from '../../../Store/Actions/Biodata.Actions'


class AccountUpdateModal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="AccountUpdateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title font-weight-bold">Update Account</h2>

                            <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    biodata: state.Biodata,
    auth: state.Auth
})
export default connect(mapStateToProps, { LoadBiodataUpdate, UpdateBiodata })(AccountUpdateModal)