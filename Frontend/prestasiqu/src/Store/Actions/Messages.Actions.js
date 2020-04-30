import {
    CREATE_MASSAGES,
    SUCCESS_MASSAGES,
    ERROR_MASSAGES,
    // WARNING_MASSAGES,
} from './Type.Actions'

// CREATE_MASSAGES
export const createMassages=msg=>{
    return{
        type:CREATE_MASSAGES,
        payload:msg
    }
}
export const SuccessMassages = (msg) =>{
    return{
        type : SUCCESS_MASSAGES,
        payload : msg
    }
}
export const ErrorMassages = (msg) =>{
    return{
        type : ERROR_MASSAGES,
        payload : msg
    }
}