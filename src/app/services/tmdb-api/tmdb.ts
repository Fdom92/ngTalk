import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Config } from './../config/config';

@Injectable()
export class TMDbApi {

    constructor (private http: Http, private config: Config) {}

    /**
     * Discover movies/tv shows by different types of data like average rating, number of votes, genres
     * also supports a nice list of sort options.
     * @param type: Type for search movie or tv
     * @param year: A filter to limit the results to a specific year.
     * @param sort: A filter to sort the results.
     */
    discover(type: string, year: number, sort: string) {
        let url = `${this.config.urlApi}discover/${type}?api_key=${this.config.apiKey}&language=en-US&sort_by=${sort}` +
                  `&include_adult=false&include_video=false&page=1&year=${year}`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }

    /**
     * Get a list of the current popular movies/tv shows on TMDb. This list updates daily.
     * @param type: Type for search movie or tv
     */
    popular(type: string) {
        let url = `${this.config.urlApi}/${type}/popular?api_key=${this.config.apiKey}&language=en-US&page=1`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }

    /**
     * Get the top rated movies/tv shows on TMDbApi.
     * @param type: Type for search movie or tv
     */
    topRated(type: string) {
        let url = `${this.config.urlApi}/${type}/top_rated?api_key=${this.config.apiKey}&language=en-US&page=1`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }

    /**
     * Get a list of upcoming movies in theatres.
     */
    upcomingMovies() {
        let url = `${this.config.urlApi}/movie/upcoming?api_key=${this.config.apiKey}&language=en-US&page=1`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }

    /**
     * Rate a movies/tv show.
     * @param type: Type for search movie or tv
     * @param id: Tv show or movie Validators
     * @param body: The rate object with the value
     * @param sessionId: The id for the session
     */
    rate(type: string, id: number, body: { value: number}, sessionId: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.config.urlApi}/${type}/${id}/rating?api_key=${this.config.apiKey}&session_id=${sessionId}`;

    return this.http.post(url, body, options).toPromise().then(
            response => response.json(),
            err => err
        );
    }
}
