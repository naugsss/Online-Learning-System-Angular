import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  onSubmit(authForm: NgForm) {
    const username = authForm.value.username;
    const password = authForm.value.password;

    console.log(authForm);
  }
}
