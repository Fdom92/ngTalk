import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import {User} from '../../services/user/user.service';

@Component({
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
    providers: [User],
})
export class ProfileComponent implements OnInit {
  message: string;
  userData: any = {} //TODO hacer una clase User

  constructor(  private router:Router, private user: User) {

  }

  ngOnInit() {
      if(!Cookie.get('username') && !Cookie.get('session')){
          Cookie.delete('username');
          Cookie.delete('session');
          this.router.navigate(['login']);
      } else {
          let promises: Array<any> = [];
          let session = Cookie.get('session');
          this.user.getDetails(session).then(
              data => {
                  this.userData = data;
                  promises.push(this.user.getFavoriteMovies(session, this.userData.id));
                  promises.push(this.user.getFavoriteTV(session, this.userData.id));
                  promises.push(this.user.getWatchListMovies(session, this.userData.id));
                  promises.push(this.user.getWatchListTV(session, this.userData.id));

                  Promise.all(promises).then(
                      data => {
                          this.userData.favoriteMovies = data[0].results;
                          this.userData.favoriteTV = data[1].results;
                          this.userData.watchListMovies = data[2].results;
                          this.userData.watchListTV = data[3].results;
                          console.log(this.userData);
                      }, err =>{
                          console.log("ERrror promesasa", err)
                      }
                  )

              }, err => {
                  console.log("ERR",err)
              }
          )
      }
  }


}
