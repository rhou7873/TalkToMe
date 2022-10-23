import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = "";
  password: string = "";
  signup = false;

  constructor(public credentialsService: CredentialsService) {}

  loginClick() {
    const validCredentials = this.credentialsService.validCredentials(this.username, this.password);
    if (validCredentials) {
      console.log("VALID credentials");
    } else {
      console.log("INVALID credentials");
      this.username = "";
      this.password = "";
    }
  }

  signUpUser(form: NgForm) {
    const val = form.value;
    if (val.password == val.confirmPassword) {
      this.credentialsService.createUser(val.firstName, val.lastName, val.username, val.password, val.email);
    }
  }
}
