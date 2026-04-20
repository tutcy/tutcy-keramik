import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
