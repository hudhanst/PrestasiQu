import React from 'react'

import AccountUpdate from '../Detail/AccountUpdate'

const AccountUpdateModal = () => {
    return (
        <div className="modal fade" id="AccountUpdateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title font-weight-bold">Account Update</h2>
                        <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AccountUpdate />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountUpdateModal