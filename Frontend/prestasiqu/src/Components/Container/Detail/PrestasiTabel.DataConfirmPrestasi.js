import React from 'react'

import { connect } from 'react-redux'

import { LoadListofConfirmPrestasi, Button_PrestasiDetailView } from '../../../Store/Actions/Prestasi.Actions'
import { Short_Column_INT, Short_Column_STR } from '../Shorting'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class PrestasiTabelDataConfirmPrestasi extends React.Component {
    componentDidMount() {
        this.props.LoadListofConfirmPrestasi()
    }
    ButtonPrestasiDetailView(ID) {
        this.props.Button_PrestasiDetailView(ID)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabeldataconfirmprestasi', ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabeldataconfirmprestasi', ColumnNumb)
    }
    render() {
        const { isPrestasiLoading, Prestasi_PrestasiConfirm } = this.props.prestasi
        if (isPrestasiLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {(!Prestasi_PrestasiConfirm || Prestasi_PrestasiConfirm.length <= 0) ? <DataNotFound /> :
                        <div className="Biodata-section">
                            <div className='table-responsive'>
                                <table className="table table-striped table-hover table-custom position-center" id='tabeldataconfirmprestasi'>
                                    <thead>
                                        <tr>
                                            <th scope="col" onClick={() => this.ButtonShortINT(0)}>Index</th>
                                            <th scope="col" onClick={() => this.ButtonShortINT(1)}>No Point Submision</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Nama Pengaju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(3)}>Nomer Induk Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(4)}>Nama Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(5)}>Nama Prestasi</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(6)}>Tingkatan Prestasi</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(7)}>Tanggal Diterima</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(8)}>Status</th>
                                            <th scope="col" >View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Prestasi_PrestasiConfirm.map((listdata, index) => (
                                            <tr key={listdata.id}>
                                                <td>{index + 1}</td>
                                                <td>{listdata.id}</td>
                                                <td>{listdata.Nama_Pengaju}</td>
                                                <td>{listdata.Nomer_Induk_Dituju}</td>
                                                <td>{listdata.Nama_Dituju}</td>
                                                <td>{listdata.Nama_Prestasi}</td>
                                                <td>{listdata.Tingkatan_Prestasi}</td>
                                                <td>{listdata.Tanggal_Diterima}</td>
                                                <td>{listdata.Status}</td>
                                                <td>
                                                    <button onClick={() => this.ButtonPrestasiDetailView(listdata.id)} data-toggle="modal" data-target="#ViewPrestasiSubmissionDetailModal" className='btn btn-table-colorize-green'>View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    prestasi: state.Prestasi,
    auth: state.Auth,
})

export default connect(mapStateToProps, { LoadListofConfirmPrestasi, Button_PrestasiDetailView })(PrestasiTabelDataConfirmPrestasi)
