import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enter-value',
  templateUrl: './enter-value.component.html',
  styleUrls: ['./enter-value.component.css']
})
export class EnterValueComponent implements OnInit {
  @Input() title:string = ''
  @Output() inputValues = new EventEmitter<string>();

  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.inputValues.emit(this.value);
    this.value = '';
  }

}
