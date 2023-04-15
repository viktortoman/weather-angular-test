import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api-service.service";
import {Country} from "../../shared/models/country";
import {CountryResponse} from "../../shared/models/country-response";
import {GeolocationResponse} from "../../shared/models/geolocation-response";
import {CapitalDistance} from "../../shared/models/capital-distance";
import {WeatherResponse} from "../../shared/models/weather-response";
import {DistanceCalculateService} from "../../services/distance-calculate.service";
import {ForecastResponse} from "../../shared/models/forecast-response";
import {ForecastListResponse} from "../../shared/models/forecast-list-response";
import {TableType} from "../../shared/enums/table-type";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  weatherData: ForecastListResponse[] = [];
  countries: Country[] = [];
  capitalsDistance: CapitalDistance[] = [];
  selectedCapital?: CapitalDistance;
  geolocationData?: GeolocationResponse;
  actualWeather?: WeatherResponse;
  forecast?: ForecastResponse;
  loaded: boolean = false;
  tableType?: TableType

  constructor(
    public apiService: ApiService,
    public distanceCalculateService: DistanceCalculateService
  ) {}

  ngOnInit() {
    this.getAllCountry()
  }

  getAllCountry() {
    this.apiService.getAllCountry().subscribe((data: CountryResponse[]) => {
      data.map((country: CountryResponse) => {
        if (
          country.capital &&
          country.capital.length > 0
        ) {
          this.countries.push({
            name: country.name.common,
            capital: country.capital[0],
            lat: country.latlng[0],
            lng: country.latlng[1],
          });
        }
      })
    }, error => {
      console.log(error)
    }, () => {
      this.getGeolocationData()
    })
  }

  getGeolocationData() {
    this.apiService.getGeolocationData().subscribe((data: GeolocationResponse) => {
      this.geolocationData = data;
    },error => {
      console.log(error)
    }, () => {
      this.countries.map((country: Country) => {
        let km = this.distanceCalculateService.getDistanceFromLatLonInKm(
          this.geolocationData?.latitude ?? 0, this.geolocationData?.longitude ?? 0,
          country.lat, country.lng
        )

        this.capitalsDistance.push({
          country: country,
          capital: country.capital,
          km: km,
          lat: country.lat,
          lng: country.lng,
        });
      })

      this.capitalsDistance.sort(function (a:CapitalDistance, b:CapitalDistance) {
        return a.km - b.km
      })

      this.selectedCapital = this.capitalsDistance[0];
      this.getWeather(this.selectedCapital.country);
    })
  }

  getWeather(country: Country) {
    this._setSelectedCapital(country);

    this.apiService.getCountryWeather(country.lat, country.lng).subscribe((data: WeatherResponse) => {
      this.actualWeather = data;
    }, error => {
      console.log(error)
    }, () => {
      this.tableType = TableType.Weather;
      this.weatherData.push(<ForecastListResponse>this.actualWeather);
      this.loaded = true;
    })
  }

  getForecast(country: Country) {
    this._setSelectedCapital(country);

    this.apiService.getCountryForecast(country.lat, country.lng).subscribe((data: ForecastResponse) => {
      this.forecast = data;
      this.tableType = TableType.Forecast;
      this.weatherData = this.forecast.list;
      console.log(this.weatherData)
    })
  }

  private _setSelectedCapital(country: Country) {
    this.weatherData = [];

    this.selectedCapital = {
      country: country,
      capital: country.capital,
      km: 0,
      lat: country.lat,
      lng: country.lng,
    };

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
