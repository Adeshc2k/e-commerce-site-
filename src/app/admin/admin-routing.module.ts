import { ApprovalComponent } from './../approval/approval.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'timesheet',component:TimesheetComponent},
  {path:'approval',component:ApprovalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
