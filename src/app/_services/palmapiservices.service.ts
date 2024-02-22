import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalmapiServices {
baseUrl = 'http://localhost/PALMWebAPI-Dev/api/';
  constructor(private http:HttpClient) { }
  headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'};

  postAsync(url: any, data: any, headers?: any){
     return this.http.post(this.baseUrl+url, data,headers);
  }
  getAsync(url: any, data: any, headers?: any){
    return this.http.post(this.baseUrl+url, data,headers);
 }
}
