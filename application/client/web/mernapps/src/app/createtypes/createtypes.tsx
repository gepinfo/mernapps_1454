import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createtypes.scss";
import  {service}   from './createtypes.service';

class Createtypes extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    types : {
    name: '',
    description: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ types: { ...this.state.types, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.types.created_by = sessionStorage.getItem('email')||'{}';
    }
    GpCreate  () {
    this.test.GpCreate(this.state.types).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createtypes</h2>
        <div id="template-irxy" className="gjs-row">
    <div id="template-i2kk" className="gjs-cell">
        <div id="template-ik0yd" className="gjs-row">
            <div id="template-itkfv" className="gjs-cell">
                <div id="template-ior8q">Start tracking your Tasks & Issues
                    <br id="template-ioa1d"></br>
                </div>
                <div id="template-iatid">Create new types</div>
            </div>
        </div>
    </div>
    <div id="template-ii59b" className="gjs-cell">
        <label id="template-igsdy" className="label ">Name
            <br id="template-igjgl"></br>
        </label>
        <input id="template-ix9f1" onChange={this.handlechange} name="name" value={this.state.types.name}className="input form-control "
        />
    </div>
    <div id="template-ig2i" className="gjs-cell">
        <label id="template-irzn8" className="label ">Description</label>
        <input id="template-ixr3d" onChange={this.handlechange}
        name="description" value={this.state.types.description}className="input form-control "
        />
    </div>
    <div id="template-i0hso" className="gjs-cell">
        <button id="template-ig9sk" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Create</button>
    </div>
</div>
    </>
    );
    };
    };

    export default Createtypes;