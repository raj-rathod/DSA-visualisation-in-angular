import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matrix-input',
  templateUrl: './matrix-input.component.html',
  styleUrls: ['./matrix-input.component.css']
})
export class MatrixInputComponent implements OnInit {
  @Output() inputValues = new EventEmitter<any>();
  
  size = '';
  count = 0;
  sizeInput = true;
  errorShow = false;
  error = '';
  row = '';
  nextBtn = true;

  Matrix:number[][] = [];
  inputData = {
    size:{
      row: 0,
      column: 0
    },
    matrix:this.Matrix
  }
  constructor() {}

  ngOnInit(): void {
  }

  next(): void {
    if(this.sizeInput){
      if(this.size.length === 0|| this.size.length < 3){
        this.errorShow = true;
        this.error = 'Not a valid input';
      }else{
        const input = this.size.split(' ');
        if((isNaN(+input[0])) || (isNaN(+input[1]))){
         this.errorShow = true;
         this.error = 'Size should be numeberic';
        }else{
          let row = +input[0];
          let column = +input[1];
          if( row < 1 || column < 1 ){
           this.errorShow = true;
           this.error = 'row and column must be greater than zero';
          }else{
            this.errorShow = false;
            this.sizeInput = false;
            this.size = '';
            this.inputData.size.row = row;
            this.inputData.size.column = column;
          }
        }
      }
    }else{
      const row = this.row.split(' ');
      if(row.length !== this.inputData.size.column){
        this.errorShow = true;
        this.error = 'Enter the equal number of element'
      }else{
        if(this.count < this.inputData.size.row){
          this.errorShow = false;
          this.Matrix.push(row.map(Number));
          this.count++;
          if(this.count === this.inputData.size.row){
            this.inputData.matrix = this.Matrix;
            this.Matrix = [];
            this.nextBtn = false;
          }else{
            this.row = '';
          }
        }
      }
    }
  }

  submit(): void {
    this.inputValues.emit(this.inputData);
    this.size = '';
    this.count = 0;
    this.sizeInput = true;
    this.errorShow = false;
    this.error = '';
    this.row = '';
    this.nextBtn = true;
  }

}
