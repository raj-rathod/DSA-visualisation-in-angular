import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/meta-data/meta-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = Project;
  constructor() { }

  ngOnInit(): void {
  }

  redirect(url: string): void {
    window.open(url,'new');
  }

}
