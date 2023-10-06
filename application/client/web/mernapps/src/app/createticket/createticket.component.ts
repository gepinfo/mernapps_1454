import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateticketService } from './createticket.service';



    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }


@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    severityitemArray: any = [];
    typesitemArray: any = [];
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        assigness: '',
        types: '',
        severity: '',
        ticketstatus: '',
    }




    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createticketService.GpCreate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.assigness = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.ticketstatus = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.createticketService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}