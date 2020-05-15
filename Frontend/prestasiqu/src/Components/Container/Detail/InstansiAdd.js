import React from 'react'

import { connect } from 'react-redux'

import { CreateInstansi } from '../../../Store/Actions/Prestasi.Actions'

class InstansiAdd extends React.Component {
    state = {
        Nama_Instansi: '',
        Jenis_Instansi: '',
        Keterangan_Instansi: '',
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const data = {
            Nama_Instansi: this.state.Nama_Instansi,
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
        this.props.CreateInstansi(data, authdata)
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    render() {
        const {
            Nama_Instansi,
            Jenis_Instansi,
            Keterangan_Instansi,
        } = this.state
        return (
            <div>
                <h2 className='position-center'>-Create Instansi Detail-</h2><br />
                <form onSubmit={this.Form_OnSubmit}>
                    <div>
                        <label>Nama Instansi:</label><br />
                        <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama_Instansi' value={Nama_Instansi} required /><br />
                        <label>Jenis Instansi:</label><br />
                        {/* <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Jenis_Instansi' value={Jenis_Instansi} required >
                            <option value="" disabled> -- select an option -- </option>
                            <option value="Ringan">Ringan</option>
                            <option value="Sedang">Sedang</option>
                            <option value="Berat">Berat</option>
                        </select> */}
                        <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Jenis_Instansi' value={Jenis_Instansi} /><br />
                        <label>KeteranganInstansi:</label><br />
                        <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Keterangan_Instansi' value={Keterangan_Instansi} /><br />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-lg btn-block btn-colorize-green">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    prestasi: state.Prestasi,
    auth: state.Auth
})

export default connect(mapStateToProps, { CreateInstansi })(InstansiAdd)