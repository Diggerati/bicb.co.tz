import { Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './pp-responsive.component.css']
})
export class AppComponent {
  title = 'BICB | Microfinance';
  constructor(private titleService: Title, private metaService: Meta) { }
  ngOnInit(){
    AOS.init();
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'bicb microfinance,mkopo,bicb,loans,loan,microfinance,bicb loans, cheap rates, nafuu, tanzania, benki, bank' },
      { name: 'description', content: 'Financial institution operating in Tanzania providing loans to small entrepreneurs at low rates.' },
      // { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Innocent Masuki' }
    ]);
  }
}

