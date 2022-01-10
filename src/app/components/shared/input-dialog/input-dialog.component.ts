import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.css']
})
export class InputDialogComponent implements OnInit {
  @Output() inputValues = new EventEmitter<string>();

  input : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
     this.inputValues.emit(this.input);
     this.input = ''
  }

}
