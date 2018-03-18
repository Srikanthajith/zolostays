import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BookingpageComponent} from './components/bookingpage/bookingpage.component';
import {LandingpageComponent} from './components/landingpage/landingpage.component';

const routes: Routes = [
    {path: '', component:LandingpageComponent},
    {path: 'booking', component: BookingpageComponent}
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);