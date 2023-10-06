import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./getalltickets.scss";
import  {service}   from './getalltickets.service';

class Getalltickets extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'assigness', field: 'assigness' },{ headerName: 'types', field: 'types' },{ headerName: 'severity', field: 'severity' },{ headerName: 'ticketstauts', field: 'ticketstatus' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
    this.state={
    tickets : {
    name: '',
    assigness: '',
    types: '',
    severity: '',
    ticketstatus: '',
    },
    
    rowData :[]
    } }
    


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ tickets: { ...this.state.tickets, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.tickets.created_by = sessionStorage.getItem('email')||'{}';
    this.GpGetAllValues();
    }
    GpGetAllValues  () {
    this.test.GpGetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
    this.props.history.push({pathname:"/updatedeltickets",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">getalltickets</h2>
        <div id="template-iebh" className="gjs-row">
    <div id="template-ie3y" className="gjs-cell"></div>
    <div id="template-imaj" className="gjs-cell">
        <div id="template-it5s" className="gjs-row">
            <div id="template-iui6" className="gjs-cell">
                <div id="template-iueb">List of Ticket Status</div>
                <div id="template-i9ig" onClick={()=>this.GpGetAllValues()}className="ag-theme-material" style={{height: '500px',
                    width: '100%'}} >
                    <AgGridReact columnDefs={this.columnDefs} pagination={true}
                    onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
                    "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
                    rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Getalltickets;