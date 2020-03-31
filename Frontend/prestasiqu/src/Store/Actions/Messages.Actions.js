import {CREATE_MASSAGES, GET_ERRORS} from './Type.Actions'

// CREATE_MASSAGES
export const createMassages=msg=>{
    return{
        type:CREATE_MASSAGES,
        payload:msg
    }
}

// return error
export const returnErrors=(msg,status)=>{
    return{
        type:GET_ERRORS,
        payload:{msg,status}
    }
}