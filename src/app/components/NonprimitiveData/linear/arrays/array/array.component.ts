import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor(
    private router: Router,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
  }
  tabChange(index: number): void {
    const tabRef = this.elRef.nativeElement.querySelectorAll('.arraytab');
    for (let i = 0; i < tabRef.length; i++) {
      if(index === i){
        if(index === 0){
          tabRef[i].className = 'btn-bg p-lg-3 p-2 rounded-start tab arraytab';
          this.router.navigate(['/non-primitive/linear/array/one-dimension']);
        }else{
          tabRef[i].className = 'btn-bg p-lg-3 p-2 rounded-end tab arraytab';
          this.router.navigate(['/non-primitive/linear/array/two-dimension']);
        }
      }else{
        if(index !== 0){
          tabRef[i].className = 'btn-bg-unactive p-lg-3 p-2 rounded-start tab arraytab';
        }else{
          tabRef[i].className = 'btn-bg-unactive p-lg-3 p-2 rounded-end tab arraytab';
        }
      }
    }
  }

}
