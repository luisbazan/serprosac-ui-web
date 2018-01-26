import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';
import { Audit } from '../../interfaces/audit';
import 'rxjs/add/operator/map';

export abstract class AbstractCRUDServices implements ICRUDService {
  public rootFireBase:string = "https://demofirebase-97980.firebaseio.com/";
  userLogin: string = 'lbazan';

  constructor(private http: HttpClient) { 
    //console.log("Servicio listo para usar!!!");
  }
  
  public getObjectUrl():string {
    return "";
  }

  public getObjectsUrl():string {
    return "";
  }

  add(object:any):Observable<Object>{
    this.setAudit(object);
    let body = JSON.stringify(object);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.getObjectsUrl(), body, {headers: headers}).map(
      (resp: any) => {
        return resp;
      }
    );
  }

  remove(key$:string):Observable<Object>{
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${ this.getObjectUrl() }/${ key$ }.json`;
    
    return this.http.delete(url, {headers: headers}).map(
      (resp: any) => {
        return resp;
      }
    );
  }

  update(object:any, key$:string):Observable<Object>{
    this.setAudit(object);
    let body = JSON.stringify(object);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${ this.getObjectUrl() }/${ key$ }.json`;
    
    return this.http.put(url, body, {headers: headers}).map(
      (resp: any) => {
        return resp;
      }
    );
  }

  retrieve(key$:string):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${ this.getObjectUrl() }/${ key$ }.json`;
    
    return this.http.get(url).map(
      (resp: any) => {
        return resp;
      }
    );
  }

  retrieveAll():Observable<any[]>{
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get(this.getObjectsUrl()) .map(
      (resp: any[]) => {
        var listStudents:any[] = [];
        
        for (let item in resp) {
          let studentValue:any = resp[item];
          studentValue.key$ = item;
          listStudents.push(studentValue);
        }
        return listStudents;
      }
    );
  }

  private setAudit(data:any){

    if(data.audit!=null) {
      data.audit.updatedby = this.userLogin,
      data.audit.updatedDate = new Date()
    } else {
      let auditUser:Audit = {
        createdby : this.userLogin,
        createdDate : new Date()
      };
      data.audit = auditUser;
    }
  }

  private handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    if (!serverError.type) {
        for (var key in serverError) {
            if (serverError[key])
                modelStateErrors += serverError[key] + '\n';
        }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }
}

export interface ICRUDService {
  getObjectUrl():string;
  getObjectsUrl():string;
  add(object:any):Observable<Object>;
  remove(key$:string):Observable<Object>;
  update(object:any, key$:string):Observable<Object>;
  retrieve(key$:string):Observable<Object>;
  retrieveAll():Observable<any[]>;
}