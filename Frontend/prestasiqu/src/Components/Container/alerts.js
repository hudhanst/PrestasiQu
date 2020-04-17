import React from 'react'
import {connect} from 'react-redux'

class Alerts extends React.Component{
    render(){
        const {massagetype, status, massages, custom} = this.props.messages
        const infoalerts = (
            <div className='custom-alerts'>
                <div class="alert alert-info" role="alert">
                    This is a info alert—check it out!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
        const dangeralerts = (
            <div className='custom-alerts'>
                <div class="alert alert-danger" role="alert">
                    {status? `Status: ${status}`:''}<br />
                    {custom? `Info: ${custom}`:`Info: ${massages[1]}`}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
        const successalerts = (
            <div className='custom-alerts'>
                <div class="alert alert-success" role="alert">
                    This is a info alert—check it out!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
        if (massagetype) {
            if (massagetype === 'Sukses') {
                return ( successalerts )
            } else if (massagetype === 'Errors') {
                return ( dangeralerts )
            } else {
                return ( infoalerts )
            }
        } else {
            return ( <div></div> )
        }
    }
}

const mapStateToProps=state=>({
    messages:state.Messages
  })
export default connect(mapStateToProps,{})(Alerts)
