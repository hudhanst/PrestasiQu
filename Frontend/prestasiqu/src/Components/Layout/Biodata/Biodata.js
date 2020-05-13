import React from 'react'

import {connect} from 'react-redux'

import {Button_DetailView, Button_UpdateBiodata, Button_UpdateBiodataAccount} from '../../../Store/Actions/Biodata.Actions'

import Print from '../../Container/Print'
import BiodataDetail from '../../Container/Detail/BiodataDetail'
import AccountDetail from '../../Container/Detail/AccountDetail'
import BiodataUpdateModal from '../../Container/Modal/Modal.Biodata_Update'
import AccountUpdateModal from '../../Container/Modal/Modal.Account_Update'

class Biodata extends React.Component{
    componentDidMount(){
        const {user} = this.props.auth
        if (user !== null){
            this.props.Button_DetailView(user.profile)
        }
    }
    ButtonUpdateBiodata(BiodataID){
        this.props.Button_UpdateBiodata(BiodataID)
    }
    ButtonUpdateBiodataAccount(BiodataID){
        this.props.Button_UpdateBiodataAccount(BiodataID)
    }
    render(){
        const {Biodata} = this.props.biodata
        return(
            <div className='Biodata'>
                <Print />
                <BiodataDetail />
                <button onClick={() =>this.ButtonUpdateBiodata(Biodata.id)} data-toggle="modal" data-target="#BiodataUpdateModal" className='btn btn-sm btn-colorize-green'>Update</button>
                <BiodataUpdateModal />
                <AccountDetail />
                <button onClick={() =>this.ButtonUpdateBiodataAccount(Biodata.id)} data-toggle="modal" data-target="#AccountUpdateModal" className='btn btn-sm btn-colorize-green'>Update</button>
                <AccountUpdateModal />
            </div>
        )
    }
}

const mapStateToProps=state=>({
    biodata:state.Biodata,
    auth:state.Auth
  })

export default connect(mapStateToProps,{Button_DetailView, Button_UpdateBiodata, Button_UpdateBiodataAccount})(Biodata)