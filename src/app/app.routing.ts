import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranking', component: RankingComponent},
  { path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
