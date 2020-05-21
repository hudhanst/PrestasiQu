import React from 'react'

import { connect } from 'react-redux'

import { CreateBiodataasStaff } from '../../../Store/Actions/Biodata.Actions'

class BiodataGuruAdd extends React.Component {
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
        this.props.CreateBiodataasStaff(data, authdata)
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
        const AgamaOption = ['Buddha', 'Hindu', 'Islam', 'Katolik', 'KongHuCu', 'Kristen', 'Lainnya']
        const PendidikanTerakhirOption = ['SD', 'SMP', 'SMA', 'S1', 'S2', 'S3']
        return (
            <div>
                <h2 className='position-center'>-Create Guru Biodata-</h2><br />
                <form onSubmit={this.Form_OnSubmit}>
                    <label>NomerInduk:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerInduk' value={NomerInduk} placeholder='Masukkan nomerinduk staff' required /><br />
                    <label>Nama:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama' value={Nama} placeholder='Masukkan nama lengkap staff' required /><br />
                    <label>Agama:</label><br />
                    <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Agama' value={Agama} >
                        <option value="" disabled> -- select an option -- </option>
                        {AgamaOption.map((listdata) =>
                            <option key={listdata} value={listdata}>{listdata}</option>
                        )}
                    </select>
                    <label>TempatLahir:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TempatLahir' value={TempatLahir} placeholder='Masukkan tempat staff lahir' required /><br />
                    <label>TanggalLahir:</label><br />
                    <input type='date' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TanggalLahir' value={TanggalLahir} placeholder='Masukkan tanggal lahir staff' required /><br />
                    <label>Alamat:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Alamat' value={Alamat} placeholder='Masukkan tempat staff tinggal' /><br />
                    <label>NomerTLP:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerTLP' value={NomerTLP} placeholder='Masukkan nomer tlp staff' /><br />
                    <label>Email:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Email' value={Email} placeholder='Masukkan alamat email staff' /><br />
                    <label>PendidikanTerakhir:</label><br />
                    <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='PendidikanTerakhir' value={PendidikanTerakhir}>
                        <option value="" disabled> -- select an option -- </option>
                        {PendidikanTerakhirOption.map((listdata) =>
                            <option key={listdata} value={listdata}>{listdata}</option>
                        )}
                    </select>
                    <label>InstansiPendidikanTerakhir:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='InstansiPendidikanTerakhir' value={InstansiPendidikanTerakhir} placeholder='Masukkan nama instansi pendidikan terakhir staff' /><br />
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

export default connect(mapStateToProps, { CreateBiodataasStaff })(BiodataGuruAdd)