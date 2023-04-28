import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

 getUser(){
  return this._http.get('https://jsonplaceholder.typicode.com/posts')
 }

 deleteUser(id){
  return this._http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
 }
}
