import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranking', component: RankingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(routes);
