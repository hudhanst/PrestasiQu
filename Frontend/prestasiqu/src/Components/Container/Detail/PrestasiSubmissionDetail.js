import React from 'react'

import { connect } from 'react-redux'

import { LoadPrestasiSubmissionDetail } from '../../../Store/Actions/Prestasi.Actions'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class PrestasiSubmissionDetail extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.prestasi.Prestasi_ID !== prevProps.prestasi.Prestasi_ID) {
            const { Prestasi_ID } = this.props.prestasi
            if (Prestasi_ID !== null) {
                this.props.LoadPrestasiSubmissionDetail(Prestasi_ID)
            }
        }
    }
    render() {
        const { isPrestasiLoading, Prestasi } = this.props.prestasi
        if (isPrestasiLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Prestasi ? (
                        <div className="Biodata-section">
                            <div className="header">
                                <h4 className={`position-right font-weight-bold ${(Prestasi.Status === 'Menunggu') ?
                                    'pointwarning' : (`${(Prestasi.Status === 'Cancel') ?
                                        'pointwarning' : 'pointgood'
                                        }`
                                    )}`
                                }>
                                    {Prestasi.Status}
                                </h4>
                                <h6 className="position-right">Tanggal Pengajuan:{Prestasi.Tanggal_Pengajuan}</h6>
                                <h4 className="font-weight-bold">Detail:</h4>
                                <hr />
                            </div>
                            <div>
                                <label>Point Submission Number:</label><br />
                                <input type='text' className='Input-as-Info' name='id' readOnly value={Prestasi.id ? Prestasi.id : ""} /><br />
                                <label>Nomer Induk Pengaju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nomer_Induk_Pengaju' readOnly value={Prestasi.Nomer_Induk_Pengaju ? Prestasi.Nomer_Induk_Pengaju : ""} /><br />
                                <label>Nama Pengaju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Pengaju' readOnly value={Prestasi.Nama_Pengaju ? Prestasi.Nama_Pengaju : ""} /><br />
                                <label>Nomer Induk Dituju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nomer_Induk_Dituju' readOnly value={Prestasi.Nomer_Induk_Dituju ? Prestasi.Nomer_Induk_Dituju : ""} /><br />
                                <label>Nama Dituju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Dituju' readOnly value={Prestasi.Nama_Dituju ? Prestasi.Nama_Dituju : ""} /><br />
                                <label>Point Awal Dituju:</label><br />
                                <input type='text' className='Input-as-Info' name='Point_Awal_Dituju' readOnly value={Prestasi.Point_Awal_Dituju ? Prestasi.Point_Awal_Dituju : ""} /><br />
                                <label>Nama Prestasi:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Prestasi' readOnly value={Prestasi.Nama_Prestasi ? Prestasi.Nama_Prestasi : ""} /><br />
                                <label>No Sertifikat:</label><br />
                                <input type='text' className='Input-as-Info' name='No_Sertifikat' readOnly value={Prestasi.No_Sertifikat ? Prestasi.No_Sertifikat : ""} /><br />
                                <label>Katagori Prestasi:</label><br />
                                <input type='text' className='Input-as-Info' name='Katagori_Prestasi' readOnly value={Prestasi.Katagori_Prestasi ? Prestasi.Katagori_Prestasi : ""} /><br />
                                <label>Tingkatan Prestasi:</label><br />
                                <input type='text' className='Input-as-Info' name='Tingkatan_Prestasi' readOnly value={Prestasi.Tingkatan_Prestasi ? Prestasi.Tingkatan_Prestasi : ""} /><br />
                                <label>Prestasi Point:</label><br />
                                <input type='text' className='Input-as-Info' name='Prestasi_Point' readOnly value={`+${Prestasi.Prestasi_Point ? Prestasi.Prestasi_Point : ""}`} /><br />
                                <label>Nama Instansi:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Instansi' readOnly value={Prestasi.Nama_Instansi ? Prestasi.Nama_Instansi : ""} /><br />
                                <label>Keterangan:</label><br />
                                <input type='text' className='Input-as-Info' name='Keterangan' readOnly value={Prestasi.Keterangan ? Prestasi.Keterangan : ""} /><br />
                                <label>Lampiran:</label><br />
                                {Prestasi.Lampiran ? (
                                    <div>
                                        <img src={Prestasi.Lampiran} className='lampiran-img' alt='lampiran point submission' /><br />
                                    </div>
                                ) : (
                                        <div>
                                            <h5 className="position-center">There is no Point Submission Lampiran</h5>
                                        </div>
                                    )}
                                {(Prestasi.Status !== 'Menunggu') ? (
                                    <div>
                                        <label>Nomer_Induk_Assessor:</label><br />
                                        <input type='text' className='Input-as-Info' name='Nomer_Induk_Assessor' readOnly value={Prestasi.Nomer_Induk_Assessor ? Prestasi.Nomer_Induk_Assessor : ""} /><br />
                                        <label>Nama_Assessor:</label><br />
                                        <input type='text' className='Input-as-Info' name='Nama_Assessor' readOnly value={Prestasi.Nama_Assessor ? Prestasi.Nama_Assessor : ""} /><br />
                                        <label>Tanggal_Diterima:</label><br />
                                        <input type='text' className='Input-as-Info' name='Tanggal_Diterima' readOnly value={Prestasi.Tanggal_Diterima ? Prestasi.Tanggal_Diterima : ""} /><br />
                                    </div>
                                ) : null}
                                <label>Point_Akhir:</label><br />
                                <h4 className={`position-center point-akhir ${Prestasi.Point_Akhir >= 250 ?
                                    'pointgood' : (`${Prestasi.Point_Akhir >= 150 ?
                                        'pointwarning' : (`${Prestasi.Point_Akhir >= 50 ?
                                            'pointdenger' : 'pointdead'}`
                                        )}`
                                    )}`
                                }>
                                    {Prestasi.Point_Akhir ? Prestasi.Point_Akhir : ""}
                                </h4>
                            </div>
                            <div>
                            </div>
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

export default connect(mapStateToProps, { LoadPrestasiSubmissionDetail })(PrestasiSubmissionDetail)