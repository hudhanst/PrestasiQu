import {
    CREATE_MASSAGES,
    SUCCESS_MASSAGES,
    ERROR_MASSAGES,
    WARNING_MASSAGES,
} from '../Actions/Type.Actions'

const initialState={
    isMassages : false,
    MassagesType : null,
    Massages : null,
}

export default function(state=initialState,actions){
    switch(actions.type){
        case CREATE_MASSAGES:
            return(state=actions.payload)
        case SUCCESS_MASSAGES:
            return{
                // ...state,
                isMassages : true,
                MassagesType : "SUCCESS",
                Massages : actions.payload
            }
        case WARNING_MASSAGES:
            return{
                // ...state,
                isMassages : true,
                MassagesType : "WARNING",
                Massages : actions.payload
            }
        case ERROR_MASSAGES:
            return{
                // ...state,
                isMassages : true,
                MassagesType : "ERROR",
                Massages : actions.payload
            }
        default:
            return state
    }
}