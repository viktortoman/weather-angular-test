export interface WeatherResponse {
  main: {
    temp: number,
    humidity: number,
    pressure: number,
  }
  weather: WeatherArrayResponse[]
  wind: {
    speed: number
  }
}

export interface WeatherArrayResponse {
  main: string
  description: string
}
