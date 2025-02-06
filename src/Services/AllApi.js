import {serverURL} from './Serverurl'
import { commonAPI } from './CommonApi'

export const addUserAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/users`,user,"")
}
export const getUserAPI = async()=>{
    return await commonAPI('get',`${serverURL}/users`,"","")
}
export const addEventAPI = async(event)=>{
    return await commonAPI('post',`${serverURL}/events`,event,"")
}
export const getUserEventsAPI = async(id)=>{
    return await commonAPI('get',`${serverURL}/events/${id}`,"","")
}
export const deleteEventsAPI = async(id)=>{
    return await commonAPI('delete',`${serverURL}/events/${id}`)
}