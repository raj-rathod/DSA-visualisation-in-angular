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


@NgModule({
  declarations: [
    AppComponent,
    SearchRoutePipe,
    HomeComponent,
    DataStructureComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
