import React from 'react'

import { connect } from 'react-redux'

import { LoadPelanggaranDetail } from '../../../Store/Actions/Pelanggaran.Actions'

import DataNotFound from '../../Container/DataNotFound'
import Loading from '../Loading'

class PelanggaraDetail extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.pelanggaran.Pelanggaran_ID !== prevProps.pelanggaran.Pelanggaran_ID) {
            const { Pelanggaran_ID } = this.props.pelanggaran
            if (Pelanggaran_ID !== null) {
                this.props.LoadPelanggaranDetail(Pelanggaran_ID)
            }
        }
    }
    render() {
        const { isPelanggaranLoading, Pelanggaran } = this.props.pelanggaran
        if (isPelanggaranLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Pelanggaran ? (
                        <div className='account-section'>
                            <h1 className='position-center'>Pelanggaran</h1>
                            <label>ID:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Pelanggaran ? Pelanggaran.id : ""} /><br />
                            <label>Nama Pelanggaran:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Pelanggaran ? Pelanggaran.Nama_Pelanggaran : ""} /><br />
                            <label>Jenis Pelanggaran:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Pelanggaran ? Pelanggaran.Jenis_Pelanggaran : ""} /><br />
                            <label>Point Pelanggaran:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Pelanggaran ? Pelanggaran.Pelanggaran_Point : ""} /><br />
                            <label>Keterangan:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Pelanggaran ? Pelanggaran.Keterangan_Pelanggaran : ""} /><br />
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
    pelanggaran: state.Pelanggaran,
})

export default connect(mapStateToProps, { LoadPelanggaranDetail })(PelanggaraDetail)