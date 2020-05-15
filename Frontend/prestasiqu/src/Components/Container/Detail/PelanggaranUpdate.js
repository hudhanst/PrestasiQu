import React from 'react'

import { connect } from 'react-redux'

import { LoadPelanggaranUpdate, UpdatePelanggaran } from '../../../Store/Actions/Point.Actions'

import Loading from '../Loading'
import DataNotFound from '../DataNotFound'

class PelanggaranUpdate extends React.Component {
    state = {
        id: '',
        Nama_Pelanggaran: '',
        Jenis_Pelanggaran: '',
        Pelanggaran_Point: '',
        Keterangan_Pelanggaran: '',
    }

    componentDidUpdate(prevProps) {
        if (this.props.point.Pelanggaran_Update_ID !== prevProps.point.Pelanggaran_Update_ID) {
            const { Pelanggaran_Update_ID } = this.props.point
            if (Pelanggaran_Update_ID !== null) {
                this.props.LoadPelanggaranUpdate(Pelanggaran_Update_ID)
            }
        }
        if (this.props.point.Pelanggaran_Update !== prevProps.point.Pelanggaran_Update) {
            const { Pelanggaran_Update } = this.props.point
            if (Pelanggaran_Update) {
                this.setState({
                    id: Pelanggaran_Update.id,
                    Nama_Pelanggaran: Pelanggaran_Update.Nama_Pelanggaran,
                    Jenis_Pelanggaran: Pelanggaran_Update.Jenis_Pelanggaran,
                    Pelanggaran_Point: Pelanggaran_Update.Pelanggaran_Point,
                    Keterangan_Pelanggaran: Pelanggaran_Update.Keterangan_Pelanggaran,
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
            Nama_Pelanggaran: this.state.Nama_Pelanggaran,
            Jenis_Pelanggaran: this.state.Jenis_Pelanggaran,
            Pelanggaran_Point: this.state.Pelanggaran_Point,
            Keterangan_Pelanggaran: this.state.Keterangan_Pelanggaran,
        }
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }

        this.props.UpdatePelanggaran(updatedata, authdata)
    }
    render() {
        const { isPelanggaranLoading } = this.props.point
        const {
            id,
            Nama_Pelanggaran,
            Jenis_Pelanggaran,
            Pelanggaran_Point,
            Keterangan_Pelanggaran,
        } = this.state
        // console.log('state', this.state)
        if (isPelanggaranLoading === true) {
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
                                <input type='text' className='Input-as-Info Input-as-Update' readOnly name='Nama_Pelanggaran' value={Nama_Pelanggaran} /><br />
                                <label>Jenis Pelanggaran:</label><br />
                                <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Jenis_Pelanggaran' value={Jenis_Pelanggaran}>
                                    <option value="" disabled> -- select an option -- </option>
                                    <option value="Ringan">Ringan</option>
                                    <option value="Sedang">Sedang</option>
                                    <option value="Berat">Berat</option>
                                </select>
                                <label>Pelanggaran Point:</label><br />
                                <input type='number' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Pelanggaran_Point' value={Pelanggaran_Point} /><br />
                                <label>KeteranganPelanggaran:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Keterangan_Pelanggaran' value={Keterangan_Pelanggaran} /><br />
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
    point: state.Point,
    auth: state.Auth
})
export default connect(mapStateToProps, { LoadPelanggaranUpdate, UpdatePelanggaran })(PelanggaranUpdate)