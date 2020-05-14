import React from 'react'

import { connect } from 'react-redux'

import { LoadListofStaff, Button_DetailView, Button_UpdateBiodata, Button_UpdateBiodataAccount } from '../../../Store/Actions/Biodata.Actions'
import {Short_Column_INT, Short_Column_STR} from '../Shorting'
import DataNotFound from '../DataNotFound'

class BiodataTableDataGuru extends React.Component {
    componentDidMount() {
        this.props.LoadListofStaff()
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
        Short_Column_INT('tabeldataguru',ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb){
        Short_Column_STR('tabeldataguru',ColumnNumb)
    }
    render() {
        const { Data_Staff } = this.props.biodata
        const { user } = this.props.auth
        return (
            <div>
                {(!Data_Staff || Data_Staff.length <= 0) ? <DataNotFound /> :
                    <div className="Biodata-section">
                        <div className='table-responsive'>
                            <table className="table table-striped table-hover table-custom position-center" id='tabeldataguru'>
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
                                    {Data_Staff.map((listdata, index) => (
                                        <tr key={listdata.id}>
                                            <td>{index + 1}</td>
                                            <td>{listdata.NomerInduk}</td>
                                            <td>{listdata.Nama}</td>
                                            <td>
                                                <button onClick={() => this.ButtonDetailView(listdata.id)} data-toggle="modal" data-target="#ViewDetailModal" className='btn btn-table-colorize-green'>View</button>
                                            </td>
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonUpdateBiodata(listdata.id)} data-toggle="modal" data-target="#BiodataUpdateModal" className='btn btn-table-colorize-green'>Biodata</button>
                                                    <button onClick={() => this.ButtonUpdateBiodataAccount(listdata.id)} data-toggle="modal" data-target="#AccountUpdateModal" className='btn btn-table-colorize-green'>Account</button>
                                                </td>
                                            ) : null}
                                            {(user.admin || user.superuser) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonDetailView(listdata.id)} data-toggle="modal" data-target="#BiodataDeleteModal" className='btn btn-table-colorize-green'>Delete</button>
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

export default connect(mapStateToProps, { LoadListofStaff, Button_DetailView, Button_UpdateBiodata, Button_UpdateBiodataAccount })(BiodataTableDataGuru)