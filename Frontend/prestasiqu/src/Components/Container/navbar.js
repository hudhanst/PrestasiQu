import React from 'react'

import {connect} from 'react-redux'
import {LogOut} from '../../Store/Actions/Auth.Actions'

import {Link} from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        const {isAuthenticated, user} = this.props.auth
        const NavForGuest=(
            <div>
            </div>
        )
        if (isAuthenticated === false || isAuthenticated === null){
            return(
                NavForGuest
            )
        }else{
            const logo = process.env.PUBLIC_URL + '/IMG/Logo.png'
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                        <a className="navbar-brand nav-logo" href="/">
                            <img src={logo} className="d-inline-block align-top imgnavbarlogo" alt="logo" />
                            <label className="navbartextlogo">SMKN 26</label>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav custom-nav-menu">
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="/biodata">
                                    {/* <a class="nav-link dropdown-toggle" href="/biodata" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                        Biodata
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu" id="biodatadropdown">
                                        <a className="dropdown-item custom-dropdown-item" href="#">Data Siswa</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/guru">Data Guru</a>
                                        <a className="dropdown-item custom-dropdown-item" href="#">Data Admin</a>
                                        <a className="dropdown-item custom-dropdown-item" href="#">Data Kelas</a>
                                        <a className="dropdown-item custom-dropdown-item" href="#">Data Instansi</a>
                                        <a className="dropdown-item custom-dropdown-item" href="#">Data Pelanggaran</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="#">
                                        Prestasi
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu">
                                        <a className="dropdown-item custom-dropdown-item" href="#">Pengajuan Prestasi</a>
                                        <a className="dropdown-item custom-dropdown-item" href="#">ACC Pengajuan Prestasi</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="#">
                                        Point
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu">
                                        <a className="dropdown-item custom-dropdown-item" href="#">Pengajuan Point</a>
                                        <a className="dropdown-item custom-dropdown-item" href="#">ACC Pengajuan Point</a>
                                    </div>
                                </li>
                                <li className="nav-item active custom-nav-item">
                                    <a className="nav-link" href="#/logout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )
        }
    }
}
const mapStateToProps=state=>({
    auth:state.Auth
})
export default connect(mapStateToProps,{LogOut})(Navbar)