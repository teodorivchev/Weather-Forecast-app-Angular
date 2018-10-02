import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';
import {NotFound404Component} from '../not-found404/not-found404.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location = {
    city:  'sofia',

  };
  weather:any;
  value:any;

  constructor(private _weatherService: WeatherService,private router: Router) {

  }


  ngOnInit() {

      this.value = localStorage.getItem('location.name');

      if (this.value!=null){
          this.location=JSON.parse(this.value);
      }else {
        this.location={
          city:'sofia'

        }
      }

    this._weatherService.getWeather(this.location.city).subscribe(
      response => {

        console.log(response);
        this.weather=response;
      },
      error =>{
        if(error.status===400){
          this.router.navigate(['404NotFound']);
        }
        
      }
    );
  }

  searchNew(){
    localStorage.clear()
    this.router.navigate(['setting'])
  }
}
