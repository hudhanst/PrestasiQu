import React from 'react'

import {connect} from 'react-redux'

import {LoadListofSiswa} from '../../../Store/Actions/Biodata.Actions'

import Print from '../../Container/Print'
import DataSiswaTableSection from'../../Container/Detail/BiodataDetail.Datasiswa'
class DataSiswa extends React.Component{
    componentDidMount(){
        this.props.LoadListofSiswa()
    }
    render(){
        const {Data_Siswa} =this.props.biodata
        return(
            <div>
                <h1 className='position-center'>-Data Siswa-</h1>
                <Print />
                {/* <DataSiswaTableSection  /> */}
                <DataSiswaTableSection ListBiodata={Data_Siswa}/>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    biodata:state.Biodata,
    // auth:state.Auth
})

export default connect(mapStateToProps,{LoadListofSiswa})(DataSiswa)