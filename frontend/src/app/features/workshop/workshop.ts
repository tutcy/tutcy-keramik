import {Component} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-workshop',
  imports: [
    TranslatePipe
  ],
  templateUrl: './workshop.html',
  styleUrl: './workshop.css',
})
export class Workshop {

  workshopsResource = httpResource(() => '/api/v1/workshops');

  constructor() {
  }
}
