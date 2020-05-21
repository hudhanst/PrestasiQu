import React from 'react'

import { connect } from 'react-redux'

import { LogOut } from '../../Store/Actions/Auth.Actions'

class Navbar extends React.Component {
    render() {
        const { isAuthenticated } = this.props.auth
        const NavForGuest = (
            <div>
            </div>
        )
        if (isAuthenticated === false || isAuthenticated === null) {
            return (
                NavForGuest
            )
        } else {
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
                                        <a className="dropdown-item custom-dropdown-item" href="/biodata/data-siswa">Data Siswa</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/biodata/data-guru">Data Guru</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/biodata/data-admin">Data Admin</a>
                                        {/* <a className="dropdown-item custom-dropdown-item" href="/biodata/data-kelas">Data Kelas</a> */}
                                        <a className="dropdown-item custom-dropdown-item" href="/biodata/data-instansi">Data Instansi</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/biodata/data-pelanggaran">Data Pelanggaran</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="/prestasi">
                                        Prestasi
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu">
                                        <a className="dropdown-item custom-dropdown-item" href="/prestasi/pengajuan-prestasi">Pengajuan Prestasi</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/prestasi/penerimaan-pengajuan-prestasi">ACC Pengajuan Prestasi</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown active custom-nav-item">
                                    <a className="nav-link" href="/point">
                                        Point
                                    </a>
                                    <div className="dropdown-menu custom-dropdown-menu">
                                        <a className="dropdown-item custom-dropdown-item" href="/point/pengajuan-point">Pengajuan Point</a>
                                        <a className="dropdown-item custom-dropdown-item" href="/point/penerimaan-pengajuan-point">ACC Pengajuan Point</a>
                                    </div>
                                </li>
                                <li className="nav-item active custom-nav-item">
                                    <a className="nav-link" href="/logout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    auth: state.Auth
})
export default connect(mapStateToProps, { LogOut })(Navbar)