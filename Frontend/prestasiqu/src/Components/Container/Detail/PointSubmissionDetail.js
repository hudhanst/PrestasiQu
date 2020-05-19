import React from 'react'

import { connect } from 'react-redux'

import { LoadPointSubmissionDetail } from '../../../Store/Actions/Point.Actions'

import DataNotFound from '../../Container/DataNotFound'
import Loading from '../Loading'

class PointSubmissionDetail extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.point.Point_ID !== prevProps.point.Point_ID) {
            const { Point_ID } = this.props.point
            if (Point_ID !== null) {
                this.props.LoadPointSubmissionDetail(Point_ID)
            }
        }
    }
    render() {
        const { isPelanggaranLoading, Point } = this.props.point
        if (isPelanggaranLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {Point ? (
                        <div className="Biodata-section">
                            <div className="header">
                                <h4 className={`position-right font-weight-bold ${(Point.Status === 'Menunggu') ?
                                    'pointwarning' : (`${(Point.Status === 'Cancel') ?
                                        'pointwarning' : 'pointgood'
                                        }`
                                    )}`
                                }>
                                    {Point.Status}
                                </h4>
                                <h6 className="position-right">Tanggal Pengajuan:{Point.Tanggal_Pengajuan}</h6>
                                <h4 className="font-weight-bold">Detail:</h4>
                                <hr />
                            </div>
                            <div>
                                <label>Point_Submission_Number:</label><br />
                                <input type='text' className='Input-as-Info' name='id' readOnly value={Point.id ? Point.id : ""} /><br />
                                <label>Nomer_Induk_Pengaju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nomer_Induk_Pengaju' readOnly value={Point.Nomer_Induk_Pengaju ? Point.Nomer_Induk_Pengaju : ""} /><br />
                                <label>Nama_Pengaju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Pengaju' readOnly value={Point.Nama_Pengaju ? Point.Nama_Pengaju : ""} /><br />
                                <label>Nomer_Induk_Dituju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nomer_Induk_Dituju' readOnly value={Point.Nomer_Induk_Dituju ? Point.Nomer_Induk_Dituju : ""} /><br />
                                <label>Nama_Dituju:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Dituju' readOnly value={Point.Nama_Dituju ? Point.Nama_Dituju : ""} /><br />
                                <label>Point_Awal_Dituju:</label><br />
                                <input type='text' className='Input-as-Info' name='Point_Awal_Dituju' readOnly value={Point.Point_Awal_Dituju ? Point.Point_Awal_Dituju : ""} /><br />
                                <label>Nama_Pelanggaran:</label><br />
                                <input type='text' className='Input-as-Info' name='Nama_Pelanggaran' readOnly value={Point.Nama_Pelanggaran ? Point.Nama_Pelanggaran : ""} /><br />
                                <label>Jenis_Pelanggaran:</label><br />
                                <input type='text' className='Input-as-Info' name='Jenis_Pelanggaran' readOnly value={Point.Jenis_Pelanggaran ? Point.Jenis_Pelanggaran : ""} /><br />
                                <label>Point_Pengurang:</label><br />
                                <input type='text' className='Input-as-Info' name='Point_Pengurang' readOnly value={`-${Point.Point_Pengurang ? Point.Point_Pengurang : ""}`} /><br />
                                <label>Lampiran:</label><br />
                                {Point.Lampiran ? (
                                    <div>
                                        <img src={Point.Lampiran} className='lampiran-img' alt='lampiran point submission' /><br />
                                    </div>
                                ) : (
                                        <div>
                                            <h5 className="position-center">There is no Point Submission Lampiran</h5>
                                        </div>
                                    )}
                                {(Point.Status !== 'Menunggu') ? (
                                    <div>
                                        <label>Keterangan:</label><br />
                                        <input type='text' className='Input-as-Info' name='Keterangan' readOnly value={Point.Keterangan ? Point.Keterangan : ""} /><br />
                                        <label>Nomer_Induk_Assessor:</label><br />
                                        <input type='text' className='Input-as-Info' name='Nomer_Induk_Assessor' readOnly value={Point.Nomer_Induk_Assessor ? Point.Nomer_Induk_Assessor : ""} /><br />
                                        <label>Nama_Assessor:</label><br />
                                        <input type='text' className='Input-as-Info' name='Nama_Assessor' readOnly value={Point.Nama_Assessor ? Point.Nama_Assessor : ""} /><br />
                                        <label>Tanggal_Diterima:</label><br />
                                        <input type='text' className='Input-as-Info' name='Tanggal_Diterima' readOnly value={Point.Tanggal_Diterima ? Point.Tanggal_Diterima : ""} /><br />
                                    </div>
                                ) : null}
                                <label>Point_Akhir:</label><br />
                                <h4 className={`position-center point-akhir ${Point.Point_Akhir >= 250 ?
                                    'pointgood' : (`${Point.Point_Akhir >= 150 ?
                                        'pointwarning' : (`${Point.Point_Akhir >= 50 ?
                                            'pointdenger' : 'pointdead'}`
                                        )}`
                                    )}`
                                }>
                                    {Point.Point_Akhir ? Point.Point_Akhir : ""}
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
    point: state.Point,
})

export default connect(mapStateToProps, { LoadPointSubmissionDetail })(PointSubmissionDetail)