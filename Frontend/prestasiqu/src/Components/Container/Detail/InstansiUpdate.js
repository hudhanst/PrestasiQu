import React from 'react'

import { connect } from 'react-redux'

import { LoadInstansiUpdate, UpdateInstansi } from '../../../Store/Actions/Prestasi.Actions'

import Loading from '../Loading'
import DataNotFound from '../DataNotFound'

class InstansiUpdate extends React.Component {
    state = {
        id: '',
        Nama_Instansi: '',
        Jenis_Instansi: '',
        Keterangan_Instansi: '',
    }

    componentDidUpdate(prevProps) {
        if (this.props.prestasi.Instansi_Update_ID !== prevProps.prestasi.Instansi_Update_ID) {
            const { Instansi_Update_ID } = this.props.prestasi
            if (Instansi_Update_ID !== null) {
                this.props.LoadInstansiUpdate(Instansi_Update_ID)
            }
        }
        if (this.props.prestasi.Instansi_Update !== prevProps.prestasi.Instansi_Update) {
            const { Instansi_Update } = this.props.prestasi
            if (Instansi_Update) {
                this.setState({
                    id: Instansi_Update.id,
                    Nama_Instansi: Instansi_Update.Nama_Instansi,
                    Jenis_Instansi: Instansi_Update.Jenis_Instansi,
                    Keterangan_Instansi: Instansi_Update.Keterangan_Instansi,
                })
            }
        }
    }

    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const updatedata = {
            id: this.state.id,
            // Nama_Instansi: this.state.Nama_Instansi,
            Jenis_Instansi: this.state.Jenis_Instansi,
            Keterangan_Instansi: this.state.Keterangan_Instansi,
        }
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }

        this.props.UpdateInstansi(updatedata, authdata)
    }
    render() {
        const { isPrestasiLoading } = this.props.prestasi
        const {
            id,
            Nama_Instansi,
            Jenis_Instansi,
            Keterangan_Instansi,
        } = this.state
        // console.log('state', this.state)
        if (isPrestasiLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {id ? (
                        <form onSubmit={this.Form_OnSubmit}>
                            <div>
                                <label>Id:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' readOnly name='id' value={id} /><br />
                                <label>Nama Pelanggaran:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' readOnly name='Nama_Instansi' value={Nama_Instansi} /><br />
                                <label>Jenis Pelanggaran:</label><br />
                                {/* <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Jenis_Pelanggaran' value={Jenis_Pelanggaran}>
                                    <option value="" disabled> -- select an option -- </option>
                                    <option value="Ringan">Ringan</option>
                                    <option value="Sedang">Sedang</option>
                                    <option value="Berat">Berat</option>
                                </select> */}
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Jenis_Instansi' value={Jenis_Instansi} /><br />
                                <label>KeteranganPelanggaran:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Keterangan_Instansi' value={Keterangan_Instansi} /><br />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    ) : <DataNotFound />}
                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    prestasi: state.Prestasi,
    auth: state.Auth
})
export default connect(mapStateToProps, { LoadInstansiUpdate, UpdateInstansi })(InstansiUpdate)