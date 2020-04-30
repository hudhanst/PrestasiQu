import React from 'react'

import {connect} from 'react-redux'

import {LoadBiodata, LoadBiodataAccount, Button_UpdateBiodata} from '../../../Store/Actions/Biodata.Actions'

import Print from '../../Container/Print'
import BiodataSection from '../../Container/Detail/BiodataDetail'
import AccountSection from '../../Container/Detail/AccountDetail'
import BiodataUpdateModal from '../../Container/Modal/Modal.Biodata_Update'
import AccountUpdateModal from '../../Container/Modal/Modal.Account_Update'

class Biodata extends React.Component{
    componentDidMount(){
        const {user} = this.props.auth
        if (user !== null){
            this.props.LoadBiodata(user.profile)
            this.props.LoadBiodataAccount(user.id)
        }
    }
    ButtonUpdateBiodata(BiodataID){
        this.props.Button_UpdateBiodata(BiodataID)
    }
    render(){
        const {Biodata, Account} = this.props.biodata
        // console.log('id',Biodata)
        return(
            <div className='Biodata'>
                <Print />
                <BiodataSection BiodataData={Biodata} />
                <button onClick={() =>this.ButtonUpdateBiodata(Biodata.id)} data-toggle="modal" data-target="#BiodataUpdateModal" className='btn btn-sm btn-colorize-green'>Update</button>
                <BiodataUpdateModal />
                <AccountSection AccountData={Account} />
                <button onClick={() =>this.ButtonUpdateBiodata(Biodata.id)} data-toggle="modal" data-target="#AccountUpdateModal" className='btn btn-sm btn-colorize-green'>Update</button>
                <AccountUpdateModal />
            </div>
        )
    }
}

const mapStateToProps=state=>({
    biodata:state.Biodata,
    auth:state.Auth
  })

export default connect(mapStateToProps,{LoadBiodata, LoadBiodataAccount, Button_UpdateBiodata})(Biodata)