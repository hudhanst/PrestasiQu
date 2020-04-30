import React from 'react'

import {connect} from 'react-redux'

import DataTableNotFound from '../DataTableNotFound'
import BiodataDetail from './BiodataDetail'
const BiodataDetail_DataSiswa = (ListBiodata) => {
// class BiodataDetail_DataSiswa extends React.Component{
    // onChange=E=>console.log('hiu')
    // render(){
    // onClickView = (e) => {
    //     console.log('hi')
    // }

    if (!ListBiodata.ListBiodata || ListBiodata.ListBiodata.length <= 0) {
        return (
            <DataTableNotFound />
        )
    } else {
            // <BiodataDetail />
        
        return (
            <div className="Biodata-section">
                <table className="table table-striped table-hover position-center">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Nomer Induk</th>
                            <th scope="col">Nama</th>
                            <th scope="col">View</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListBiodata.ListBiodata.map((datasiswa, index) => (
                            <tr key={datasiswa.id}>
                                <td>{index + 1}</td>
                                <td>{datasiswa.NomerInduk}</td>
                                <td>{datasiswa.Nama}</td>
                                <td><button onClick={console.log('aaa')} className='btn btn-table-colorize-green'>View</button></td>
                                <td><button onClick={console.log('aaa')} className='btn btn-table-colorize-green'>Update</button></td>
                                <td><button onClick={console.log('aaa')} className='btn btn-table-colorize-green'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
// }
const mapStateToProps=state=>({
//     biodata:state.Biodata,
})
export default connect(mapStateToProps,{})(BiodataDetail_DataSiswa)
// export default BiodataDetail_DataSiswa
