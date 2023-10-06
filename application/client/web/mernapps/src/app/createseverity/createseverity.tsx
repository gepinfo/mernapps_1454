import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createseverity.scss";
import  {service}   from './createseverity.service';

class Createseverity extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    severity : {
    name: '',
    description: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ severity: { ...this.state.severity, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.severity.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createseverity</h2>
        <div id="template-irxy" className="gjs-row">
    <div id="template-i2kk" className="gjs-cell">
        <div id="template-ik0yd" className="gjs-row">
            <div id="template-itkfv" className="gjs-cell">
                <div id="template-ior8q">Start tracking your Tasks & Issues
                    <br id="template-ioa1d"></br>
                </div>
                <div id="template-iatid">Create new severity</div>
            </div>
        </div>
    </div>
    <div id="template-ii59b" className="gjs-cell">
        <label id="template-igsdy" className="label ">Name
            <br id="template-igjgl"></br>
        </label>
        <input id="template-ixftt" onChange={this.handlechange} name="name" value={this.state.severity.name}className="input form-control "
        />
    </div>
    <div id="template-ig2i" className="gjs-cell">
        <label id="template-irzn8" className="label ">Description</label>
        <input id="template-iwcck" onChange={this.handlechange}
        name="description" value={this.state.severity.description}className="input form-control "
        />
    </div>
    <div id="template-i0hso" className="gjs-cell">
        <button id="template-ixzmk" className="button btn btn-primary ">Create</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Createseverity;