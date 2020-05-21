import React from 'react'

import { connect } from 'react-redux'

import { CreatePelanggaran } from '../../../Store/Actions/Point.Actions'

class PelanggaranAdd extends React.Component {
    state = {
        Nama_Pelanggaran: '',
        Jenis_Pelanggaran: '',
        Pelanggaran_Point: '',
        Keterangan_Pelanggaran: '',
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const data = {
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
        this.props.CreatePelanggaran(data, authdata)
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    render() {
        const {
            Nama_Pelanggaran,
            Jenis_Pelanggaran,
            Pelanggaran_Point,
            Keterangan_Pelanggaran,
        } = this.state
        const JenisPelanggaranOption = ['Ringan', 'Sedang', 'Berat']
        return (
            <div>
                <h2 className='position-center'>-Create Pelanggaran Detail-</h2><br />
                <form onSubmit={this.Form_OnSubmit}>
                    <div>
                        <label>Nama Pelanggaran:</label><br />
                        <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama_Pelanggaran' value={Nama_Pelanggaran} placeholder='Masukkan nama pelanggaran' required /><br />
                        <label>Jenis Pelanggaran:</label><br />
                        <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Jenis_Pelanggaran' value={Jenis_Pelanggaran} required >
                            <option value="" disabled> -- select an option -- </option>
                            {JenisPelanggaranOption.map((listdata) =>
                                <option key={listdata} value={listdata}>{listdata}</option>
                            )}
                        </select>
                        <label>Pelanggaran Point:</label><br />
                        <input type='number' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Pelanggaran_Point' value={Pelanggaran_Point} placeholder='Masukkan jumlah point pengurang karna pelanggaran' required /><br />
                        <label>KeteranganPelanggaran:</label><br />
                        <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Keterangan_Pelanggaran' value={Keterangan_Pelanggaran} placeholder='Masukkan keterangan mengenai pelanggaran' /><br />
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
    point: state.Point,
    auth: state.Auth
})

export default connect(mapStateToProps, { CreatePelanggaran })(PelanggaranAdd)