import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  hideLogin: boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.hideLogin = true;
     Swal.fire('Success','You are logged Successfull!', 'success')
  }
}
