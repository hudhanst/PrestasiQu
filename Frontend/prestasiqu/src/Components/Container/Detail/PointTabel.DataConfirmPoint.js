import React from 'react'

import { connect } from 'react-redux'

import {LoadListofConfirmPoint, Button_PointDetailView} from '../../../Store/Actions/Point.Actions'
import {Short_Column_INT, Short_Column_STR} from '../Shorting'

import DataNotFound from '../DataNotFound'
import Loading from '../Loading'

class PointTabelDataConfirmPoint extends React.Component {
    componentDidMount(){
        this.props.LoadListofConfirmPoint()
    }
    ButtonPointDetailView(ID){
        this.props.Button_PointDetailView(ID)
    }
    ButtonShortINT(ColumnNumb){
        Short_Column_INT('tabeldataconfirmpoint',ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb){
        Short_Column_STR('tabeldataconfirmpoint',ColumnNumb)
    }
    render() {
        const { isPelanggaranLoading, Point_PointConfirm } = this.props.point
        if (isPelanggaranLoading === true) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    {(!Point_PointConfirm || Point_PointConfirm.length <= 0) ? <DataNotFound /> :
                        <div className="Biodata-section">
                            <div className='table-responsive'>
                                <table className="table table-striped table-hover table-custom position-center" id='tabeldataconfirmpoint'>
                                    <thead>
                                        <tr>
                                            <th scope="col" onClick={() => this.ButtonShortINT(0)}>Index</th>
                                            <th scope="col" onClick={() => this.ButtonShortINT(1)}>No Point Submision</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Nama Pengaju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(3)}>Nomer Induk Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(4)}>Nama Dituju</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(5)}>Nama Pelanggaran</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(6)}>Tanggal Diterima</th>
                                            <th scope="col" onClick={() => this.ButtonShortSTR(7)}>Status</th>
                                            <th scope="col" >View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Point_PointConfirm.map((listdata, index) => (
                                            <tr key={listdata.id}>
                                                <td>{index + 1}</td>
                                                <td>{listdata.id}</td>
                                                <td>{listdata.Nama_Pengaju}</td>
                                                <td>{listdata.Nomer_Induk_Dituju}</td>
                                                <td>{listdata.Nama_Dituju}</td>
                                                <td>{listdata.Nama_Pelanggaran}</td>
                                                <td>{listdata.Tanggal_Diterima}</td>
                                                <td>{listdata.Status}</td>
                                                <td>
                                                    <button onClick={() => this.ButtonPointDetailView(listdata.id)} data-toggle="modal" data-target="#ViewPointSubmissionDetailModal" className='btn btn-table-colorize-green'>View</button>
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
    point: state.Point,
    auth: state.Auth,
})

export default connect(mapStateToProps, {LoadListofConfirmPoint, Button_PointDetailView})(PointTabelDataConfirmPoint)
