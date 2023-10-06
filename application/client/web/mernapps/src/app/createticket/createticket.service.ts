import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpCreate=(tickets:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.post(Web() + '/tickets' + `?jwt_token=${jwt_token}`, tickets);
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