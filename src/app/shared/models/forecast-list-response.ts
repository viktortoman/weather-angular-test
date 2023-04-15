import {WeatherResponse} from "./weather-response";

export interface ForecastListResponse extends WeatherResponse {
  dt_txt?: string
}
