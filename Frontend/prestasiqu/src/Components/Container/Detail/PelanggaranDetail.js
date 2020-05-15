import React from 'react'

import { connect } from 'react-redux'

import { LoadPelanggaranDetail } from '../../../Store/Actions/Point.Actions'

import DataNotFound from '../../Container/DataNotFound'
import Loading from '../Loading'

class PelanggaraDetail extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.point.Pelanggaran_ID !== prevProps.point.Pelanggaran_ID) {
            const { Pelanggaran_ID } = this.props.point
            if (Pelanggaran_ID !== null) {
                this.props.LoadPelanggaranDetail(Pelanggaran_ID)
            }
        }
    }
    render() {
        const { isPelanggaranLoading, Pelanggaran } = this.props.point
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
    point: state.Point,
})

export default connect(mapStateToProps, { LoadPelanggaranDetail })(PelanggaraDetail)