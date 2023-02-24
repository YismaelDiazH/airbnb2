import { Axios } from "axios";
import AxiosClient from '../config/axios';

export default{
    doGet(endPoint){
        return AxiosClient.get(endPoint)
    },
    doPost (endPoint, payLoad){
        return Axios.post(endPoint, payLoad)
    },
    doPut(endPoint, payLoad){
        return AxiosClient.put(endPoint, payLoad)
    },
    doDelete(endPoint){
        return AxiosClient.dekete(endPoint)
    }
    
}