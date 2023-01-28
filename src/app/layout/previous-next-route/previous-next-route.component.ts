import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { Helper } from 'src/app/helper/helper';
import { RouterLinkData } from 'src/app/shared/interfaces/meta-data.interface';

@Component({
  selector: 'app-previous-next-route',
  templateUrl: './previous-next-route.component.html',
  styleUrls: ['./previous-next-route.component.css']
})
export class PreviousNextRouteComponent implements OnInit {
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
        }
      });
  }

  previousRoute(): void{
    if(this.selectedRoute-1 > -1){
      this.router.navigate([this.routersData[this.selectedRoute-1].route]);
    }else{
      this.router.navigate(['/']);
    }
  }

  nextRoute(): void{
    if((this.selectedRoute + 1) < this.routersData.length){
      this.router.navigate([this.routersData[this.selectedRoute+1].route]);
    }else{
      this.router.navigate([this.routersData[this.selectedRoute].route]);
    }
  }

}
