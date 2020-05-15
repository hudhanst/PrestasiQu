import React from 'react'

import { connect } from 'react-redux'

import { LoadListofPelanggaran, Button_Pelanggaran_DetailView, Button_UpdatePelanggaran, } from '../../../Store/Actions/Point.Actions'
import { Short_Column_INT, Short_Column_STR } from '../Shorting'
import DataNotFound from '../DataNotFound'

class PelanggaranTabelDataPelanggaran extends React.Component {
    componentDidMount() {
        this.props.LoadListofPelanggaran()
    }
    ButtonDetailView(PelanggaranID) {
        this.props.Button_Pelanggaran_DetailView(PelanggaranID)
    }
    ButtonUpdateBiodata(PelanggaranID) {
        this.props.Button_UpdatePelanggaran(PelanggaranID)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabeldatapelanggaran', ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabeldatapelanggaran', ColumnNumb)
    }
    render() {
        const { Data_Pelanggaran } = this.props.point
        const { user } = this.props.auth
        return (
            <div>
                {(!Data_Pelanggaran || Data_Pelanggaran.length <= 0) ? <DataNotFound /> :
                    <div className="Biodata-section">
                        <div className='table-responsive'>
                            <table className="table table-striped table-hover table-custom position-center" id='tabeldatapelanggaran'>
                                <thead>
                                    <tr>
                                        <th scope="col" onClick={() => this.ButtonShortINT(0)}><span className="glyphicon glyphicon-sort-by-alphabet"></span>Index</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(1)}>Nama Pelanggaran</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Jenis Pelanggaran</th>
                                        <th scope="col" onClick={() => this.ButtonShortINT(3)}>Point Pelanggaran</th>
                                        <th scope="col">View</th>
                                        {(user.admin || user.superuser) ? (
                                            <th scope="col">Update</th>
                                        ) : null}
                                        {(user.admin || user.superuser) ? (
                                            <th scope="col">Delete</th>
                                        ) : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Data_Pelanggaran.map((listdata, index) => (
                                        <tr key={listdata.id}>
                                            <td>{index + 1}</td>
                                            <td>{listdata.Nama_Pelanggaran}</td>
                                            <td>{listdata.Jenis_Pelanggaran}</td>
                                            <td>{listdata.Pelanggaran_Point}</td>
                                            <td>
                                                <button onClick={() => this.ButtonDetailView(listdata.id)} data-toggle="modal" data-target="#PelanggaranDetailViewModal" className='btn btn-table-colorize-green'>View</button>
                                            </td>
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonUpdateBiodata(listdata.id)} data-toggle="modal" data-target="#PelanggaranUpdateModal" className='btn btn-table-colorize-green'>Update</button>
                                                </td>
                                            ) : null}
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonDetailView(listdata.id)} data-toggle="modal" data-target="#PelanggaranDeleteModal" className='btn btn-table-colorize-green'>Delete</button>
                                                </td>
                                            ) : null}
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

const mapStateToProps = state => ({
    // biodata: state.Biodata,
    point: state.Point,
    auth: state.Auth,
})

export default connect(mapStateToProps, { LoadListofPelanggaran, Button_Pelanggaran_DetailView, Button_UpdatePelanggaran})(PelanggaranTabelDataPelanggaran)