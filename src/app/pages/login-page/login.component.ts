import { Component, ViewChild } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(public credentialsService: CredentialsService) {}

  loginClick() {
    const validCredentials = this.credentialsService.validCredentials(this.username, this.password);
    if (validCredentials) {
      console.log(`VALID -> username: ${this.username}, password: ${this.password}`);
    } else {
      console.log(`INVALID -> username: ${this.username}, password: ${this.password}`);
      this.username = "";
      this.password = "";
    }
  }

  signUpClick() {

  }
}
