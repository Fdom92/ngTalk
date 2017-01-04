import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  message: string;

  constructor(  private router:Router) {

  }

  ngOnInit() {
      if(!Cookie.get('username') && !Cookie.get('session')){
          Cookie.delete('username');
          Cookie.delete('session');
          this.router.navigate(['login']);
      }
  }


}
