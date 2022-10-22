import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { insertAtIndex } from 'src/app/helper/double-input-field-meta-data';
import { arrayInput, singleInput } from 'src/app/helper/single-input-meta-data';
import { DoubleValueInputDialogComponent } from 'src/app/shared/components/double-value-input-dialog/double-value-input-dialog.component';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { DeletionOperations, InsertionOperations, Operations, UpdationOperations } from 'src/app/shared/enums/basic.enum';

@Component({
  selector: 'app-one-dimension',
  templateUrl: './one-dimension.component.html',
  styleUrls: ['./one-dimension.component.css'],
})
export class OneDimensionComponent implements OnInit {
  operationStep = -1;
  insertOperationStep = -1;
  deleteOperationStep = -1;
  updateOperationStep = -1;
  operations = Operations;
  insertOperations = InsertionOperations;
  deleteOperations = DeletionOperations;
  updateOperations = UpdationOperations;
  rotateIndex = -1;
  index = -1;
  dataIndex = -1;
  createdArr: number[] = [];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  operationSelection(index: number): void {
    this.operationStep = index;
    this.highLightDataIndex(-1);
    this.insertOperationStep = -1;
    this.deleteOperationStep = -1;
    this.updateOperationStep = -1;
  }

  opInsBtnSelection(index: number): void {
    this.insertOperationStep = index;
  }

  createNewArray(): void {
    this.operationSelection(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: arrayInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createdArr = result;
        
      }
    });
  }

  highLightDataIndex(index: number): void {
    this.dataIndex = index;
    this.index = index;
  }

  // Insert Operations
  insertAtEnd(): void {
    this.opInsBtnSelection(this.insertOperations.InsertAtEnd);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createdArr.push(result);
        this.highLightDataIndex(this.createdArr.length-1);
       
      }
    });
  }

  insertAtFirst(): void {
    this.opInsBtnSelection(this.insertOperations.InsertAtFirst);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.createdArr.unshift(result);
        this.highLightDataIndex(0);
       
      }
    });
  }

  insertAtIndex(): void {
    this.opInsBtnSelection(this.insertOperations.InsertAtPosition);
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,

      data: insertAtIndex,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createdArr.splice(result.firstInput, 0, result.secondInput);
        this.highLightDataIndex(result.firstInput);
      }
    });
  }
  //-----end-----//
 
  deleteAtEnd(): void {
    this.createdArr.pop();
    this.deleteOperationStep = this.deleteOperations.DeleteAtEnd;
    
  }

  deleteAtFirst(): void {
    this.createdArr = this.createdArr.slice(1);
    this.deleteOperationStep = this.deleteOperations.DeleteAtFirst;
   
  }

  deleteAtIndex(): void {
    this.deleteOperationStep = this.deleteOperations.DeleteAtPosition;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.createdArr.splice(result, 1);
        
      }
    });
  }

  //-----end ----//
  //-----Update operations-----//
  updateAtFirst(): void {
    this.updateOperationStep = this.updateOperations.UpdateAtFirst;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.createdArr[0] = result;
        this.highLightDataIndex(0);
        
      }
    });
  }
  updateAtEnd(): void {
    this.updateOperationStep = this.updateOperations.UpdateAtEnd;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.createdArr[this.createdArr.length - 1] = result;
        this.highLightDataIndex(this.createdArr.length - 1);
      }
    });
  }
  updateAtIndex(): void {
    this.updateOperationStep = this.updateOperations.UpdateAtPosition;
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,
      data: insertAtIndex,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createdArr[result.firstInput] = result.secondInput;
        this.highLightDataIndex(result.firstInput);
      }
    });
  }
  //-----end-----//

  rotateArr(operationIndex: number): void {
    this.operationSelection(operationIndex);
    this.operationStep
    const first = this.createdArr[0];
    this.createdArr = this.createdArr.splice(1);
    this.createdArr.push(first);
    if (this.rotateIndex <= 0) {
      this.rotateIndex = this.createdArr.length - 1;
    } else {
      this.rotateIndex--;
    }
    this.highLightDataIndex(this.rotateIndex);
  }

}
