import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './app-responsive.component.css']
})
export class AppComponent {
  title = 'BICB | Microfinance';
  ngOnInit(){
    AOS.init();
  }
}
