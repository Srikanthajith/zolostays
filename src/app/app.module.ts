import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//angular imports
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//custom components
import { AppComponent } from './app.component';
import {BookingpageComponent} from './components/bookingpage/bookingpage.component';
import {NavbarComponent} from './components/common/navbar/navbar.component';
import {DisplaydetailsComponent} from './components/bookingpage/displaydetails/displaydetails.component';
import {SimilarpropertyComponent} from './components/bookingpage/similarproperty/similarproperty.component';
import {LandingpageComponent} from './components/landingpage/landingpage.component';

//routing
import { routing } from './app.routing';

//services 
import {GetdetailsService} from './services/getdetails.service';


@NgModule({
  declarations: [
    AppComponent,
    BookingpageComponent,
    NavbarComponent,
    DisplaydetailsComponent,
    SimilarpropertyComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    routing
  ],
  providers: [GetdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
