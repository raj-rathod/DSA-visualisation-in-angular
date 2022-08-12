import { Component, OnInit } from '@angular/core';
import { contact, projects, socialLinkes } from 'src/app/core/meta-data/meta-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  projects = projects;
  socialLinkes = socialLinkes;
  contact = contact;

  constructor() { }

  ngOnInit(): void {
  }


}
