import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient ) { }

  //get data from api
  getapi():Observable<any>{
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
