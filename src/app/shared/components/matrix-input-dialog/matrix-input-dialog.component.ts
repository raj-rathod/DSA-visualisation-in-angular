import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matrix, MatrixInputField } from '../../interfaces/input-dialog.interface';

@Component({
  selector: 'app-matrix-input-dialog',
  templateUrl: './matrix-input-dialog.component.html',
  styleUrls: ['./matrix-input-dialog.component.css']
})
export class MatrixInputDialogComponent implements OnInit {
  index: number = 0;
  count: number = 0;
  errorShown: boolean = false;
  errorMsg: string ='';
  matrix: Matrix = {
    row:0,
    column:0,
    data:[]
  };

  nextBtnShown: boolean = true;
  matrixInputMetaData: MatrixInputField [];

  constructor(
    private matDialogRef: MatDialogRef<MatrixInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatrixInputField [],
    private elRef: ElementRef,
  ) { 
    this.matrixInputMetaData = data;
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  nextFieldData(): void{
    const inputRef = this.elRef.nativeElement.querySelector('.inputForm');
   if(this.index === 0){
      const row = this.inputDataValidaton(inputRef.value, this.matrixInputMetaData[this.index].multiple);
      if(row){
        this.index++;
        this.count++;
        this.errorShown = false;
        this.errorMsg = '';
        this.matrix.row = row;
        inputRef.value = '';
      }else{
        this.errorShown = true;
        this.errorMsg = 'Rows should be greater than zero';
      }
    }else if(this.index === 1){
      const column = this.inputDataValidaton(inputRef.value, this.matrixInputMetaData[this.index].multiple);
      if(column){
      this.index++;
      this.count++;
      this.errorShown = false;
      this.errorMsg = '';
      this.matrix.column = column;
      inputRef.value = '';
      }else{
      this.errorShown = true;
      this.errorMsg = 'Columns should be greater than zero';
      }
    }else{
      const rowVAlue = inputRef.value.split(' ').map(((input: string | number) => +input ? +input : 0));
      if(rowVAlue.length === this.matrix.column){
        this.count++;
        this.errorShown = false;
        this.errorMsg = '';
        this.matrix.data.push(rowVAlue);
        inputRef.value = '';
      }else{
        this.errorShown = true;
        this.errorMsg = 'Rows element should be equal to the column size';
      }
    }
    if((this.count - this.index) === this.matrix.row && this.count>2){
      this.nextBtnShown = false;
    }
  }

  submit(): void {
    this.matDialogRef.close({
      size:{
        row: this.matrix.row,
        column: this.matrix.column
      },
      data: this.matrix.data
    });
  }

  inputDataValidaton(data: string, multiple: boolean): number[]| number{
    if(multiple){
      return data.split(' ').map((input => +input ? +input : 0));
    }else{
      return +data.split(' ').map((input => +input ? +input : 0)).join('');
    }
  }

}
