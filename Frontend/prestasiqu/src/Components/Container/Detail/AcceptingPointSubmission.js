import React from 'react'

import { connect } from 'react-redux'

import { PointAcception } from '../../../Store/Actions/Point.Actions'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class PointSubmissionDetail extends React.Component {
    state = {
        Action: '',
        ConfirmAction: '',
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const { Point_ID } = this.props.point
        const data = {
            Action: this.state.Action,
            ConfirmAction: this.state.ConfirmAction,
        }
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        if((data.Action) && (data.Action === data.ConfirmAction)){
            this.props.PointAcception(Point_ID, user.nomerinduk, data.Action, authdata)
        }
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    render() {
        const { isPelanggaranLoading, Point_ID } = this.props.point
        const {
            Action,
            ConfirmAction,
        } = this.state
        const ActionOption = ['Accepted', 'Rejected']
        if (isPelanggaranLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Point_ID ? (
                        <div className="Biodata-section">
                            <div className="header">
                                <h4 className="font-weight-bold position-center">Point Acception</h4>
                                <hr />
                            </div>
                            <div>
                                <form onSubmit={this.Form_OnSubmit}>
                                    <div>
                                        <label>Point ID</label>
                                        <input type='text' className='Input-as-Info Input-as-Update' value={Point_ID} readOnly />
                                        <label>Action</label>
                                        <select className={`Input-as-Info Input-as-Update ${Action === ConfirmAction ? null : 'form-error'}`} onChange={this.Form_OnChange} name='Action' value={Action}>
                                            <option value="" disabled> -- select an option -- </option>
                                            {ActionOption.map((listdata) =>
                                                <option key={listdata} value={listdata}>{listdata}</option>
                                            )}
                                        </select>
                                        <label>Confirm Action</label>
                                        <select className={`Input-as-Info Input-as-Update ${Action === ConfirmAction ? null : 'form-error'}`} onChange={this.Form_OnChange} name='ConfirmAction' value={ConfirmAction}>
                                            <option value="" disabled> -- select an option -- </option>
                                            {ActionOption.map((listdata) =>
                                                <option key={listdata} value={listdata}>{listdata}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-lg btn-block btn-colorize-green">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                        : <DataNotFound />
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    point: state.Point,
    auth: state.Auth,
})

export default connect(mapStateToProps, { PointAcception })(PointSubmissionDetail)