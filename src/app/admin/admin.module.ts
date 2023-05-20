import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ApprovalsComponent } from './approvals/approvals.component';
console.log('sdfghjkl');

@NgModule({
  declarations: [
    TimesheetComponent,
    ApprovalsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
