import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent {
  users:any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body','action'];
  dataSource:any;

  doc: boolean = false;
  constructor(private _ser:EmployeeService) { }

  // ngOnInit(): void {
  //   this.getUser()
  // }
  Docviewer(){
    this.doc = true;
  }

  // getUser(){
  //   this._ser.getUser().subscribe((result)=>{

  //     this.users=result
  //    this.dataSource = new MatTableDataSource<any>(this.users);
  //   })
  // }

  // deleteUser(id:any){
  //   debugger
  //   this._ser.deleteUser(id).subscribe((result)=>{
  //     alert("deleted sucessfully")
  //     this.getUser()
  //     window.location.reload()
  //   })
  // }

  docs=" https://drive.google.com/file/d/0B5ImRpiNhCfGZDVhMGEyYmUtZTdmMy00YWEyLWEyMTQtN2E2YzM3MDg3MTZh/preview"
  docUrl = 'https://example.com/document.docx';
}
