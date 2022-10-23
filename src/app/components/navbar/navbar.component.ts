import { Component } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent {
  constructor(public userService: UserSessionService, public router: Router) {}

  logout() {
    this.userService.changeCurrUser(null);
    this.router.navigateByUrl("/");
  }
}
