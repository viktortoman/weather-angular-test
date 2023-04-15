import {Component, Input} from '@angular/core';
import {TableType} from "../../shared/enums/table-type";
import {ForecastListResponse} from "../../shared/models/forecast-list-response";

@Component({
  selector: 'weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent {
  @Input() tableType?: TableType;
  @Input() weatherData: ForecastListResponse[] = [];

  public tableTypeWeather = TableType.Weather;
  public tableTypeForecast = TableType.Forecast;
}
