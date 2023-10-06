import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpDelete=(ticketsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.delete(Web()+ '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
   GpUpdate=(tickets:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/tickets' + `?jwt_token=${jwt_token}`, tickets);
    }
   GpGetEntityById=(ticketsId:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web()+ '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
   entitytypesGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/types' + `?jwt_token=${jwt_token}`);
    }
   entityseverityGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/severity' + `?jwt_token=${jwt_token}`);
    }
}