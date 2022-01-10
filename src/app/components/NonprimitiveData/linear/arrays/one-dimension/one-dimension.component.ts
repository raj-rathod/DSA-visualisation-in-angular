import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-dimension',
  templateUrl: './one-dimension.component.html',
  styleUrls: ['./one-dimension.component.css']
})
export class OneDimensionComponent implements OnInit {
  insertSubMenu: boolean = false;
  updateSubMenu: boolean = false;
  deleteSubMenu: boolean = false;
  operationShow = false;
  rotateIndex = -1;
  index = 0;
  dataindex = 0;
  indexWiseShow = false;
  datawiseShow = false;
  value = '';
  datavalue = '';
  createdArr:string[]  = [];
  
  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  createNewArray(input: string): void {
    this.operationShow = true;
    const inputarr = input.split(' '); 
    this.createdArr = inputarr;
    this.selectedIndex(-1);
    this.selectedData(-1);
  }

 // Insert Operations
  insertIntoArray(data:{index: number, value: string}): void {
    this.createdArr.push(data.value);
    this.selectedIndex(-1);
    this.selectedData(-1);
    this.delay(30).then(any=>{
      this.highliteOperation(this.createdArr.length-1);
    });
  }

  insertAtFirst(data:{index: number, value: string}): void {
    this.createdArr.unshift(data.value);
    this.selectedIndex(-1);
    this.selectedData(-1);
    this.delay(30).then(any=>{
      this.highliteOperation(0);
    });
  }

  insertAtIndex(data:{index: number, value: string}): void {
    this.createdArr.splice(data.index, 0 , data.value);
    this.selectedIndex(-1);
    this.selectedData(-1);
    this.delay(30).then(any=>{
      this.highliteOperation(data.index);
    });
  }
 //-----end-----//
 //------ Delete operations-------//
   deleteOperation(index: number): void {
     switch (index){
       case 0:{ 
         this.deleteAtEnd();
         break;
        }
       case 1:{ 
         this.deleteAtFirst();
         break; 
        }
       case 3:{ 
         this.deletedAll();
         break;
        }
     }
   }

   deleteAtEnd(): void {
     this.createdArr.pop();
     this.selectedIndex(-1);
     this.selectedData(-1);
   }

   deleteAtFirst(): void {
     this.createdArr = this.createdArr.slice(1);
     this.selectedIndex(-1);
     this.selectedData(-1);
   }
    
   deleteAtIndex(index: number): void {
     this.createdArr.splice(index, 1);
   }

   deletedAll(): void {
     this.createdArr = [];
   }
 //-----end ----//
 //-----Update operations-----//
  updateAtFirst(data:{index: number, value: string}): void {
    this.createdArr[0] = data.value;
    this.delay(30).then(any=>{
      this.highliteOperation(0);
    });
  }
  updateAtEnd(data:{index: number, value: string}): void {
    this.createdArr[this.createdArr.length-1] = data.value;
    this.delay(30).then(any=>{
      this.highliteOperation(this.createdArr.length-1);
    });
    
  }
  updateAtIndex(data:{index: number, value: string}): void {
    this.createdArr[data.index] = data.value;
    this.delay(30).then(any=>{
      this.highliteOperation(data.index);
    });
  }
 //-----end-----//
  opbtnSection(index: number): void {
    const opbtnRef  = this.elRef.nativeElement.querySelectorAll('.opbtn');
    for (let i = 0; i < opbtnRef.length; i++){
       if(i === index){
         this.showSubmenu(i);
         opbtnRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opbtn';
       }else{
        opbtnRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opbtn';
       }
    }
  }

  opInsBtnSelection(index: number): void {
    const opInsRef = this.elRef.nativeElement.querySelectorAll('.opInsBtn');
    for (let i = 0; i < opInsRef.length; i++){
      if(i === index){
        opInsRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opInsBtn';
      }else{
        opInsRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opInsBtn';
      }
    }
  }

  opDltBtnSelection(index: number): void {
    const opDltRef = this.elRef.nativeElement.querySelectorAll('.opDltBtn');
    for (let i = 0; i < opDltRef.length; i++){
      if(i === index){
        this.deleteOperation(i);
        opDltRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opDltBtn';
      }else{
        opDltRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opDltBtn';
      }
    }
  }
  opUpdBtnSelection(index: number): void {
    const opUpdRef = this.elRef.nativeElement.querySelectorAll('.opUpdBtn');
    for (let i = 0; i < opUpdRef.length; i++){
      if(i === index){
        opUpdRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opUpdBtn';
      }else{
        opUpdRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 opUpdBtn';
      }
    }
  }

  selectedIndex(index: number): void {
    const indexRef = this.elRef.nativeElement.querySelectorAll('.index');
    let flag = true;
    for (let i = 0; i < indexRef.length; i++){
       if(i === index){
         this.indexWiseShow = true;
         this.index = index;
         flag = false;
         this.value = this.createdArr[index];
         indexRef[i].className = 'index index-active tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center border-bottom border-2 border-danger'
       }else{
        indexRef[i].className = 'index tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center border-bottom border-2 border-danger'
       }
    }
    if(flag){
      this.indexWiseShow = false;
    }
  }

  selectedData(index: number): void {
    const dataRef = this.elRef.nativeElement.querySelectorAll('.data');
    let flag = true;
    for (let i = 0; i < dataRef.length; i++){
       if( i === index){
         this.datawiseShow = true;
         flag = false;
         this.dataindex = index;
         this.datavalue = this.createdArr[index];
         dataRef[i].className = 'data data-active tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center';
        }else{
        dataRef[i].className = 'data tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center';
       }
    }
    if(flag){
      this.datawiseShow = false;
    }
  }

  showSubmenu(index: number): void {
    switch(index){
      case 1: { 
        this.insertSubMenu = true;
        this.deleteSubMenu = false;
        this.updateSubMenu = false;
        break; 
      }
      case 2: { 
        this.insertSubMenu = false;
        this.deleteSubMenu = true;
        this.updateSubMenu = false;
        break; 
      }
      case 3:{ 
        this.insertSubMenu = false;
        this.deleteSubMenu = false;
        this.updateSubMenu = true;
        break; 
      }
      case 4:{ 
        this.rotateArr();
        this.insertSubMenu = false;
        this.deleteSubMenu = false;
        this.updateSubMenu = false;
        break; 
      }
      default: {
        this.insertSubMenu = false;
        this.deleteSubMenu = false;
        this.updateSubMenu = false;
      }
    }
  }

  rotateArr(): void {
    const first = this.createdArr[0];
    this.createdArr = this.createdArr.splice(1);
    this.createdArr.push(first);
    if( this.rotateIndex <= 0){
      this.rotateIndex = this.createdArr.length-1;
    }else{
      this.rotateIndex--;
    }
    this.delay(30).then(any=>{
      this.highliteOperation(this.rotateIndex);
    });
  }

  highliteOperation(index: number): void {
    const dataRef = this.elRef.nativeElement.querySelectorAll('.data');
    const indexRef = this.elRef.nativeElement.querySelectorAll('.index');
    for (let i = 0; i < indexRef.length; i++){
      if(i === index){
        indexRef[i].className = 'index index-active tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center border-bottom border-2 border-danger';
        dataRef[i].className = 'data data-active tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center';
      }else{
       indexRef[i].className = 'index tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center border-bottom border-2 border-danger';
       dataRef[i].className = 'data tab w-100 px-lg-3 px-2 py-lg-2 py-1 text-center';
      }
   }
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

}
