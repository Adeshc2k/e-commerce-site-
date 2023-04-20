import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  getEmployees(){
    return this._http.get('http://localhost:3000/getData')
  }

  deleteEmployees(id:number){
    return this._http.delete(`http://localhost:3000/delete/${id}`)

  }

  addEmployees(data:any){
    return this._http.post('http://localhost:3000/createUser',data)
  }
}
