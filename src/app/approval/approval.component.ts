import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
  users:any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body','action'];
  dataSource:any;
  constructor(private _ser:EmployeeService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._ser.getUser().subscribe((result)=>{

      this.users=result
     this.dataSource = new MatTableDataSource<any>(this.users);
    })
  }

  deleteUser(id:any){
    debugger
    this._ser.deleteUser(id).subscribe((result)=>{
      alert("deleted sucessfully")
      this.getUser()
      window.location.reload()
    })
  }
}
