import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { DataStructureComponent } from './layout/data-structure/data-structure.component';
import { AlgorithmComponent } from './layout/algorithm/algorithm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/components/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataStructureComponent,
    AlgorithmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
