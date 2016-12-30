import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RankingComponent } from './ranking/ranking.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'ranking', component: RankingComponent}
];

export const routing = RouterModule.forRoot(routes);
