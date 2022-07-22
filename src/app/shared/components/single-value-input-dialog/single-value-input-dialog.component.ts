import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleInputField } from '../../interfaces/input-dialog.interface';

@Component({
  selector: 'app-single-value-input-dialog',
  templateUrl: './single-value-input-dialog.component.html',
  styleUrls: ['./single-value-input-dialog.component.css']
})
export class SingleValueInputDialogComponent implements OnInit {
  inputTitle: SingleInputField;

  constructor(
    private matDialogRef: MatDialogRef<SingleValueInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SingleInputField
  ) { 
    this.inputTitle = data;
  }

  ngOnInit(): void {
  }

  submitData(data: string): void{
    const inputValue = this.inputDataValidation(data);
    this.matDialogRef.close(inputValue);
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  inputDataValidation(data: string): number[] | number {
    if(this.inputTitle.multiple){
      return data.split(' ').map((input => +input ? +input : 0));
    }else{
      return +data.split(' ').map((input => +input ? +input : 0)).join('');
    }
  }

}
