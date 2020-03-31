import React from 'react';
import {connect} from 'react-redux'
import {LogIn} from '../../../Store/Actions/Auth.Actions'
import { Redirect } from 'react-router-dom';
// import logo from '../../../../public/IMG/Logo.png'
// import logo from '../../../../public/IMG/'
// import logo from process.env.PUBLIC_URL+'/IMG/Logo.png'
import LoginStaffModal from './loginstaffmodal'

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
    const logo = process.env.PUBLIC_URL + '/IMG/Logo.png'
    const locksvg = process.env.PUBLIC_URL + '/ICO/lock.svg'
    const accountsvg = process.env.PUBLIC_URL + '/ICO/account.svg'
    return(
      <div className="LoginPage">
        {this.state.isShow ? (<LoginStaffModal />) : null}
        <img src={logo} alt="Logo" className="text-rounded mx-auto d-block" />
        <h1 className="font-weight-bold text-center">PRESTASIQU</h1>
        <h4 className="text-center">Informasi Mengenai Prestasi Siswa SMKN 26 Jakarta</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nomer Induk</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><img src={accountsvg} /></span>
              <input className="form-control" type="text" name="nomerinduk" onChange={this.onChange} value={nomerinduk} placeholder="Nomer Registrasi / Nomer Induk" />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><img src={locksvg} /></span>
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
