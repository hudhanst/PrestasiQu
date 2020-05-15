import React from 'react'

import { connect } from 'react-redux'

import { LoadInstansiDetail } from '../../../Store/Actions/Prestasi.Actions'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class InstansiDetail extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.prestasi.Instansi_ID !== prevProps.prestasi.Instansi_ID) {
            const { Instansi_ID } = this.props.prestasi
            if (Instansi_ID !== null) {
                this.props.LoadInstansiDetail(Instansi_ID)
            }
        }
    }
    render() {
        const { isPelanggaranLoading, Instansi } = this.props.prestasi
        if (isPelanggaranLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Instansi ? (
                        <div className='account-section'>
                            <h1 className='position-center'>Instansi</h1>
                            <label>ID:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Instansi ? Instansi.id : ""} /><br />
                            <label>Nama Instansi:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Instansi ? Instansi.Nama_Instansi : ""} /><br />
                            <label>Jenis Instansi:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Instansi ? Instansi.Jenis_Instansi : ""} /><br />
                            <label>Keterangan:</label><br />
                            <input type='text' className='Input-as-Info' name='account' readOnly value={Instansi ? Instansi.Keterangan_Instansi : ""} /><br />
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
    prestasi: state.Prestasi,
})

export default connect(mapStateToProps, { LoadInstansiDetail })(InstansiDetail)