import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {

  //students: any[] = [];
  students: any = {};

  hostName: string = "http://localhost:3000";//"http://www.serprosac.com";
  rootAPI: string = this.hostName + ""; 
  
  constructor(private http: HttpClient) { 
    console.log("Servicio listo para usar!!!");
  }

  getStudents(termino: string) {
    let url = this.rootAPI + "/students";
    return this.http.get(url).map(
      (resp: any) => {
        this.students = resp.students;
        return this.students;
      }
    );
  }
}
