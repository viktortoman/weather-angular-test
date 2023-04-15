import {Inject, Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Country} from "../shared/models/country";
import {HttpClient} from "@angular/common/http";
import {CountryResponse} from "../shared/models/country-response";
import {GeolocationResponse} from "../shared/models/geolocation-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    @Inject('COUNTRY_API_URL') private countryApiUrl: string,
    @Inject('WEATHER_API_URL') private weatherApiUrl: string,
    @Inject('ABSTRACT_API_URL') private abstractApiUrl: string,
    @Inject('WEATHER_API_APP_ID') private weatherApiAppId: string,
    @Inject('ABSTRACT_API_APP_ID') private abstractApiAppId: string,
    private httpClient: HttpClient
  ) { }

  getAllCountry(): Observable<CountryResponse[]> {
    return this.httpClient.get<CountryResponse[]>(`${this.countryApiUrl}region/europe`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getCountryWeather(latCountry:number, lonCountry:number): Observable<any> {
    return this.httpClient.get<any>(`${this.weatherApiUrl}weather?lat=${latCountry}&lon=${lonCountry}&units=metric&appid=${this.weatherApiAppId}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getCountryForecast(latCountry:number, lonCountry:number): Observable<any> {
    return this.httpClient.get<any>(`${this.weatherApiUrl}forecast?lat=${latCountry}&lon=${lonCountry}&units=metric&appid=${this.weatherApiAppId}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getGeolocationData(): Observable<GeolocationResponse> {
    return this.httpClient.get<GeolocationResponse>(`${this.abstractApiUrl}?api_key=${this.abstractApiAppId}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
