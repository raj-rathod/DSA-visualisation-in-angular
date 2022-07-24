import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { matrixInput } from 'src/app/helper/matrix-input-field-meta.data';
import { MatrixInputDialogComponent } from 'src/app/shared/components/matrix-input-dialog/matrix-input-dialog.component';

@Component({
  selector: 'app-two-dimension',
  templateUrl: './two-dimension.component.html',
  styleUrls: ['./two-dimension.component.css']
})
export class TwoDimensionComponent implements OnInit {
  rowSelectionShow = false;
  columnSelectionShow = false;
  transposematrixShow = false;
  adjacentShow = false;
  dataBoxSelectionShow = false;
  operations = false;

  data = 0;
  row = 0;
  column = 0;

  sizeOfMatrix = {
    row :4,
    column :4
  };
  newtransposeMatrix:number[][] = [];
  matrix:number[][] = [];
  
  constructor(
    private elRef: ElementRef,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
   
  }

  createMatrix(): void {
    this.matOperationSelector(0);
    const matDialogRef = this.matDialog.open(
      MatrixInputDialogComponent,
      {
        disableClose: true,
        position:{
            top:'120px'
        },
        data: matrixInput
      }
    );
    matDialogRef.afterClosed().subscribe(result => {
      if(result){
        this.matrix = result.data;
        this.sizeOfMatrix = result.size
        this.operations = true;
        this.rowSelectionShow = false;
       this.columnSelectionShow = false;
       this.transposematrixShow = false;
       this.adjacentShow = false;
       this.dataBoxSelectionShow = false;
      }
    });
    
  }

  matOperationSelector(index: number): void {
    const matOpRef = this.elRef.nativeElement.querySelectorAll('.matOp'); 
    for (let i = 0; i <matOpRef.length; i++){
      if(i === index){
        this.matOprations(index);
        matOpRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 matOp';
      }else{
        matOpRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 matOp'
      }
    }
  }

  matOprations(index: number): void {
    switch (index) {
      case 1:{
        this.rowSelection();
        break;
      }
      case 2:{
        this.columnSelection();
        break;
      }
      case 3:{
        this.transposeMatrix();
        break;
      }
      case 4:{
        this.leftDiagonal();
        break;
      }
      case 5:{
        this.rightDiagonal();
        break;
      }
    }
  }
  //-------databox operations ----------//
  selectDataBox(row: number, column: number): void {
    this.matOperationSelector(-1);
    const dataBoxRef = this.elRef.nativeElement.querySelectorAll('.data-box'); 
    for(let i = 0; i <dataBoxRef.length; i++){
      if( i === (this.sizeOfMatrix.column*row + column)){
        this.selectedDataBox(row, column);
        dataBoxRef[i].className = 'data-box data-box-active tab';
      }else{
        dataBoxRef[i].className = 'data-box tab';
      }
    } 
  }

  selectedDataBox(row: number, column: number): void {
    this.data = this.matrix[row][column];
    this.row = row;
    this.column = column;
    this.rowSelectionShow = false;
    this.columnSelectionShow = false;
    this.transposematrixShow = false;
    this.adjacentShow = false;
    this.dataBoxSelectionShow = true;
  }

  showAllAdacent(): void {
    this.adjacentShow = true; 
  }

  //------end-------//

  leftDiagonal(): void {
    this.selectDataBox(-1,-1);
    const dataBoxRef = this.elRef.nativeElement.querySelectorAll('.data-box');
    for(let i = 0; i < this.sizeOfMatrix.column; i++){
      dataBoxRef[(this.sizeOfMatrix.column*i + i)].className = 'data-box data-box-active tab';
    }
    this.rowSelectionShow = false;
    this.columnSelectionShow = false;
    this.transposematrixShow = false;
    this.adjacentShow = false;
    this.dataBoxSelectionShow = false;
  }
  rightDiagonal(): void {
    this.selectDataBox(-1,-1);
    let column = this.sizeOfMatrix.column;
    const dataBoxRef = this.elRef.nativeElement.querySelectorAll('.data-box');
    for(let i = 0; i < this.sizeOfMatrix.column; i++){
      column--;
      dataBoxRef[(this.sizeOfMatrix.column*i + column)].className = 'data-box data-box-active tab';
    }
    this.rowSelectionShow = false;
    this.columnSelectionShow = false;
    this.transposematrixShow = false;
    this.adjacentShow = false;
    this.dataBoxSelectionShow = false;
  }
//-----row selection----//
  rowSelection(): void {
    this.rowSelectionShow = true;
    this.columnSelectionShow = false;
    this.transposematrixShow = false;
    this.adjacentShow = false;
    this.dataBoxSelectionShow = false;
    this.selectDataBox(-1,-1);
  }

  rowSelectionTab(index: number): void {
    const rowOpRef = this.elRef.nativeElement.querySelectorAll('.rowOp'); 
    for (let i = 0; i <rowOpRef.length; i++){
      if(i === index){
        this.rowSelect(i);
        rowOpRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 rowOp';
      }else{
        rowOpRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 rowOp'
      }
    }
  }

