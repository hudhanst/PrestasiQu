import React from 'react';
import {connect} from 'react-redux'
import {LogIn} from '../../../Store/Actions/Auth.Actions'
import { Redirect } from 'react-router-dom';

import LoginStaffModal from './loginstaffmodal'

import Logo from '../../../IMG/Logo.png'
import LockSVG from '../../../IMG/ICO/lock.svg'
import AccountSVG from '../../../IMG/ICO/account.svg'

class Login extends React.Component{
  state={
    nomerinduk:'',
    password:'',
    isShow:true
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isShow: true,
  //     // isShow: false,
  //   };
  //   // this.openmodel = this.openmodel.bind(this);
  // }
  onChange=E=>this.setState({[E.target.name]:E.target.value})
  onSubmit=E=>{
    E.preventDefault()
    this.props.LogIn(this.state.nomerinduk,this.state.password)
  }
  // openmodel(){
  //   // console.log(this.state.isShow)
  //   this.setState(prevState=>({
  //     isShow:!prevState.isShow,
  //     // isShow:true
  //   }))
  //   console.log(this.state.isShow)
  // }
  render(){
    if(this.props.isAuthenticated){
      return <Redirect to="/" />
    }
    const {nomerinduk,password}=this.state
    return(
      <div className="LoginPage">
        {this.state.isShow ? (<LoginStaffModal />) : null}
        <img src={Logo} alt="Logo" className="text-rounded mx-auto d-block" />
        {/* <h1 className="font-weight-bold text-center">PRESTASIQU</h1> */}
        <h4 className="text-center">Pembukuan Prestasi dan Pelanggaran Siswa di Sekolah</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nomer Induk</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><img src={AccountSVG} alt="logoaccount" /></span>
              <input className="form-control" type="text" name="nomerinduk" onChange={this.onChange} value={nomerinduk} placeholder="Nomer Registrasi / Nomer Induk" />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><img src={LockSVG} alt="logopassword" /></span>
              <input className="form-control" type="password" name="password" onChange={this.onChange} value={password} placeholder="Password anda" />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-colorize-green">Login</button>
          </div>
        </form>
        {/* <button onClick={this.openmodel} data-toggle="modal" data-target=".bd-example-modal-lg" className="btn btn-block btn-colorize-green">Staff Login</button> */}
        <button data-toggle="modal" data-target="#loginstaffmodal" className="btn btn-block btn-colorize-green">Staff Login</button>
      </div>
    )
  }
}
const mapStateToProps=state=>({
  isAuthenticated:state.Auth.isAuthenticated
})
export default connect(mapStateToProps,{LogIn})(Login)
