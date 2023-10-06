import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatedelticketsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpDelete(ticketsId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.WEB_API + '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
    GpUpdate(tickets:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/tickets' + `?jwt_token=${jwt_token}`, tickets);
    }
    GpGetEntityById(ticketsId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
    typesGpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/types' + `?jwt_token=${jwt_token}`);
    }
    severityGpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/severity' + `?jwt_token=${jwt_token}`);
    }
}