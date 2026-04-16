import {Routes} from '@angular/router';
import {Workshop} from './features/workshop/workshop';

export const routes: Routes = [
  {
    path: 'workshops',
    component: Workshop,
    title: 'Workshops'
  }
];
