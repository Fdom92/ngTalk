import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TMDbApi {

    private urlApi = 'https://api.themoviedb.org/3/';    // URL to web api
    private apiKey = '11d1751421a3accf57f1731e67fd8b4b'; // Api Key

    constructor (private http: Http) {}

    discoverMovies(year: number, sort: string) {
        let url = `${this.urlApi}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=${sort}` +
                  `&include_adult=false&include_video=false&page=1&year=${year}`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }
}
