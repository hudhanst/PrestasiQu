import React from 'react'

import {connect} from 'react-redux'

class Massages extends React.Component{
    render(){
        const {isMassages,MassagesType, Massages} = this.props.messages

        const successalerts = (
            <div className='custom-alerts'>
                <div className="alert alert-success" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                 {Massages ? Massages : null}
                
                </div>
            </div>
        )
        const warningalerts = (
            <div className='custom-alerts'>
                <div className="alert alert-warning" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {Massages ? Massages : null}
                
                </div>
            </div>
        )
        const dangeralerts = (
            <div className='custom-alerts'>
                <div className="alert alert-danger" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {Massages ? (
                        <div>
                            {/* {Object.keys(Massages)} */}
                            {/* {Object.keys(Massages).map(Massage=>Massages[Massage])} */}
                            {Object.keys(Massages).map(Massage => (
                                <div key={Massage}>
                                    <li key={Massage}>{Massage}:{Massages[Massage]}</li>
                                </div>
                            ))}
                        </div>)
                        : null}
                    {/* {Massages ? (console.log('ada kesalahan',Massages)):null} */}
                </div>
            </div>
        )
        const infoalerts = (
            <div className='custom-alerts'>
                <div className="alert alert-info" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {Massages ? Massages : null}
                
                </div>
            </div>
        )
        if (isMassages === true){
            if (MassagesType === 'SUCCESS'){
                return(successalerts)
            }else if (MassagesType === 'WARNING'){
                return (warningalerts)
            }else if (MassagesType === 'ERROR'){
                return (dangeralerts)
            }else{
                return (infoalerts)
            }
        }else{
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps=state=>({
    messages:state.Messages
  })

export default connect(mapStateToProps,{})(Massages)
