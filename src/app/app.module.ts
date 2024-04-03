import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { DataStructureComponent } from './layout/data-structure/data-structure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/components/shared.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SearchRoutePipe } from './shared/pipes/search-route';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DsaMainComponent } from './layout/dsa-main/dsa-main.component';
import { InterviewQuestionComponent } from './layout/interview-question/interview-question.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchRoutePipe,
    HomeComponent,
    DataStructureComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DsaMainComponent,
    InterviewQuestionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
