import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createticket.scss";
import  {service}   from './createticket.service';

class Createticket extends React.Component<any, any> {
    severityitemArray: any = [];
    typesitemArray: any = [];
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    tickets : {
    name: '',
    assigness: '',
    types: '',
    severity: '',
    ticketstatus: '',
    },
     typesoptions:[],  severityoptions:[], 
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ tickets: { ...this.state.tickets, [e.target.name]: e.target.value } })
    }
     else if(!e.target) { this.setState({tickets: { ...this.state.tickets, [e.name]: e.value } })}
     else if(!e.target) { this.setState({tickets: { ...this.state.tickets, [e.name]: e.value } })}
    }


    componentDidMount() {
    this.state.tickets.created_by = sessionStorage.getItem('email')||'{}';
    this.entitytypesGpGetAllValues();
    this.entityseverityGpGetAllValues();
    }
    GpCreate  () {
    this.test.GpCreate(this.state.tickets).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    entitytypesGpGetAllValues  () {
    this.test.entitytypesGpGetAllValues().then((data:any) => {
    this.typesitemArray = data.data;
                                                                                        this.setState({typesoptions: this.typesitemArray.map((value: any) => {
                                                                                        return {name:"types",label:value.types,value:value.types}})})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    entityseverityGpGetAllValues  () {
    this.test.entityseverityGpGetAllValues().then((data:any) => {
    this.severityitemArray = data.data;
                                                                                        this.setState({severityoptions: this.severityitemArray.map((value: any) => {
                                                                                        return {name:"severity",label:value.severity,value:value.severity}})})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createticket</h2>
        <div id="template-irxy" className="gjs-row">
    <div id="template-i2kk" className="gjs-cell">
        <div id="template-ik0yd" className="gjs-row">
            <div id="template-itkfv" className="gjs-cell">
                <div id="template-ior8q">Start tracking your Tasks & Issues
                    <br id="template-ioa1d"></br>
                </div>
                <div id="template-iatid">Create new ticket</div>
            </div>
        </div>
    </div>
    <div id="template-ii59b" className="gjs-cell">
        <label id="template-igsdy" className="label ">Name
            <br id="template-igjgl"></br>
        </label>
        <input id="template-i2bsn" onChange={this.handlechange} name="name" value={this.state.tickets.name}className="input form-control "
        />
    </div>
    <div id="template-ig2i" className="gjs-cell">
        <label id="template-irzn8" className="label ">Assignees</label>
        <input id="template-i2ehi" onChange={this.handlechange}
        name="assigness" value={this.state.tickets.assigness}className="input form-control "
        />
    </div>
    <div id="template-irvh" className="gjs-cell">
        <label id="template-iprz9" className="label ">Severity</label>
    </div>
    <div id="template-ijpg" className="gjs-cell">
        <label id="template-iudhl" className="label ">Types</label>
        <div id="template-ihsus">
            <Select id="template-iwor3" options={this.state.typesoptions} onChange={this.handlechange}
            value={this.state.tickets.types}className="form-control "></Select>
        </div>
    </div>
    <div id="template-i8fws" className="gjs-cell">
        <label id="template-irkcj" className="label ">Status</label>
        <div id="template-ivn2p"></div>
        <select id="template-imqvb" onChange={this.handlechange} name="ticketstatus"
        value={this.state.tickets.ticketstatus}className="select ">
            <option value="" id="template-i9dpm">open</option>
            <option value="" id="template-irozm">close</option>
            <option value="" id="template-ij42g">inprogress</option>
        </select>
    </div>
    <div id="template-i0hso" className="gjs-cell">
        <button id="template-iykw5" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Create</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Createticket;