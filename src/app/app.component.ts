import { Component } from '@angular/core';
import { Config } from './services/config/config.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  username: string;

  constructor(private config: Config, private router:Router) {
    // Do something with api
  }

  checkUserLogin() {
    this.username = Cookie.get('username');
    if (this.username) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    Cookie.delete('username');
    Cookie.delete('session');
    this.router.navigate(['login']);
  }

}
