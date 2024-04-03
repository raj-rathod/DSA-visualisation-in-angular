import { Component, OnInit } from '@angular/core';
import { WebBredcrumb, socialLinkes } from 'src/app/core/meta-data/meta-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  webBredcrumb = WebBredcrumb;
  socialLinkes = socialLinkes;
  constructor() { }

  ngOnInit(): void {
  }

  


}
