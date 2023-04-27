import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  getEmployees(){
    return this._http.get('http://localhost:3000/login')
  }

  deleteEmployees(id:number){
    return this._http.delete(`http://localhost:3000/login/${id}`)

  }

  addEmployees(data:any){
    return this._http.post('hhttp://localhost:3000/login',data)
  }
}
