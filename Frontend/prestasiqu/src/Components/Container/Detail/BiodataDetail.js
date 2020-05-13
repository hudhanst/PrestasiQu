import React from 'react'

import { connect } from 'react-redux'

import { LoadBiodata } from '../../../Store/Actions/Biodata.Actions'

import DataNotFound from '../../Container/DataNotFound'
import Loading from '../Loading'

class BiodataDetail extends React.Component {
    componentDidUpdate(prevProps){
        if (this.props.biodata.Biodata_ID !== prevProps.biodata.Biodata_ID) {
            const { Biodata_ID } = this.props.biodata
            if (Biodata_ID !== null) {
                this.props.LoadBiodata(Biodata_ID)
            }
        }
    }
    render() {
        const { isBiodataLoading, Biodata } = this.props.biodata
        if (isBiodataLoading === true){
            return(
                <Loading />
            )
        }else{
        return (
            <div>
                {Biodata ? (
                    <div className="Biodata-section">
                        <img src={Biodata ? Biodata.Profilepicture : null} className='biodata-img' alt='foto profile biodata' /><br />
                        <h1 className='position-center'>Biodata</h1>
                        <label>Nomer Induk:</label><br />
                        <input type='text' className='Input-as-Info' name='NomerInduk' readOnly value={Biodata ? Biodata.NomerInduk : ""} /><br />
                        <label>Nama:</label><br />
                        <input type='text' className='Input-as-Info' name='Nama' readOnly value={Biodata ? Biodata.Nama : ""} /><br />
                        <label>Agama:</label><br />
                        <input type='text' className='Input-as-Info' name='Agama' readOnly value={Biodata ? Biodata.Agama : ""} /><br />
                        <label>Tempat Lahir:</label><br />
                        <input type='text' className='Input-as-Info' name='TempatLahir' readOnly value={Biodata ? Biodata.TempatLahir : ""} /><br />
                        <label>Tanggal Lahir:</label><br />
                        <input type='text' className='Input-as-Info' name='TanggalLahir' readOnly value={Biodata ? Biodata.TanggalLahir : ""} /><br />
                        <label>Alamat:</label><br />
                        <input type='text' className='Input-as-Info' name='Alamat' readOnly value={Biodata ? Biodata.Alamat : ""} /><br />
                        <label>Nomer TLP:</label><br />
                        <input type='text' className='Input-as-Info' name='NomerTLP' readOnly value={Biodata ? Biodata.NomerTLP : ""} /><br />
                        <label>Email:</label><br />
                        <input type='text' className='Input-as-Info' name='Email' readOnly value={Biodata ? Biodata.Email : ""} /><br />
                        <label>Pendidikan Terakhir:</label><br />
                        <input type='text' className='Input-as-Info' name='PendidikanTerakhir' readOnly value={Biodata ? Biodata.PendidikanTerakhir : ""} /><br />
                        <label>Instansi Pendidikan Terakhir:</label><br />
                        <input type='text' className='Input-as-Info' name='InstansiPendidikanTerakhir' readOnly value={Biodata ? Biodata.InstansiPendidikanTerakhir : ""} /><br />
                        <label>Point:</label><br />
                        <input type='text' className='Input-as-Info' name='Point' readOnly value={Biodata ? Biodata.Point : ""} /><br />
                        <label>Status:</label><br />
                        <input type='text' className='Input-as-Info' name='Status' readOnly value={Biodata ? Biodata.Status : ""} /><br />
                    </div>
                )
                    : <DataNotFound />
                }
            </div>
        )
            }
    }
}

const mapStateToProps = state => ({
    biodata: state.Biodata,
    // auth: state.Auth
})

export default connect(mapStateToProps, { LoadBiodata })(BiodataDetail)