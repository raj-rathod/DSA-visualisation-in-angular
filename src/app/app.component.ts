import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit() {
   this.onRouteChangeScroll();
   this.onPageChangeMetaTagsUpdate();

  }

  onRouteChangeScroll(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  onPageChangeMetaTagsUpdate(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() =>{
      const route = this.getChild(this.activatedRoute);
      route.data.subscribe(data => {
        let titleText = 'Data Structures and Algorithms | Visualization';
        if(Object.keys(data).length !== 0) {
          titleText = data?.title;
        }
        this.titleService.setTitle(titleText);
        if(data?.title){
          this.metaService.updateTag({property:"og:title", content:data?.title});
          this.metaService.updateTag({name:"twitter:title", content:data?.title});
        }else{
          this.metaService.removeTag('property= "og:title"');
          this.metaService.removeTag('name= "twitter:title"');
        }
        if(data?.description){
          this.metaService.updateTag({name:"description",content:data?.description});
          this.metaService.updateTag({property:"og:description", content:data?.description});
          this.metaService.updateTag({name:"twitter:description", content:data?.description});
        }else{
          this.metaService.removeTag('name= "description"');
          this.metaService.removeTag('property= "og:description"');
          this.metaService.removeTag('name= "twitter:description"');
        }
        if(data?.keywords){
          this.metaService.updateTag({name:"keywords",content:data?.keywords});
        }else{
          this.metaService.removeTag('name= "keywords"');
        }
        if(data?.noIndex){
          this.metaService.updateTag({name:"robots",content:data?.noIndex});
        }else{
          this.metaService.removeTag('name= "robots"');
        }
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute{
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  

}
