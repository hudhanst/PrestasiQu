import React from 'react'

import { connect } from 'react-redux'

import { LoadBiodataUpdate, UpdateBiodata } from '../../../Store/Actions/Biodata.Actions'

import Loading from '../Loading'
import DataNotFound from '../DataNotFound'

class BiodataUpdateModal extends React.Component {
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
        Point: '',
        Status: '',
        Profilepicture: null,
    }

    componentDidUpdate(prevProps) {
        if (this.props.biodata.Update_Biodata_ID !== prevProps.biodata.Update_Biodata_ID) {
            const { Update_Biodata_ID } = this.props.biodata
            if (Update_Biodata_ID !== null) {
                this.props.LoadBiodataUpdate(Update_Biodata_ID)
            }
        }
        if (this.props.biodata.Update_Biodata !== prevProps.biodata.Update_Biodata) {
            const { Update_Biodata } = this.props.biodata
            if (Update_Biodata) {
                this.setState({
                    id: Update_Biodata.id,
                    NomerInduk: Update_Biodata.NomerInduk,
                    Nama: Update_Biodata.Nama,
                    Agama: Update_Biodata.Agama,
                    TempatLahir: Update_Biodata.TempatLahir,
                    TanggalLahir: Update_Biodata.TanggalLahir,
                    Alamat: Update_Biodata.Alamat,
                    NomerTLP: Update_Biodata.NomerTLP,
                    Email: Update_Biodata.Email,
                    PendidikanTerakhir: Update_Biodata.PendidikanTerakhir,
                    InstansiPendidikanTerakhir: Update_Biodata.InstansiPendidikanTerakhir,
                    Point: Update_Biodata.Point,
                    Status: Update_Biodata.Status,
                })
            }
        }
    }

    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
    }
    Form_OnSubmit = E => {
        const updatedata = {
            id: this.state.id,
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
            Point: this.state.Point,
            Status: this.state.Status,
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

        this.props.UpdateBiodata(updatedata, authdata)
    }
    render() {
        const { isBiodataLoading } = this.props.biodata
        const { user } = this.props.auth
        // const {name} = (this.state? this.state : '') //this is shorter?
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
            Point,
            Status,
        } = this.state
        const StatusSiswaOption = ['Siswa Aktif', 'Siswa Lulus', 'Siswa Diberhentikan']
        const StatusGuruOption = ['Guru Aktif', 'Guru Pensiun', 'Guru Diberhentikan']
        const StatusStaffOption = ['Staf Aktif', 'Staf Pensiun', 'Staf Diberhentikan']
        const AgamaOption = ['Buddha', 'Hindu', 'Islam', 'Katolik', 'KongHuCu', 'Kristen', 'Lainnya']
        const PendidikanTerakhirOption = ['SD', 'SMP', 'SMA', 'S1', 'S2', 'S3']
        if (isBiodataLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {NomerInduk ? (
                        <form onSubmit={this.Form_OnSubmit}>
                            <label>Nomer Induk:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' readOnly name='NomerInduk' value={NomerInduk} /><br />
                            <label>Nama:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama' value={Nama} placeholder='Masukkan nama lengkap anda' /><br />
                            <label>Agama:</label><br />
                            <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Agama' value={Agama} >
                                <option value="" disabled> -- select an option -- </option>
                                {AgamaOption.map((listdata) =>
                                    <option key={listdata} value={listdata}>{listdata}</option>
                                )}
                            </select>
                            <label>Tempat Lahir:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TempatLahir' value={TempatLahir} placeholder='Masukkan tempat anda lahir' /><br />
                            <label>Tanggal Lahir:</label><br />
                            <input type='date' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TanggalLahir' value={TanggalLahir} placeholder='Masukkan tanggal lahir anda' /> <br />
                            <label>Alamat:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Alamat' value={Alamat} placeholder='Masukkan tempat anda tinggal' /><br />
                            <label>Nomer TLP:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerTLP' value={NomerTLP} placeholder='Masukkan nomer tlp anda' /><br />
                            <label>Email:</label><br />
                            <input type='email' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Email' value={Email} placeholder='Masukkan alamat email anda' /><br />
                            <label>Pendidikan Terakhir:</label><br />
                            {user ? (
                                <div>
                                    {(user.siswa && (!user.staff || !user.admin)) ? (
                                        <div>
                                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} readOnly name='PendidikanTerakhir' value={PendidikanTerakhir} /><br />
                                        </div>
                                    ) : (
                                            <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='PendidikanTerakhir' value={PendidikanTerakhir} placeholder='Pilih pendidikan terakhir anda' >
                                                <option value="" disabled> -- select an option -- </option>
                                                {PendidikanTerakhirOption.map((listdata) =>
                                                    <option key={listdata} value={listdata}>{listdata}</option>
                                                )}

                                            </select>
                                        )}
                                </div>
                            ) : null}
                            <label>Instansi Pendidikan Terakhir:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='InstansiPendidikanTerakhir' value={InstansiPendidikanTerakhir} placeholder='Masukkan nama instansi pendidikan terakhir anda' /><br />
                            {user ? (
                                <div>
                                    {(user.admin || user.superuser) ? (
                                        <div>
                                            <label>Point:</label><br />
                                            <input type='text' className='Input-as-Info Input-as-Update' readOnly name='Point' value={Point} /><br />
                                            <label>Status:</label><br />
                                            <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Status' value={Status} placeholder='Pilih status untuk user ini'>
                                                <option value="" disabled> -- select an option -- </option>
                                                <option value="" disabled>siswa option</option>
                                                {StatusSiswaOption.map((listdata) =>
                                                    <option key={listdata} value={listdata}>{listdata}</option>
                                                )}
                                                <option value="" disabled>guru option</option>
                                                {StatusGuruOption.map((listdata) =>
                                                    <option key={listdata} value={listdata}>{listdata}</option>
                                                )}
                                                <option value="" disabled>staff option</option>
                                                {StatusStaffOption.map((listdata) =>
                                                    <option key={listdata} value={listdata}>{listdata}</option>
                                                )}
                                            </select>
                                        </div>
                                    ) : (
                                            null
                                        )}
                                </div>
                            ) : (
                                    null
                                )}
                            <label>Photo Profile:</label><br />
                            <input type='file' accept='image/*' onChange={this.File_OnChange} name='Profilepicture' /><br />
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
    biodata: state.Biodata,
    auth: state.Auth
})

export default connect(mapStateToProps, { LoadBiodataUpdate, UpdateBiodata })(BiodataUpdateModal)