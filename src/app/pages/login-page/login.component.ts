import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserSessionService } from 'src/app/services/user-session.service';
import { CredentialsService } from '../../services/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = "";
  password: string = "";
  signup = false;

  constructor(public credentialsService: CredentialsService, public userService: UserSessionService,
    public router: Router) {}

  loginClick() {
    const validCredentials = this.credentialsService.validCredentials(this.username, this.password);
    if (validCredentials) {
      console.log("VALID credentials");
      const currUser: User = this.credentialsService.getUser(this.username);
      this.userService.changeCurrUser(currUser);
      console.log(currUser);
      this.router.navigateByUrl("/home");
    } else {
      console.log("INVALID credentials");
      this.username = "";
      this.password = "";
    }
  }

  signUpUser(form: NgForm) {
    const val = form.value;
    const everythingFilled = val.firstName != "" && val.lastName != "" && val.username != "" &&
      val.password != "" && val.email != "";
    if (everythingFilled && val.password == val.confirmPassword) {
      const newUser = this.credentialsService.createUser(val.firstName, val.lastName, val.username, val.password, val.email);
      this.userService.changeCurrUser(newUser);
      this.router.navigateByUrl("/home");
      this.credentialsService.showUsers();
    } else {

    }
  }
}
