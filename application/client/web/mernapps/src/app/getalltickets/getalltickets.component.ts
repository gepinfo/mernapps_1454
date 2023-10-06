import { Component, OnInit, ViewChild } from '@angular/core';
import { GetallticketsService } from './getalltickets.service';
import { Router } from '@angular/router';



    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }


@Component({
  selector: 'app-getalltickets',
  templateUrl: './getalltickets.component.html',
  styleUrls: ['./getalltickets.component.scss'],
})

export class GetallticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'assigness', field: 'assigness'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },{ headerName: 'ticketstauts', field: 'ticketstatus'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private getallticketsService: GetallticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpGetAllValues() {
        this.getallticketsService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updatedeltickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }


}