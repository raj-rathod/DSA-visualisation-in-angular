import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-insert-update-data',
  templateUrl: './insert-update-data.component.html',
  styleUrls: ['./insert-update-data.component.css']
})
export class InsertUpdateDataComponent implements OnInit {
  @Input() indexShow: boolean = false;
  @Output() inputValues = new EventEmitter<{index: number, value: string}>();

  value = '';
  index = '';
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.inputValues.emit({index: +this.index, value: this.value});
    this.value = '';
    this.index = '';
  }

}
