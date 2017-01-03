import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OMDbApi {

    private urlApi = 'http://www.omdbapi.com/?';  // URL to web api

    constructor (private http: Http) {}

    searchByTitleYear(title: string, year?: string) {
        title = encodeURI(title);
        let url = `${this.urlApi}t=${title}&y=${year}&plot=full&r=json`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }

    searchEpisodesBySeason(title: string, season: number) {
        title = encodeURI(title);
        let url = `${this.urlApi}t=${title}&Season=${season}&plot=full&r=json`;
        return this.http.get(url).toPromise().then(
            response => response.json(),
            err => err
        );
    }
}
