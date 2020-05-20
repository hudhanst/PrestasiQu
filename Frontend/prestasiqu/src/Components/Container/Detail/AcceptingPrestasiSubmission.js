import React from 'react'

import { connect } from 'react-redux'

import { PrestasiAcception } from '../../../Store/Actions/Prestasi.Actions'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class AcceptingPrestasiSubmission extends React.Component {
    state = {
        Action: '',
        ConfirmAction: '',
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const { Prestasi_ID } = this.props.prestasi
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
            this.props.PrestasiAcception(Prestasi_ID, user.nomerinduk, data.Action, authdata)
        }
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    render() {
        const { isPrestasiLoading, Prestasi_ID } = this.props.prestasi
        const {
            Action,
            ConfirmAction,
        } = this.state
        const ActionOption = ['Accepted', 'Rejected']
        if (isPrestasiLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Prestasi_ID ? (
                        <div className="Biodata-section">
                            <div className="header">
                                <h4 className="font-weight-bold position-center">Prestasi Acception</h4>
                                <hr />
                            </div>
                            <div>
                                <form onSubmit={this.Form_OnSubmit}>
                                    <div>
                                        <label>Prestasi ID</label>
                                        <input type='text' className='Input-as-Info Input-as-Update' value={Prestasi_ID} readOnly />
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
    prestasi: state.Prestasi,
    auth: state.Auth,
})

export default connect(mapStateToProps, { PrestasiAcception })(AcceptingPrestasiSubmission)