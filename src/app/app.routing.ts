import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { RankingComponent } from './views/ranking/ranking.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranking', component: RankingComponent}
];

export const routing = RouterModule.forRoot(routes);
