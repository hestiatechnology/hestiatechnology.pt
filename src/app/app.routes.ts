import { Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { PriceCalculatorComponent } from "./price-calculator/price-calculator.component";
import { CheckboxOverviewExample } from "./example/checkbox-overview-example";

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'calculator', component: PriceCalculatorComponent },
  { path: 'example', component: CheckboxOverviewExample },
  //{ path: 'home', loadChildren: './home/home.module#HomeModule' },
  //{ path: 'about', loadChildren: './about/about.module#AboutModule' },
  //{ path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '**', redirectTo: '' }
];
