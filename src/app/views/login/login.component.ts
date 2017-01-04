import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'my-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [Auth]
})
export class LoginComponent implements OnInit {
  filterForm: FormGroup;
  message: string;

  constructor( private auth: Auth, private formBuilder: FormBuilder, private router:Router) {
    this.filterForm = this.formBuilder.group({
        username:   ['', Validators.required],
        password: ['', Validators.required],
    });
  }

  ngOnInit() {
      if(Cookie.get('username') && Cookie.get('session')){
          this.router.navigate(['']);
      } else {
          Cookie.delete('username');
          Cookie.delete('session');
      }
  }

  login(){
    this.auth.createSession(this.filterForm.value.username,this.filterForm.value.password).then(
        data =>{
          console.log("LOGIN OK",data);
          this.router.navigate(['']);
        }, err => {
          this.message = JSON.parse(err._body).status_message;
        }
    );


  }
}
