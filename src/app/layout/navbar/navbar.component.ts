import { Component, ElementRef, OnInit } from '@angular/core';
import { algorithms, dataStructure, sorting } from 'src/app/core/meta-data/router-meta-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dataStructure = dataStructure;
  algorithms = algorithms
  searchData = dataStructure.concat(algorithms, sorting);
  searchKey = '';
  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  closeCollapse(): void {
    const collapseRef = this.elRef.nativeElement.querySelectorAll('#navbarToggleMenu');
    const innerWidth = window.innerWidth;
    if(innerWidth < 992){
      collapseRef[0].className='collapse navbar-collapse';
    }
  }

}
