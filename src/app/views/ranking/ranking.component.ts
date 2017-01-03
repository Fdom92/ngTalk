import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {TMDbApi} from '../../services/tmdb-api/tmdb';

class Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'my-ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.scss'],
  providers: [TMDbApi]
})
export class RankingComponent implements OnInit {
  results: Array<any>;
  options: Array<Option>;
  types: Array<Option>;
  filterForm: FormGroup;

  constructor( private TMDbApiService: TMDbApi, private formBuilder: FormBuilder) {
    this.options  = [
      {value: 'popularity.desc', viewValue: 'Popularity Desc'},
      {value: 'popularity.asc', viewValue: 'Popularity Asc'},
      {value: 'vote_average.desc', viewValue: 'Vote Average Desc'},
      {value: 'vote_average.asc', viewValue: 'Vote Average Asc'},
      {value: 'vote_count.desc', viewValue: 'Vote Count Desc'},
      {value: 'vote_count.asc', viewValue: 'Vote Count Asc'}
    ];

    this.types  = [
      {value: 'movie', viewValue: 'Movies'},
      {value: 'tv', viewValue: 'Tv'}
    ];

    this.filterForm = this.formBuilder.group({
        year:   ['', Validators.required],
        filter: ['', Validators.required],
        type: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  filter() {
    switch (this.filterForm.value.type) {
      case 'movie':
        this.getMovieData(this.filterForm.value.year , this.filterForm.value.filter);
        break;
      case 'tv':
        this.getTvData(this.filterForm.value.year , this.filterForm.value.filter);
        break;
    }
  }

  getMovieData(year, filterBy) {
    this.TMDbApiService.discoverMovies(year, filterBy).then(
        (response: any) => { this.results = response.results; },
        (err: any) => { console.log(err); }
    );
  }

  getTvData(year, filterBy) {
    this.TMDbApiService.discoverTV(year, filterBy).then(
        (response: any) => { this.results = response.results; },
        (err: any) => { console.log(err); }
    );
  }
}
