import {CREATE_MASSAGES} from './Type.Actions'

// CREATE_MASSAGES
export const createMassages=msg=>{
    return{
        type:CREATE_MASSAGES,
        payload:msg
    }
}