import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { insertAtIndex } from 'src/app/helper/double-input-field-meta-data';
import { DoubleInputField, DoubleInputFieldOutput } from '../../interfaces/input-dialog.interface';

@Component({
  selector: 'app-double-value-input-dialog',
  templateUrl: './double-value-input-dialog.component.html',
  styleUrls: ['./double-value-input-dialog.component.css']
})
export class DoubleValueInputDialogComponent implements OnInit {
  insertInput = insertAtIndex
  doubleInput:DoubleInputField;

  constructor(
    private matDialogRef: MatDialogRef<DoubleValueInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DoubleInputField
  ) { 
    this.doubleInput = data;
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  submitData(firstValue: string, secondValue: string): void {
    const inputData: DoubleInputFieldOutput = {
      firstInput: this.inputDataValidaton(firstValue, this.doubleInput.firstField.multiple),
      secondInput: this.inputDataValidaton(secondValue, this.doubleInput.secondField.multiple)
    };
    this.matDialogRef.close(inputData);
  }

  inputDataValidaton(data: string, multiple: boolean): number[]| number{
    if(multiple){
      return data.split(' ').map((input => +input ? +input : 0));
    }else{
      return +data.split(' ').map((input => +input ? +input : 0)).join('');
    }
  }

}
