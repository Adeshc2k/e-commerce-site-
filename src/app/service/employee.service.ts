import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 constructor(private http:HttpClient){}

//  getUser(){
//   return this._http.get('https://jsonplaceholder.typicode.com/posts')
//  }

//  deleteUser(id){
//   return this._http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//  }

  getEmployees(){
    return this.http.get('  http://localhost:3000/posts')
  }

}
