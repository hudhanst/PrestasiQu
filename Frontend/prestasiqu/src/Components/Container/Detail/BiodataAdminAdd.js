import React from 'react'

import { connect } from 'react-redux'

import { CreateBiodataasAdmin } from '../../../Store/Actions/Biodata.Actions'

class BiodataAdminAdd extends React.Component {
    state = {
        NomerInduk: '',
        Nama: '',
        Agama: '',
        TempatLahir: '',
        TanggalLahir: '',
        Alamat: '',
        NomerTLP: '',
        Email: '',
        PendidikanTerakhir: '',
        InstansiPendidikanTerakhir: '',
        Profilepicture: null,
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const data = {
            NomerInduk: this.state.NomerInduk,
            Nama: this.state.Nama,
            Agama: this.state.Agama,
            TempatLahir: this.state.TempatLahir,
            TanggalLahir: this.state.TanggalLahir,
            Alamat: this.state.Alamat,
            NomerTLP: this.state.NomerTLP,
            Email: this.state.Email,
            PendidikanTerakhir: this.state.PendidikanTerakhir,
            InstansiPendidikanTerakhir: this.state.InstansiPendidikanTerakhir,
            Profilepicture: this.state.Profilepicture,
        }
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        this.props.CreateBiodataasAdmin(data, authdata)
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
    }
    render() {
        const {
            NomerInduk,
            Nama,
            Agama,
            TempatLahir,
            TanggalLahir,
            Alamat,
            NomerTLP,
            Email,
            PendidikanTerakhir,
            InstansiPendidikanTerakhir,
            // Profilepicture,
        } = this.state
        return (
            <div>
                <h2 className='position-center'>-Create Admin Biodata-</h2><br />
                <form onSubmit={this.Form_OnSubmit}>
                    <label>NomerInduk:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerInduk' value={NomerInduk} required /><br />
                    <label>Nama:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama' value={Nama} /><br required />
                    <label>Agama:</label><br />
                    <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Agama' value={Agama}>
                        <option value="" disabled> -- select an option -- </option>
                        <option value="Buddha">Buddha</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Islam">Islam</option>
                        <option value="Katolik">Katolik</option>
                        <option value="KongHuCu">KongHuCu</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                    <label>TempatLahir:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TempatLahir' value={TempatLahir} required /><br />
                    <label>TanggalLahir:</label><br />
                    <input type='date' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TanggalLahir' value={TanggalLahir} required /><br />
                    <label>Alamat:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Alamat' value={Alamat} /><br />
                    <label>NomerTLP:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerTLP' value={NomerTLP} /><br />
                    <label>Email:</label><br />
                    <input type='email' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Email' value={Email} /><br />
                    <label>PendidikanTerakhir:</label><br />
                    <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='PendidikanTerakhir' value={PendidikanTerakhir}>
                        <option value="" disabled> -- select an option -- </option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                    </select>
                    <label>InstansiPendidikanTerakhir:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='InstansiPendidikanTerakhir' value={InstansiPendidikanTerakhir} /><br />
                    <label>Profilepicture:</label><br />
                    <input type='file' accept='image/*' onChange={this.File_OnChange} name='Profilepicture' /><br />

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-lg btn-block btn-colorize-green">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    biodata: state.Biodata,
    auth: state.Auth
})

export default connect(mapStateToProps, { CreateBiodataasAdmin })(BiodataAdminAdd)