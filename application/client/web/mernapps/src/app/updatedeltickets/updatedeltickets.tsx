import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updatedeltickets.scss";
import  {service}   from './updatedeltickets.service';

class Updatedeltickets extends React.Component<any, any> {
    queryId: any;
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
    if(this.props.location.state){
 	 	this.queryId = this.props.location.state.id._id;
 	 	this.GpGetEntityById();
 	 	};
    this.entitytypesGpGetAllValues();
    this.entityseverityGpGetAllValues();
    }
    GpDelete  () {
    this.test.GpDelete(this.queryId).then((data:any) => {
    this.GpGetEntityById();
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
    GpUpdate  () {
    this.test.GpUpdate(this.state.tickets).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    GpGetEntityById  () {
    this.test.GpGetEntityById(this.queryId).then((data:any) => {
    this.setState({tickets:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">updatedeltickets</h2>
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
        <input id="template-i2kt8" onChange={this.handlechange} name="name" value={this.state.tickets.name}className="input form-control "
        />
    </div>
    <div id="template-ig2i" className="gjs-cell">
        <label id="template-irzn8" className="label ">Assignees</label>
        <input id="template-i8lxh" onChange={this.handlechange}
        name="assigness" value={this.state.tickets.assigness}className="input form-control "
        />
    </div>
    <div id="template-irvh" className="gjs-cell">
        <label id="template-iprz9" className="label ">Severity</label>
    </div>
    <div id="template-ijpg" className="gjs-cell">
        <label id="template-iudhl" className="label ">Types</label>
        <div id="template-iijtz">
            <Select id="template-i2dil" options={this.state.typesoptions} onChange={this.handlechange}
            value={this.state.tickets.types}className="form-control "></Select>
        </div>
    </div>
    <div id="template-i8fws" className="gjs-cell">
        <label id="template-irkcj" className="label ">Status</label>
        <div id="template-ivn2p"></div>
        <select id="template-i87lt" onChange={this.handlechange} name="ticketstatus"
        value={this.state.tickets.ticketstatus}className="select ">
            <option value="" id="template-i3wcw">open</option>
            <option value="" id="template-imlug">close</option>
            <option value="" id="template-ik7e5">inprogress</option>
        </select>
    </div>
    <div id="template-i0hso" className="gjs-cell">
        <button id="template-i68l1" onClick={()=>this.GpUpdate()} className="button btn btn-primary "> Update</button>
        <button
        id="template-i29qa" onClick={()=>this.GpDelete()} className="button btn btn-primary "> Delete</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Updatedeltickets;