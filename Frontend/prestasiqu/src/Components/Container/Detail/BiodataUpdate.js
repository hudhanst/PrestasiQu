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
        // console.log('name', E.target.name)
        // console.log('value', E.target.value)
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
        // console.log('filename', E.target.name)
        // console.log('filevalue', E.target.value)
    }
    Form_OnSubmit = E => {
        // console.log('panggil')
        // E.preventDefault()
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
        const {isBiodataLoading} = this.props.biodata
//         const { Update_Biodata } = this.props.biodata
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
            // Profilepicture,
        } = this.state
        // console.log('state', this.state)
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
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} readOnly name='NomerInduk' value={NomerInduk} /><br />
                            <label>Nama:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama' value={Nama} /><br />
                            <label>Agama:</label><br />
                            {/* <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Agama' value={Agama} /><br /> */}
                            <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Agama' value={Agama}>
                                <option value="Buddha">Buddha</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Islam">Islam</option>
                                <option value="Katolik">Katolik</option>
                                <option value="KongHuCu">KongHuCu</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                            <label>Tempat Lahir:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TempatLahir' value={TempatLahir} /><br />
                            <label>Tanggal Lahir:</label><br />
                            <input type='date' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='TanggalLahir' value={TanggalLahir} /><br />
                            <label>Alamat:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Alamat' value={Alamat} /><br />
                            <label>Nomer TLP:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='NomerTLP' value={NomerTLP} /><br />
                            <label>Email:</label><br />
                            <input type='email' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Email' value={Email} /><br />
                            <label>Pendidikan Terakhir:</label><br />
                            {user ? (
                                <div>
                                    {(user.siswa && (!user.staff || !user.admin)) ? (
                                        <div>
                                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} readOnly name='PendidikanTerakhir' value={PendidikanTerakhir} /><br />
                                        </div>
                                    ) : (
                                            // <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} disabled='disabled' name='PendidikanTerakhir' value={PendidikanTerakhir}>
                                            <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='PendidikanTerakhir' value={PendidikanTerakhir}>
                                                <option value="SD" >SD</option>
                                                <option value="SMP">SMP</option>
                                                <option value="SMA">SMA</option>
                                                <option value="S1" >S1</option>
                                                <option value="S2">S2</option>
                                                <option value="S3">S3</option>
                                            </select>
                                        )}
                                </div>
                            ) : null}

                            <label>Instansi Pendidikan Terakhir:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='InstansiPendidikanTerakhir' value={InstansiPendidikanTerakhir} /><br />
                            <label>Point:</label><br />
                            <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} readOnly name='Point' value={Point} /><br />
                            <label>Status:</label><br />
                            {user ? (
                                <div>
                                    {(user.admin || user.superuser) ? (
                                        <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Status' value={Status}>
                                            <option value="Guru Aktif">Guru Aktif</option>
                                            <option value="Guru Pensiun">Guru Pensiun</option>
                                            <option value="Guru Diberhentikan">Guru Diberhentikan</option>
                                            <option value="Staf Aktif">Staf Aktif</option>
                                            <option value="Staf Pensiun">Staf Pensiun</option>
                                            <option value="Staf Diberhentikan">Staf Diberhentikan</option>
                                            <option value="Siswa Aktif">Siswa Aktif</option>
                                            <option value="Siswa Lulus">Siswa Lulus</option>
                                            <option value="Siswa Diberhentikan">Siswa Diberhentikan</option>
                                        </select>
                                    ) : (
                                            <div>
                                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} readOnly name='Status' value={Status} /><br />
                                            </div>
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