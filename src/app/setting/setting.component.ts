import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  city: string;

  constructor(private router: Router) {


  }

  ngOnInit() {
  }


  search(){

    let location = {
      city: this.city,

    };

    localStorage.setItem('location.name', JSON.stringify(location));
    this.router.navigate(['home']);
    
  }
  
}
