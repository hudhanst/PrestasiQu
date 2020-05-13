import React from 'react'

import { connect } from 'react-redux'

import { LoadListofSiswa, Button_DetailView, Button_UpdateBiodata, Button_UpdateBiodataAccount } from '../../../Store/Actions/Biodata.Actions'
import {Short_Column_INT, Short_Column_STR} from '../../Container/Shorting'
import DataNotFound from '../DataNotFound'

class BiodataDetailDataSiswa extends React.Component {
    componentDidMount() {
        this.props.LoadListofSiswa()
    }
    ButtonDetailView(BiodataID) {
        this.props.Button_DetailView(BiodataID)
    }
    ButtonUpdateBiodata(BiodataID) {
        this.props.Button_UpdateBiodata(BiodataID)
    }
    ButtonUpdateBiodataAccount(BiodataID) {
        this.props.Button_UpdateBiodataAccount(BiodataID)
    }
    ButtonShortINT(ColumnNumb){
        Short_Column_INT('tabeldatasiswa',ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb){
        Short_Column_STR('tabeldatasiswa',ColumnNumb)
    }
    render() {
        const { Data_Siswa } = this.props.biodata
        const { user } = this.props.auth
        return (
            <div>
                {(!Data_Siswa || Data_Siswa.length <= 0) ? <DataNotFound /> :
                    <div className="Biodata-section">
                        <div className='table-responsive'>
                            <table className="table table-striped table-hover table-custom position-center" id='tabeldatasiswa'>
                                <thead>
                                    <tr>
                                        <th scope="col" onClick={() => this.ButtonShortINT(0)}><span className="glyphicon glyphicon-sort-by-alphabet"></span>Index</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(1)}>Nomer Induk</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Nama</th>
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
                                    {Data_Siswa.map((datasiswa, index) => (
                                        <tr key={datasiswa.id}>
                                            <td>{index + 1}</td>
                                            <td>{datasiswa.NomerInduk}</td>
                                            <td>{datasiswa.Nama}</td>
                                            <td>
                                                <button onClick={() => this.ButtonDetailView(datasiswa.id)} data-toggle="modal" data-target="#ViewDetailModal" className='btn btn-table-colorize-green'>View</button>
                                            </td>
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonUpdateBiodata(datasiswa.id)} data-toggle="modal" data-target="#BiodataUpdateModal" className='btn btn-table-colorize-green'>Biodata</button>
                                                    <button onClick={() => this.ButtonUpdateBiodataAccount(datasiswa.id)} data-toggle="modal" data-target="#AccountUpdateModal" className='btn btn-table-colorize-green'>Account</button>
                                                </td>
                                            ) : null}
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonDetailView(datasiswa.id)} data-toggle="modal" data-target="#BiodataDeleteModal" className='btn btn-table-colorize-green'>Delete</button>
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
    biodata: state.Biodata,
    auth: state.Auth
})

export default connect(mapStateToProps, { LoadListofSiswa, Button_DetailView, Button_UpdateBiodata, Button_UpdateBiodataAccount })(BiodataDetailDataSiswa)