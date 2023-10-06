import * as mongoose from 'mongoose';
import severityModel from '../models/daomodels/severity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class severityDao {
    private severity = severityModel;
    constructor() { }
    
    public async GpDelete(severityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpDelete');

    

    
    
    
    this.severity.findByIdAndRemove(severityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(severityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.severity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.severity.findOneAndUpdate({ _id: severityData._id }, severityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpUpdate');

    

    
    
    
    this.severity.findOneAndUpdate({ _id: severityData._id }, severityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(severityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpGetEntityById');

    

    
    
    
    this.severity.findById(severityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpGetAllValues');

    

    
    
    
    this.severity.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpCreate');

    let temp = new severityModel(severityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.severity.aggregate(([
                        { $match: { $and: [{ created_by: severityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}