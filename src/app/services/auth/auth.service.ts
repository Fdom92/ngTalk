import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import {Config} from '../config/config.service';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class Auth {

    constructor (private http: Http, private config: Config) {}

    requestToken() {
        return new Promise((resolve, reject) => {
            this.http.get(this.config.urlApi + 'authentication/token/new?api_key=' + this.config.apiKey).toPromise().then(
                response => resolve(response.json()),
                err => reject(err)
            );
        });
    }

    validateRequestToken(username: string, password: string ) {
        return new Promise((resolve, reject) => {
            this.requestToken().then(
                data => {
                    this.http.get(this.config.urlApi + 'authentication/token/validate_with_login?api_key=' +
                                  this.config.apiKey + '&username=' + username + '&password=' + password + '&request_token=' +
                                  data['request_token']).toPromise()
                                  .then( response => resolve(response.json()),
                                         err => reject(err)); },
                err => reject(err));
        });
    }

    createSession(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.validateRequestToken(username, password).then(
                data => {
                    this.http.get(this.config.urlApi + '/authentication/session/new?api_key=' + this.config.apiKey + '&request_token=' +
                                  data['request_token']).toPromise()
                                  .then( response => {
                                            response = response.json();
                                            Cookie.set('session', response['session_id']);
                                            Cookie.set('username', username);
                                            resolve({code: 200, msg: 'Ok'}); },
                                        err => reject(err)); },
                err => reject(err));
        });
    }
}
