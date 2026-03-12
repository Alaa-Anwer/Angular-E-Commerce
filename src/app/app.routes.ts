import { Routes } from '@angular/router';
import { Slider } from './components/slider/slider';
import { HomeProducts } from './components/home-products/home-products';
import { HomeContact } from './components/home-contact/home-contact';

export const routes: Routes = [

  { path: 'home', component: Slider },

  { path: 'products', component: HomeProducts },

  { path: 'contact', component: HomeContact },

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];
