import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

import { UserClass } from '../../classes/user/user.class';

import {User} from '../../services/user/user.service';
import {Genres} from '../../services/genres/genres.service'

@Component({
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  providers: [User, Genres],
})
export class ProfileComponent implements OnInit {

  userData: UserClass;
  movieGenres: Array<any>;
  tvGenres: Array<any>;

  constructor(  private router:Router, private user: User, private genres: Genres) {
      this.userData = new UserClass({});
      this.movieGenres = [];
      this.tvGenres = [];
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
                  this.userData = new UserClass(data);
                  promises.push(this.user.getFavoriteMovies(session, this.userData.id));
                  promises.push(this.user.getFavoriteTV(session, this.userData.id));
                  promises.push(this.user.getWatchListMovies(session, this.userData.id));
                  promises.push(this.user.getWatchListTV(session, this.userData.id));
                  promises.push(this.genres.getMovieGenres());
                  promises.push(this.genres.getTvGenres());

                  Promise.all(promises).then(
                      data => {
                          this.userData.favoriteMovies = data[0].results;
                          this.userData.favoriteTV = data[1].results;
                          this.userData.watchListMovies = data[2].results;
                          this.userData.watchListTV = data[3].results;
                          this.movieGenres = data[4].genres;
                          this.tvGenres = data[5].genres;
                          console.log(this.userData);
                          console.log('movieGenres',this.movieGenres);
                          console.log('tvGenres',this.tvGenres);
                      }, err =>{
                          console.log("Error promesas", err)
                      }
                  )

              }, err => {
                  console.log("ERR",err)
              }
          )
      }
  }
}
