import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GeolocationService {
  public currentGeo:any = [];
  key: string = "AIzaSyCcS-a9tUeC2Gqg4rm_yrqH75sduQN6xJs";

  hostName: string = "https://maps.googleapis.com/";
  rootAPI: string = this.hostName + "maps/api/geocode"; 
  constructor(private http: HttpClient) { }

  getGeocoding(lat: number, lng: number) {
    let url = this.rootAPI + `/json?latlng=${lat},${lng}&key=${this.key}`;
    return this.http.get(url).map(
      (resp: any) => {
        this.currentGeo = resp.results;
        return this.currentGeo;
      }
    );
  }
}
