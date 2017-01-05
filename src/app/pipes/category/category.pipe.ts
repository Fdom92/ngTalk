import { Pipe, PipeTransform } from '@angular/core';

// import {Genres} from '../../services/genres/genres.service'

@Pipe({
    name: 'category',
    // providers: [Genres]
})
export class Category implements PipeTransform {

    //TODO MIRAR COMO PONER UN SERVICIO EN LA PIPE, O GUARDARLO EN LOCAL STORAGE Y CONSULTAR DESDE LA PIPE

    // constructor(private genres: Genres) {
    //
    // }

    transform(value:Array<number>, type:string): any {
        console.log(value);
        // if(type === 'movie'){
        //     this.genres.getMovieGenres().then(
        //         data => {
        //             console.log(data)
        //             return 'aaaa';
        //         }, err => {
        //             return '';
        //         }
        //     )
        // } else {
        //     this.genres.getTvGenres().then(
        //         data => {
        //             console.log(data)
        //             return 'aaaa';
        //         }, err => {
        //             return '';
        //         }
        //     )
        // }
        return 'PIPE NO FUNCIONA'
    }
}