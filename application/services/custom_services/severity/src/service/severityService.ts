import { Request, Response } from 'express';
import {severityDao} from '../dao/severityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let severity = new severityDao();

export class severityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpDelete')
     let  severityId = req.params.id;
     severity.GpDelete(severityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpSearch')
     let  severityData = req.query;
     severity.GpSearch(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpSearchForUpdate')
     let  severityData = req.body;
     severity.GpSearchForUpdate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpUpdate')
     let  severityData = req.body;
     severity.GpUpdate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpGetEntityById')
     let  severityId = req.params.id;
     severity.GpGetEntityById(severityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpGetAllValues')
     
     severity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpCreate')
     let  severityData = req.body;
     severity.GpCreate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpGetNounCreatedBy')
     let  severityData = { created_by: req.query.createdby };
     severity.GpGetNounCreatedBy(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}