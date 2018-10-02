import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  apiKey= 'f737c1c452ff4e2b995150543182709';

  url;
  constructor(public http: Http) {
    this.url = 'https://api.apixu.com/v1/forecast.json?key=';

  }


  getWeather(city) {
    return this.http.get(this.url+this.apiKey+'&q='+city ).map( res => res.json());
   

  }


}
