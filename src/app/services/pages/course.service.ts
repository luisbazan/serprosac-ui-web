import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractCRUDServices } from '../abstractCRUD/abstractCRUDServices';
import { Course } from '../../interfaces/course';

@Injectable()
export class CourseService extends AbstractCRUDServices {

  constructor(private _httpClient: HttpClient) { 
    super(_httpClient);
  }

  getObjectUrl():string {
    return //this.rootFireBase + 'courses';
  }

  getObjectsUrl():string {
    return //this.rootFireBase + 'courses.json';
  }
  
  public add(student:Course):Observable<Object>{
    return //super.add(student);
  }

  public remove(key$:string):Observable<Object>{
    return //super.remove(key$);
  }

  public update(student:Course, key$:string):Observable<Object>{
    return //super.update(student, key$);
  }

  public retrieve(key$:string):Observable<Course>{
    return //super.retrieve(key$);
  }

  public retrieveAll():Observable<Course[]>{
    return //super.retrieveAll();
  }

}
