import React from 'react'

import { connect } from 'react-redux'

import { LoadListofInstansi, Button_Instansi_DetailView, Button_UpdateInstansi } from '../../../Store/Actions/Prestasi.Actions'
import { Short_Column_INT, Short_Column_STR } from '../Shorting'
import DataNotFound from '../DataNotFound'

class InstansiTableDataInstansi extends React.Component {
    componentDidMount() {
        this.props.LoadListofInstansi()
    }
    ButtonDetailView(InstansiID) {
        this.props.Button_Instansi_DetailView(InstansiID)
    }
    ButtonUpdateBiodata(InstansiID) {
        this.props.Button_UpdateInstansi(InstansiID)
    }
    ButtonShortINT(ColumnNumb) {
        Short_Column_INT('tabeldatainstansi', ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb) {
        Short_Column_STR('tabeldatainstansi', ColumnNumb)
    }
    render() {
        const { Data_Instansi } = this.props.prestasi
        const { user } = this.props.auth
        return (
            <div>
                {(!Data_Instansi || Data_Instansi.length <= 0) ? <DataNotFound /> :
                    <div className="Biodata-section">
                        <div className='table-responsive'>
                            <table className="table table-striped table-hover table-custom position-center" id='tabeldatainstansi'>
                                <thead>
                                    <tr>
                                        <th scope="col" onClick={() => this.ButtonShortINT(0)}><span className="glyphicon glyphicon-sort-by-alphabet"></span>Index</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(1)}>Nama Instansi</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Jenis Instansi</th>
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
                                    {Data_Instansi.map((listdata, index) => (
                                        <tr key={listdata.id}>
                                            <td>{index + 1}</td>
                                            <td>{listdata.Nama_Instansi}</td>
                                            <td>{listdata.Jenis_Instansi}</td>
                                            <td>
                                                <button onClick={() => this.ButtonDetailView(listdata.id)} data-toggle="modal" data-target="#InstansiDetailViewModal" className='btn btn-table-colorize-green'>View</button>
                                            </td>
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonUpdateBiodata(listdata.id)} data-toggle="modal" data-target="#InstansiUpdateModal" className='btn btn-table-colorize-green'>Update</button>
                                                </td>
                                            ) : null}
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonDetailView(listdata.id)} data-toggle="modal" data-target="#InstansiDeleteModal" className='btn btn-table-colorize-green'>Delete</button>
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
    prestasi: state.Prestasi,
    auth: state.Auth,
})

export default connect(mapStateToProps, { LoadListofInstansi, Button_Instansi_DetailView, Button_UpdateInstansi })(InstansiTableDataInstansi)