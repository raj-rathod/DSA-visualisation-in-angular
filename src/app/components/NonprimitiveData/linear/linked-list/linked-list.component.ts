import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { linkedListMetaData } from 'src/app/core/data-structures/linear/linked-list/linked-list-meta-data';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit{
  
  linkedListMetaData = linkedListMetaData;
  step = 0;
  constructor(
    private router: Router,
    private elRef: ElementRef,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.route.queryParams.subscribe(params => {
       if(params?.step){
         this.step = +params?.step;
       }
     });
  }
  selectionOfType(index: number): void {
    this.step = index;
    // const typeRef = this.elRef.nativeElement.querySelectorAll('.linkedType');
    // for (let i = 0; i < typeRef.length; i++){
    //   if(i === index){
    //     typeRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 linkedType';
    //     this.selectType(i);
    //   }else{
    //     typeRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 linkedType';
    //   }
    // }
  }

  

}

