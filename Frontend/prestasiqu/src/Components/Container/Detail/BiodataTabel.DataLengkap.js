import React from 'react'

import { connect } from 'react-redux'

import { LoadListofAll, Button_DetailView } from '../../../Store/Actions/Biodata.Actions'
import {Short_Column_INT, Short_Column_STR} from '../Shorting'
import DataNotFound from '../DataNotFound'

class BiodataDataLengkap extends React.Component {
    componentDidMount() {
        this.props.LoadListofAll()
    }
    ButtonSubmission(BiodataID) {
        this.props.Button_DetailView(BiodataID)
    }
    ButtonShortINT(ColumnNumb){
        Short_Column_INT('tabeldatalengkap',ColumnNumb)
    }
    ButtonShortSTR(ColumnNumb){
        Short_Column_STR('tabeldatalengkap',ColumnNumb)
    }
    render() {
        const { Data_All } = this.props.biodata
        const { user } = this.props.auth
        return (
            <div>
                <h1>{this.props.prorpsaction?this.props.prorpsaction:null}</h1>
                {(!Data_All || Data_All.length <= 0) ? <DataNotFound /> :
                    <div className="Biodata-section">
                        <div className='table-responsive'>
                            <table className="table table-striped table-hover table-custom position-center" id='tabeldatalengkap'>
                                <thead>
                                    <tr>
                                        <th scope="col" onClick={() => this.ButtonShortINT(0)}><span className="glyphicon glyphicon-sort-by-alphabet"></span>Index</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(1)}>Nomer Induk</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(2)}>Nama</th>
                                        <th scope="col" onClick={() => this.ButtonShortSTR(3)}>Status</th>
                                        {((user.admin || user.superuser)&&(this.props.proptype === 'prestasi')) ? (
                                            <th scope="col">Prestasi</th>
                                        ) : null}
                                        {((user.admin || user.superuser)&&(this.props.proptype === 'point')) ? (
                                            <th scope="col">Point</th>
                                        ) : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Data_All.map((datasiswa, index) => (
                                        <tr key={datasiswa.id}>
                                            <td>{index + 1}</td>
                                            <td>{datasiswa.NomerInduk}</td>
                                            <td>{datasiswa.Nama}</td>
                                            <td>{datasiswa.Status}</td>
                                            {((user.admin || user.superuser)&&(this.props.proptype === 'prestasi')) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonSubmission(datasiswa.id)} data-toggle="modal" data-target="#PrestasiSubmissionModal" className='btn btn-table-colorize-green'>Prestasi</button>
                                                </td>
                                            ) : null}
                                            {((user.admin || user.superuser)&&(this.props.proptype === 'point')) ? (
                                                <td>
                                                    <button onClick={() => this.ButtonSubmission(datasiswa.id)} data-toggle="modal" data-target="#PointSubmissionModal" className='btn btn-table-colorize-green'>Point</button>
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

export default connect(mapStateToProps, { LoadListofAll, Button_DetailView })(BiodataDataLengkap)