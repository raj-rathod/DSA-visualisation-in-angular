import { Component, ElementRef, OnInit } from '@angular/core';
import { algorithms, dataStructure, interviewQuestions } from 'src/app/core/meta-data/router-meta-data';
import { Helper } from 'src/app/helper/helper';
import { RouterLinkData } from 'src/app/shared/interfaces/meta-data.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dataStructure = dataStructure;
  interviewQuestions = interviewQuestions;
  algorithms = algorithms
  searchData: RouterLinkData[] = Helper.allRoutesData();;
  searchKey = '';
  constructor(
    private elRef: ElementRef
  ) {}

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
