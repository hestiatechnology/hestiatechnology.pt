import { Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";

export const routes: Routes = [
  { path: '',  pathMatch: 'full', component: HomepageComponent},
  //{ path: 'home', loadChildren: './home/home.module#HomeModule' },
  //{ path: 'about', loadChildren: './about/about.module#AboutModule' },
  //{ path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '**', redirectTo: '' }
];
