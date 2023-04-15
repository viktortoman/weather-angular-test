import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from "./components/country-list/country-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CountryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
