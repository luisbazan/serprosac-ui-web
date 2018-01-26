import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../../interfaces/student';
import { AbstractCRUDServices } from '../abstractCRUD/abstractCRUDServices';

@Injectable()
export class StudentsService extends AbstractCRUDServices {
  
  constructor(private _httpClient: HttpClient) { 
    super(_httpClient);
  }

  getObjectUrl():string {
    return this.rootFireBase + 'students';
  }

  getObjectsUrl():string {
    return this.rootFireBase + 'students.json';
  }
  
  public add(student:Student):Observable<Object>{
    return super.add(student);
  }

  public remove(key$:string):Observable<Object>{
    return super.remove(key$);
  }

  public update(student:Student, key$:string):Observable<Object>{
    return super.update(student, key$);
  }

  public retrieve(key$:string):Observable<Student>{
    return super.retrieve(key$);
  }

  public retrieveAll():Observable<Student[]>{
    return super.retrieveAll();
  }

}
