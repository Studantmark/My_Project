import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) { }
  //a function to get the data from the json link
    getData():Observable<any>{
      return this.http.get("https://jsonblob.com/api/jsonblob/1144535098153885696");
    }
  
}
