import React from 'react'

import { connect } from 'react-redux'

import { LoadListofPelanggaran, PointSubmit } from '../../../Store/Actions/Point.Actions'

import Loading from '../Loading'
import DataNotFound from '../DataNotFound'

class PointSubmission extends React.Component {
    state = {
        Nama_Pelanggaran: '',
        Keterangan: '',
        Lampiran: null,
    }
    componentDidMount() {
        this.props.LoadListofPelanggaran()
    }
    Form_OnChange = E => {
        this.setState({ [E.target.name]: E.target.value })
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
    }
    Form_OnSubmit = E => {
        E.preventDefault()
        const {Biodata_ID} = this.props.biodata
        const { user } = this.props.auth
        const pointdata = {
            Nama_Pelanggaran : this.state.Nama_Pelanggaran,
            Keterangan: this.state.Keterangan,
            Lampiran: this.state.Lampiran,
        }
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        this.props.PointSubmit(user.nomerinduk, Biodata_ID, pointdata, authdata)
    }
    render() {
        const { isPelanggaranLoading, Data_Pelanggaran } = this.props.point
        const { isBiodataLoading, Biodata_ID } = this.props.biodata
        const {
            Nama_Pelanggaran,
            Keterangan,
            // Lampiran,
        } = this.state
        if ((isPelanggaranLoading === true) || (isBiodataLoading === true)) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    <h1>Point Submission Detail</h1>
                    {(Data_Pelanggaran && Biodata_ID) ? (
                        <form onSubmit={this.Form_OnSubmit}>
                            <div>
                                <label>Nama Pelanggaran:</label><br />
                                <select className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Nama_Pelanggaran' value={Nama_Pelanggaran} required>
                                    <option value="" disabled> -- select an option -- </option>
                                    {Data_Pelanggaran.map((listdata) =>
                                        <option key={listdata.id} value={listdata.Nama_Pelanggaran}>{listdata.Jenis_Pelanggaran}, {listdata.Nama_Pelanggaran}, -{listdata.Pelanggaran_Point}</option>
                                    )}
                                </select>
                                <label>Keterangan:</label><br />
                                <input type='text' className='Input-as-Info Input-as-Update' onChange={this.Form_OnChange} name='Keterangan' value={Keterangan} /><br />
                                <label>Lampiran:</label><br />
                                <input type='file' accept='image/*' onChange={this.File_OnChange} name='Lampiran' /><br />
                                <div className="modal-footer"></div>
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
    biodata: state.Biodata,
    point: state.Point,
    auth: state.Auth
})

export default connect(mapStateToProps, { LoadListofPelanggaran, PointSubmit })(PointSubmission)