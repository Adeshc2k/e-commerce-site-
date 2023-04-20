import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:any
  constructor(private _ser:EmployeeService, private fb:FormBuilder){}

  loginForm=this.fb.group({
    username:[],
    password:[]
  })
  ngOnInit(){
    this.getEmployees()
  }



  onLogin(){

  }












  getEmployees(){
    this._ser.getEmployees().subscribe((result)=>{
      this.users=result;
    })
  }

  deleteEmployee(id:number){
    this._ser.deleteEmployees(id).subscribe((res)=>{
      alert("delete SucessFully")
      this.getEmployees()
    })
  }


}
