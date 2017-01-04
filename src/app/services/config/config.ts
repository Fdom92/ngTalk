import { Injectable } from '@angular/core';

@Injectable()
export class Config {

    public urlApi: string;
    public apiKey: string;

    constructor () {
        this.urlApi = 'https://api.themoviedb.org/3/';    // URL to web api
        this.apiKey = '11d1751421a3accf57f1731e67fd8b4b'; // Api Key
    }



}
