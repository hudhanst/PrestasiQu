import React from 'react'

import { connect } from 'react-redux'

import { DeleteInstansi } from '../../../Store/Actions/Prestasi.Actions'

import DataNotFound from '../DataNotFound'
import InstansiDetail from './InstansiDetail'

class InstansiDelete extends React.Component {
    Delete_Instansi(InstansiID) {
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        this.props.DeleteInstansi(InstansiID, authdata)
    }
    render() {
        const { Instansi } = this.props.prestasi
        return (
            <div>
                {Instansi ? (
                    <div>
                        <div>
                            <h3><b>This Instansi Will Deleted, Are This Ok?</b></h3><br />
                            <InstansiDetail />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" onClick={() => this.Delete_Instansi(Instansi.id)} className="btn btn-danger">Yes, Delete</button>
                        </div>
                    </div>
                ) : <DataNotFound />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    prestasi: state.Prestasi,
    auth: state.Auth
})

export default connect(mapStateToProps, { DeleteInstansi })(InstansiDelete)