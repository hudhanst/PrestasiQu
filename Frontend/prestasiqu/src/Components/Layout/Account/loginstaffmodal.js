import React from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {LogIn} from '../../../Store/Actions/Auth.Actions'

class LoginStaffModal extends React.Component{
    state={
        nomerinduk:'',
        password:'',
      }
    onChange = E => this.setState({ [E.target.name]: E.target.value })
    onSubmit = E => {
        E.preventDefault()
        this.props.LogIn(this.state.nomerinduk, this.state.password)
    }
    // modelsclose = () =>{
    //     data-dismiss:"modal"
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
            <div className="modal fade" id="loginstaffmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                {/* <div className="modal-header"> */}
                    {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                    <button type="button" className="close position-right" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                {/* </div> */}
                        <div className="modal-body">
                            <img src={logo} alt="Logo" className="text-rounded mx-auto d-block" />
                            <h2 className="font-weight-bold text-center">Login Guru dan Admin</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Nomer Induk</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1"><img src={accountsvg} alt="logoaccount" /></span>
                                        <input className="form-control" type="text" name="nomerinduk" onChange={this.onChange} value={nomerinduk} placeholder="Nomer Registrasi / Nomer Induk" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1"><img src={locksvg} alt="logopassword" /></span>
                                        <input className="form-control" type="password" name="password" onChange={this.onChange} value={password} placeholder="Password anda" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block btn-colorize-green" onClick={this.modelsclose}>Login</button>
                                </div>
                            </form>
                        </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    isAuthenticated:state.Auth.isAuthenticated
  })
export default connect(mapStateToProps,{LogIn})(LoginStaffModal)