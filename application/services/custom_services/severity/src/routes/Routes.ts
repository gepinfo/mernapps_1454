import { Request, Response, NextFunction } from "express";
import { severityController } from '../controller/severityController';


export class Routes {
    private severity: severityController = new severityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/severity/:id').delete(this.severity.GpDelete);
app.route('/severity/get/search').get(this.severity.GpSearch);
app.route('/severity/get/update').put(this.severity.GpSearchForUpdate);
app.route('/severity').put(this.severity.GpUpdate);
app.route('/severity/:id').get(this.severity.GpGetEntityById);
app.route('/severity').get(this.severity.GpGetAllValues);
app.route('/severity').post(this.severity.GpCreate);
app.route('/severity/userid/created_by').get(this.severity.GpGetNounCreatedBy);
     }

}