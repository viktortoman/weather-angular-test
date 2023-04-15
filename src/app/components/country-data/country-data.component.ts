import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Country} from "../../shared/models/country";

@Component({
  selector: 'country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent {
  @Input() country?: Country;
  @Output() weather = new EventEmitter<Country>();
  @Output() foreCast = new EventEmitter<Country>();

  getWeather(country: Country) {
    this.weather.emit(country);
  }

  getForecast(country: Country) {
    this.foreCast.emit(country);
  }
}
