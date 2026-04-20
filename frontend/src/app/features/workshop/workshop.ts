import {Component} from '@angular/core';
import {httpResource} from '@angular/common/http';

@Component({
  selector: 'app-workshop',
  imports: [],
  templateUrl: './workshop.html',
  styleUrl: './workshop.css',
})
export class Workshop {

  workshopsResource = httpResource(() => '/api/v1/workshops');

  constructor() {
  }
}