  rowSelect(row: number): void {
    this.selectDataBox(-1,-1);
    const dataBoxRef = this.elRef.nativeElement.querySelectorAll('.data-box');
    for(let i = 0; i < this.sizeOfMatrix.column; i++){
      dataBoxRef[(this.sizeOfMatrix.column*row + i)].className = 'data-box data-box-active tab';
    }
  }



///---end----//
//-----column selection -------//
  columnSelection(): void{
    this.rowSelectionShow = false;
    this.columnSelectionShow = true;
    this.transposematrixShow = false;
    this.adjacentShow = false;
    this.dataBoxSelectionShow = false;
    this.selectDataBox(-1,-1);
  }

  columnSelectionTab(index: number): void {
    const colOpRef = this.elRef.nativeElement.querySelectorAll('.colOp'); 
    for (let i = 0; i <colOpRef.length; i++){
      if(i === index){
        this.columnSelect(i);
        colOpRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 colOp';
      }else{
        colOpRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 colOp'
      }
    }
  }

  columnSelect(column: number): void {
    this.selectDataBox(-1,-1);
    const dataBoxRef = this.elRef.nativeElement.querySelectorAll('.data-box');
    for(let i = 0; i < this.sizeOfMatrix.row; i++){
      dataBoxRef[(this.sizeOfMatrix.column*i + column)].className = 'data-box data-box-active tab';
    }
  }
//------end------//

//------adjacent operations-----//
  adjacentOperation(index: number): void {
    const adjOpRef = this.elRef.nativeElement.querySelectorAll('.adjOp'); 
    for (let i = 0; i <adjOpRef.length; i++){
      if(i === index){
        this.adjacentOperationSelect(i);
        adjOpRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 adjOp'
      }else{
        adjOpRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 adjOp'
      }
    }
  }

  adjacentOperationSelect(index: number): void {
    switch (index) {
      case 0:{ 
        this.verticalAdjacent();
        break; 
      }
      case 1:{ 
        this.horizontalAdjacent();
        break; 
      }
      case 2:{ 
        this.diagonalAdjacent();
        break; 
      }
    }
  }

  horizontalAdjacent(): void {
    let adjIndexArr = [];
     if(this.column - 1 >= 0){
       adjIndexArr.push(this.twoDIndexToOneDindex(this.row , this.column-1));
     }
     if(this.column + 1 < this.sizeOfMatrix.column){
       adjIndexArr.push(this.twoDIndexToOneDindex(this.row , this.column+1));
     }
     this.adjacentSelect(adjIndexArr);
  }

  verticalAdjacent(): void {
    let adjIndexArr = [];
     if(this.row - 1 >= 0){
       adjIndexArr.push(this.twoDIndexToOneDindex(this.row-1 , this.column));
     }
     if(this.row + 1 < this.sizeOfMatrix.row){
       adjIndexArr.push(this.twoDIndexToOneDindex(this.row+1 , this.column));
     }
     this.adjacentSelect(adjIndexArr);
  }

  diagonalAdjacent(): void {
    let adjIndexArr = [];
    if(this.row - 1 >= 0 && this.column - 1 >= 0){
      adjIndexArr.push(this.twoDIndexToOneDindex(this.row - 1 , this.column - 1 ));
    }
    if(this.row + 1 < this.sizeOfMatrix.row && this.column - 1 >= 0){
      adjIndexArr.push(this.twoDIndexToOneDindex(this.row + 1 , this.column - 1));
    }
    if(this.row - 1 >= 0 && this.column + 1 < this.sizeOfMatrix.column){
      adjIndexArr.push(this.twoDIndexToOneDindex(this.row - 1 , this.column + 1 ));
    }
    if(this.row + 1 < this.sizeOfMatrix.row && this.column + 1 < this.sizeOfMatrix.column){
      adjIndexArr.push(this.twoDIndexToOneDindex(this.row+1 , this.column + 1));
    }
    this.adjacentSelect(adjIndexArr);
  }

  adjacentSelect(arr: number[]): void{
    this.selectDataBox(-1,-1);
    const dataBoxRef = this.elRef.nativeElement.querySelectorAll('.data-box');
    dataBoxRef[this.twoDIndexToOneDindex(this.row , this.column)].className = 'data-box data-box-active tab';
    for(let i = 0; i < arr.length; i++) {
      dataBoxRef[arr[i]].className = 'data-box data-box-adjacent tab';
    }

  }



//----end-----//

transposeMatrix(): void {
  this.newtransposeMatrix = [];
  for(let i = 0; i < this.sizeOfMatrix.column; i++){
    let row:number[] = [];
    for(let j=0; j < this.sizeOfMatrix.row; j++){
       row.push(this.matrix[j][i]);
    }
    this.newtransposeMatrix.push(row);
  }
  this.rowSelectionShow = false;
  this.columnSelectionShow = false;
  this.transposematrixShow = true;
  this.adjacentShow = false;
  this.dataBoxSelectionShow = false;
  this.selectDataBox(-1,-1);
}

twoDIndexToOneDindex(row: number, column: number): number {
  return ((this.sizeOfMatrix.column*row) + column);
}
  async delay(ms: number) {
      await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
  }

}
