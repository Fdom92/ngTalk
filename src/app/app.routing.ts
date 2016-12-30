import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { RankingComponent } from './views/ranking/ranking.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'ranking', component: RankingComponent}
];

export const routing = RouterModule.forRoot(routes);
