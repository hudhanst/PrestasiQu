import React from 'react'

import { connect } from 'react-redux'

import {DeleteBiodata} from '../../../Store/Actions/Biodata.Actions'

import DataNotFound from '../DataNotFound'
import BiodataDetail from '../Detail/BiodataDetail'
import AccountDetail from '../Detail/AccountDetail'

class BiodataDelete extends React.Component {
    Delete_Biodata(BiodataID){
        // E.preventDefault()
        console.log('1')
        const { user } = this.props.auth
        const authdata = {
            siswa: user.siswa,
            staff: user.staff,
            admin: user.admin,
            supervisor: user.supervisor,
            superuser: user.superuser,
        }
        this.props.DeleteBiodata(BiodataID, authdata)
    }
    render() {
        const {Biodata} = this.props.biodata
        return (
            <div>
                {Biodata?(
                    <div>
                     <div>
                     <h3><b>This Biodata and Account Will Deleted, Are This Ok?</b></h3><br />
                     <BiodataDetail />
                     <AccountDetail />
                 </div>
                 <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                     <button type="submit" onClick={() => this.Delete_Biodata(Biodata.id)} className="btn btn-danger">Yes, Delete</button>
                 </div>
                 </div>
                ):<DataNotFound />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    biodata: state.Biodata,
    auth: state.Auth
})

export default connect(mapStateToProps, {DeleteBiodata})(BiodataDelete)