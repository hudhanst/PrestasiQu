import React from 'react'

import { connect } from 'react-redux'

import { CreateBiodataasSiswa } from '../../../Store/Actions/Biodata.Actions'

class BiodataSiswaAdd extends React.Component {
    state = {
        NomerInduk: '',
        Nama: '',
        Agama: '',
        TempatLahir: '',
        TanggalLahir: '',
        Alamat: '',
        NomerTLP: '',
        Email: '',
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
        this.props.CreateBiodataasSiswa(data, authdata)
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
            InstansiPendidikanTerakhir,
        } = this.state
        const AgamaOption = ['Buddha', 'Hindu', 'Islam', 'Katolik', 'KongHuCu', 'Kristen', 'Lainnya']
        return (
            <div>
                <h2 className='position-center'>-Create Siswa Biodata-</h2><br />
                <form onSubmit={this.Form_OnSubmit}>
                    <label>Nomer Induk:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerInduk' value={NomerInduk} placeholder='Masukkan nomerinduk siswa' required /><br />
                    <label>Nama:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama' value={Nama} placeholder='Masukkan nama lengkap siswa' required /><br />
                    <label>Agama:</label><br />
                    <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Agama' value={Agama} placeholder='Pilih agama siswa'>
                        <option value="" disabled> -- select an option -- </option>
                        {AgamaOption.map((listdata) =>
                            <option key={listdata} value={listdata}>{listdata}</option>
                        )}
                    </select>
                    <label>Tempat Lahir:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TempatLahir' value={TempatLahir} placeholder='Masukkan tempat siswa lahir' required /><br />
                    <label>Tanggal Lahir:</label><br />
                    <input type='date' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TanggalLahir' value={TanggalLahir} placeholder='Masukkan tanggal lahir siswa' required /><br />
                    <label>Alamat:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Alamat' value={Alamat} placeholder='Masukkan tempat siswa tinggal' /><br />
                    <label>Nomer TLP:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerTLP' value={NomerTLP} placeholder='Masukkan nomer tlp siswa' /><br />
                    <label>Email:</label><br />
                    <input type='email' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Email' value={Email} placeholder='Masukkan alamat email siswa' /><br />
                    <label>Instansi Pendidikan Terakhir:</label><br />
                    <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='InstansiPendidikanTerakhir' value={InstansiPendidikanTerakhir} placeholder='Masukkan nama instansi pendidikan terakhir siswa' /><br />
                    <label>Profile picture:</label><br />
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

export default connect(mapStateToProps, { CreateBiodataasSiswa })(BiodataSiswaAdd)