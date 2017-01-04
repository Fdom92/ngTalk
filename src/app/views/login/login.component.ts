import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit }                  from '@angular/core';

import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'my-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [Auth]
})
export class LoginComponent implements OnInit {
  filterForm: FormGroup;

  constructor( private auth: Auth, private formBuilder: FormBuilder) {

    this.filterForm = this.formBuilder.group({
        id:   ['', Validators.required],
        pwd: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    this.auth.createSession(this.filterForm.value.id, this.filterForm.value.pwd)
      .then( data => { console.log('LOGIN OK', data); },
             err  => { console.log('ERR', err); });
  }
}
