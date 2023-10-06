import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdatedelticketsService } from './updatedeltickets.service';
import { ActivatedRoute } from '@angular/router';



    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }


@Component({
  selector: 'app-updatedeltickets',
  templateUrl: './updatedeltickets.component.html',
  styleUrls: ['./updatedeltickets.component.scss'],
})

export class UpdatedelticketsComponent implements OnInit {
    queryId: any;
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
        private updatedelticketsService: UpdatedelticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GpGetEntityById();
    
    }
    GpDelete() {
        this.updatedelticketsService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.updatedelticketsService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.updatedelticketsService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updatedelticketsService.GpUpdate(this.tickets).subscribe((data:any) => {
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
    GpGetEntityById() {
        this.updatedelticketsService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.tickets = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}