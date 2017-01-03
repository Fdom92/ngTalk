import { Component, OnInit } from '@angular/core';
import {OMDbApi} from '../../services/omdb-api/omdb';

@Component({
  selector: 'my-ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.scss'],
  providers: [OMDbApi]
})
export class RankingComponent implements OnInit {
  episodes: Array<any>;

  constructor(private OMDbApiService: OMDbApi) {
  }

  ngOnInit() {
    console.log('Hello ranking');
    this.getData();
  }

  getData() {
    this.OMDbApiService.searchEpisodesBySeason('Game of Thrones', 4).then(
        (response: any) => { this.episodes = response.Episodes; },
        (err: any) => { console.log(err); }
    );
  }
}
