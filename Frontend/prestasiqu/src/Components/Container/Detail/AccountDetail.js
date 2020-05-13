import React from 'react'

import { connect } from 'react-redux'

import { LoadBiodataAccount } from '../../../Store/Actions/Biodata.Actions'

import DataNotFound from '../../Container/DataNotFound'
import Loading from '../Loading'

class AccountDetail extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.biodata.Biodata_ID !== prevProps.biodata.Biodata_ID) {
            const { Biodata_ID } = this.props.biodata
            if (Biodata_ID !== null) {
                this.props.LoadBiodataAccount(Biodata_ID)
            }
        }
    }
    render() {
        const { isBiodataLoading, Account } = this.props.biodata
        const { user } = this.props.auth
        if (isBiodataLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Account ? (
                        <div className='account-section'>
                            <h1 className='position-center'>Account</h1>
                            <label>Nomer Induk:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Account ? Account.nomerinduk : ""} /><br />
                            <label>Password:</label><br />
                            <input type='password' className='Input-as-Info' name='password' readOnly value={Account ? Account.password : ""} /><br />
                            {(user.admin || user.superuser) ? (
                                <div >
                                    <label>Active:</label><br />
                                    <div className='switch'>
                                        <input type="checkbox" name='active' readOnly checked={Account ? Account.active : false} />
                                        <span></span><br />
                                    </div><br />
                                    <label>Siswa:</label><br />
                                    <div className='switch'>
                                        <input type="checkbox" name='active' readOnly checked={Account ? Account.siswa : false} /><span></span><br />
                                    </div><br />
                                    <label>Staff:</label><br />
                                    <div className='switch'>
                                        <input type="checkbox" name='active' readOnly checked={Account ? Account.staff : false} /><span></span><br />
                                    </div><br />
                                    <label>Admin:</label><br />
                                    <div className='switch'>
                                        <input type="checkbox" name='active' readOnly checked={Account ? Account.admin : false} /><span></span><br />
                                    </div><br />
                                    <label>Supervisor:</label><br />
                                    <div className='switch'>
                                        <input type="checkbox" name='active' readOnly checked={Account ? Account.supervisor : false} /><span></span><br />
                                    </div><br />
                                    <label>Superuser:</label><br />
                                    <div className='switch'>
                                        <input type="checkbox" name='active' readOnly checked={Account ? Account.superuser : false} /><span></span><br />
                                    </div><br />
                                    <label>Last Login:</label><br />
                                    <input type='text' className='Input-as-Info' name='account' readOnly value={Account.last_login ? Account.last_login : ""} /><br />
                                </div>

                            )
                                : null
                            }
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
    biodata: state.Biodata,
    auth: state.Auth
})

export default connect(mapStateToProps, { LoadBiodataAccount })(AccountDetail)