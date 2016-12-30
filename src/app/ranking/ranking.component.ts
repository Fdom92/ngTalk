import { Component, OnInit } from '@angular/core';
import {OMDbApi} from '../services/omdb-api/omdb'

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  providers: [OMDbApi]
})
export class RankingComponent implements OnInit {



  constructor(private OMDbApiService: OMDbApi) {
  }

  ngOnInit() {
    console.log('Hello ranking');
    this.OMDbApiService.searchByTitleYear('star wars').then(
        (aaa:any)=>{
          console.log("BIEN",aaa);
        }, (err:any)=>{
          console.log("pum",err);
        }
    )
  }

}
