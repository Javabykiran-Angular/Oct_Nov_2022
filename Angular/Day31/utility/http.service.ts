import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string='http://localhost:8080/api/';
  constructor(private http:HttpClient) { }

  login(obj:any){
      return  (this.http.post(`${this.BaseUrl}login`,obj));
  }
  getRecords(){

      return (this.http.get(`${this.BaseUrl}getallemployee`));

  }

  getParticularRecord(id:any){
    return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.BaseUrl}getallcountry`));
  }

  addRecord(obj:any){
    return (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:'text'}));
  }

  UpdateData(obj:any){
    return (this.http.put(`${this.BaseUrl}updateemployee`,obj,{responseType:'text'}));
  }


}
