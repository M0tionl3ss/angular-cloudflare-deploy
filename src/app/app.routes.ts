import { Routes } from '@angular/router';
import { HelloWorldPageComponent } from './pages/hello-world/hello-world-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HelloWorldPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
