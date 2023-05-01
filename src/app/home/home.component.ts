import { Component,  TemplateRef,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('myForm') myForm:TemplateRef<any>
  pdfSrc;

  constructor(private dialog: MatDialog,private sanitizer: DomSanitizer) {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.africau.edu/images/default/sample.pdf');

   }

  openDailog(){
    this.dialog.open(this.myForm)
  }

  closeDialog(){
  this.dialog.closeAll()
  }



}
