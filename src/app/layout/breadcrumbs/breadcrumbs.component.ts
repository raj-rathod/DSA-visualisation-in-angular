import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { Helper } from 'src/app/helper/helper';
import { RouterLinkData } from 'src/app/shared/interfaces/meta-data.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  routersData: RouterLinkData[] = Helper.allRoutesData();
  selectedRoute = -1;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events
  .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationEnd) {
        const url = event.url;
        const index = this.routersData.findIndex(data => data.route === url);
        this.selectedRoute = index;
        const element = document.getElementById('routerLink'+index);
        element?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
      }
    });
  }

  routePage(routeLink: string, routeIndex: number): void {
    this.router.navigate([routeLink]);
    this.selectedRoute = routeIndex;
  }

}
