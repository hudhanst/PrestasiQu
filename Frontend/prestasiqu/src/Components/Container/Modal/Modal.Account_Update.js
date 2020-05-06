import React from 'react'

import { connect } from 'react-redux'

import { LoadBiodataAccountUpdate, UpdateBiodataAccount } from '../../../Store/Actions/Biodata.Actions'

class AccountUpdateModal extends React.Component {
    state = {
        nomerinduk: null,
        changepassword: false,
        password: null,
        password1: '',
        password2: '',
        active: false,
        siswa: false,
        staff: false,
        admin: false,
        supervisor: false,
        superuser: false,
    }
    componentDidUpdate(prevProps) {
        if (this.props.biodata.Update_Biodata_Account_ID !== prevProps.biodata.Update_Biodata_Account_ID) {
            const { Update_Biodata_Account_ID } = this.props.biodata
            if (Update_Biodata_Account_ID !== null) {
                this.props.LoadBiodataAccountUpdate(Update_Biodata_Account_ID)
            }
        }
        if (this.props.biodata.Update_Biodata_Account !== prevProps.biodata.Update_Biodata_Account) {
            const { Update_Biodata_Account } = this.props.biodata
            if (Update_Biodata_Account) {
                this.setState({
                    id: Update_Biodata_Account.id,
                    nomerinduk: Update_Biodata_Account.nomerinduk,
                    password: Update_Biodata_Account.password,
                    active: Update_Biodata_Account.active,
                    siswa: Update_Biodata_Account.siswa,
                    staff: Update_Biodata_Account.staff,
                    admin: Update_Biodata_Account.admin,
                    supervisor: Update_Biodata_Account.supervisor,
                    superuser: Update_Biodata_Account.superuser,

                })
            }
        }
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
        // console.log('name', E.target.name)
        // console.log('value', E.target.value)
    }
    CheckBox_OnChange = E => {
        this.setState({ [E.target.name]: !this.state[E.target.name] })
        // console.log('name', E.target.name)
        // console.log('value', E.target.value)
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const { user } = this.props.auth
        const updatedata = {
            id: this.state.id,
            nomerinduk: this.state.nomerinduk,
            changepassword: this.state.changepassword,
            password1: this.state.password1,
            active: this.state.active,
            siswa: this.state.siswa,
            staff: this.state.staff,
            admin: this.state.admin,
            supervisor: this.state.supervisor,
            superuser: this.state.superuser,
        }
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        if ((this.state.changepassword === true) && ((this.state.password1 === '' || this.state.password1 === null) || (this.state.password1 !== this.state.password2))) {
            E.preventDefault()
        } else {
            this.props.UpdateBiodataAccount(updatedata, authdata)
        }
    }
    render() {
        const { user } = this.props.auth
        const {
            nomerinduk,
            changepassword,
            password,
            password1,
            password2,
            active,
            siswa,
            staff,
            admin,
            supervisor,
            superuser,
        } = this.state
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
                        {nomerinduk !== null ? (
                            <div className="modal-body">
                                <form onSubmit={this.Form_OnSubmit}>
                                    <label>Nomer Induk:</label><br />
                                    <input type='text' className='Input-as-Info Input-as-Update' readOnly name='nomerinduk' value={nomerinduk} /><br />
                                    <label>Password:</label><br />
                                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline" onChange={this.CheckBox_OnChange} name='changepassword' checked={changepassword} />
                                        <label className="custom-control-label" htmlFor="customControlInline">Change Password</label>
                                    </div>
                                    {changepassword ? (
                                        <div>
                                            <label>New Password:</label><br />
                                            <input type='password' className={`Input-as-Info Input-as-Update ${password1 === password2 ? null : 'form-error'}`} onChange={this.Form_OnChange} name='password1' value={password1} /><br />
                                            <label>Confirm New Password:</label><br />
                                            <input type='password' className={`Input-as-Info Input-as-Update ${password1 === password2 ? null : 'form-error'}`} onChange={this.Form_OnChange} name='password2' value={password2} /><br />
                                            {password1 === password2 ? null : (
                                                <div className='form-error-massages'>
                                                    password did not match
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                            <div>
                                                <input type='password' className='Input-as-Info' name='password' readOnly value={password} /><br />
                                            </div>
                                        )}
                                    {user.admin || user.superuser ? (
                                        <div>
                                            <label>Active:</label><br />
                                            <div className='switch'>
                                                <input type="checkbox" onChange={this.CheckBox_OnChange} name='active' checked={active} />
                                                <span></span><br />
                                            </div><br />
                                            <label>Siswa:</label><br />
                                            <div className='switch'>
                                                <input type="checkbox" onChange={this.CheckBox_OnChange} name='siswa' checked={siswa} /><span></span><br />
                                            </div><br />
                                            <label>Staff:</label><br />
                                            <div className='switch'>
                                                <input type="checkbox" onChange={this.CheckBox_OnChange} name='staff' checked={staff} /><span></span><br />
                                            </div><br />
                                            <label>Admin:</label><br />
                                            <div className='switch'>
                                                <input type="checkbox" onChange={this.CheckBox_OnChange} name='admin' checked={admin} /><span></span><br />
                                            </div><br />
                                            <label>Supervisor:</label><br />
                                            <div className='switch'>
                                                <input type="checkbox" onChange={this.CheckBox_OnChange} name='supervisor' checked={supervisor} /><span></span><br />
                                            </div><br />
                                            <label>Superuser:</label><br />
                                            <div className='switch'>
                                                <input type="checkbox" onChange={this.CheckBox_OnChange} name='superuser' checked={superuser} /><span></span><br />
                                            </div><br />
                                        </div>
                                    ) : null}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        ) : null}
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
export default connect(mapStateToProps, { LoadBiodataAccountUpdate, UpdateBiodataAccount })(AccountUpdateModal)