import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
})
export class Category implements PipeTransform {

    transform(values:Array<number>, genres:Array<any>): any {

        let result = '';

        values.forEach(function (value) {

            for(var i=0;genres.length;i++){
                if(genres[i].id===value){
                    if(result) result+= ', ';
                    result += genres[i].name;
                    break;
                }
            }


        });

        return result;
    }
}