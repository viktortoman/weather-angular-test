import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import { CountryListComponent } from './components/country-list/country-list.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { CountryDataComponent } from './components/country-data/country-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    WeatherTableComponent,
    CountryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: "COUNTRY_API_URL", useValue: environment.countryApiUrl
    },
    {
      provide: "WEATHER_API_URL", useValue: environment.weatherApiUrl
    },
    {
      provide: "ABSTRACT_API_URL", useValue: environment.abstractApiUrl
    },
    {
      provide: "WEATHER_API_APP_ID", useValue: environment.weatherApiAppId
    },
    {
      provide: "ABSTRACT_API_APP_ID", useValue: environment.abstractApiAppId
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
