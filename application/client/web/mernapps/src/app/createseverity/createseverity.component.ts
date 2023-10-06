import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateseverityService } from './createseverity.service';





@Component({
  selector: 'app-createseverity',
  templateUrl: './createseverity.component.html',
  styleUrls: ['./createseverity.component.scss'],
})

export class CreateseverityComponent implements OnInit {
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private createseverityService: CreateseverityService,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}