import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import {Config} from '../config/config.service';

@Injectable()
export class User {

    constructor (private http: Http, private config: Config) {}

    getDetails(session_id:string){
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'account?api_key=' + this.config.apiKey+'&session_id='+session_id).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }

    getFavoriteMovies(session_id:string, account_id: string){
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'account/'+account_id+'/favorite/movies?api_key=' + this.config.apiKey+'&session_id='+session_id).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }

    getFavoriteTV(session_id:string, account_id: string){
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'account/'+account_id+'/favorite/tv?api_key=' + this.config.apiKey+'&session_id='+session_id).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }

    getWatchListMovies(session_id:string, account_id: string){
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'account/'+account_id+'/watchlist/movies?api_key=' + this.config.apiKey+'&session_id='+session_id).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }

    getWatchListTV(session_id:string, account_id: string){
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'account/'+account_id+'/watchlist/tv?api_key=' + this.config.apiKey+'&session_id='+session_id).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }


}
