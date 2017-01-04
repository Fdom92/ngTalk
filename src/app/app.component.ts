import { Component } from '@angular/core';
import { Config } from './services/config/config';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  username: string;

  constructor(private config: Config) {

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
  }

}
