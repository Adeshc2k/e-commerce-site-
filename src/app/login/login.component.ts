import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  myForm: FormGroup;
  options: any;

  constructor(private fb: FormBuilder,private ser:EmployeeService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.getEmployees()

  }

  getEmployees(){
    this.ser.getEmployees().subscribe(res=> this.options=res)


  }
}

