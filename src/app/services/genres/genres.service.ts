import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import {Config} from '../config/config.service';

@Injectable()
export class Genres {

    constructor(private http: Http, private config: Config) {
    }

    getTvGenres() {
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'genre/tv/list?api_key=' + this.config.apiKey).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }

    getMovieGenres() {
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'genre/movie/list?api_key=' + this.config.apiKey).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }
}