import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-angular-test';
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this._matIconRegistry.addSvgIcon(
      `weather-cloudy`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-cloudy.svg")
    );

    this._matIconRegistry.addSvgIcon(
      `weather-hazy`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-hazy.svg")
    );

    this._matIconRegistry.addSvgIcon(
      `weather-rainy`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-rainy.svg")
    );

    this._matIconRegistry.addSvgIcon(
      `weather-snowy`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-snowy.svg")
    );

    this._matIconRegistry.addSvgIcon(
      `weather-sunny`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-sunny.svg")
    );
  }

}
