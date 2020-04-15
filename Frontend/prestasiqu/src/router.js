import React from 'react'
import {Route, Switch} from 'react-router-dom'

import PrivateRoute from './Security/PrivateRoute'

import {LoadUser} from './Store/Actions/Auth.Actions'

import Login from './Components/Layout/Account/login'
import Logout from './Components/Layout/Account/logout'

import Home from './Components/Layout/Home'

import Biodata from './Components/Layout/Biodata'
import DataAdmin from './Components/Layout/Biodata.data_admin'
import DataGuru from './Components/Layout/Biodata.data_guru'
import DataInstansi from './Components/Layout/Biodata.data_instansi'
import DataKelas from './Components/Layout/Biodata.data_kelas'
import DataPelanggaran from './Components/Layout/Biodata.data_pelanggaran'
import DataSiswa from './Components/Layout/Biodata.data_siswa'

import Point from './Components/Layout/Point'
import PointPenerimaan from './Components/Layout/Point.penerimaan_pengajuan_point'
import PointPengajuan from './Components/Layout/Point.pengajuan_point'

import Prestasi from './Components/Layout/Prestasi'
import PrestasiPenerimaan from './Components/Layout/Prestasi.penerimaan_pengajuan_prestasi'
import PrestasiPengajuan from './Components/Layout/Prestasi.pengajuan_prestasi'

// class BaseRouter extends React.Component{
//     componentDidMount(){
//         Store.dispatch(LoadUser())
//     }
//     render(){
const BaseRouter=()=>{
    return(
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                {/* <Route exact path="/" component={Home}/> */}

                <PrivateRoute exact path="/biodata" component={Biodata} />
                <PrivateRoute exact path="/biodata/data-siswa" component={DataSiswa} />
                <PrivateRoute exact path="/biodata/data-guru" component={DataGuru} />
                <PrivateRoute exact path="/biodata/data-admin" component={DataAdmin} />
                <PrivateRoute exact path="/biodata/data-kelas" component={DataKelas} />
                <PrivateRoute exact path="/biodata/data-instansi" component={DataInstansi} />
                <PrivateRoute exact path="/biodata/data-pelanggaran" component={DataPelanggaran} />

                <PrivateRoute exact path="/prestasi" component={Prestasi} />
                <PrivateRoute exact path="/prestasi/pengajuan-prestasi" component={PrestasiPengajuan} />
                <PrivateRoute exact path="/prestasi/penerimaan-pengajuan-prestasi" component={PrestasiPenerimaan} />

                <PrivateRoute exact path="/point" component={Point} />
                <PrivateRoute exact path="/point/pengajuan-point" component={PointPengajuan} />
                <PrivateRoute exact path="/point/penerimaan-pengajuan-point" component={PointPenerimaan} />
                {/* <Route exact path="/biodata" component={Biodata}/> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
        </div>
    )
    }
// }

export default BaseRouter