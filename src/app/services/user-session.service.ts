import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({providedIn: "root"})
export class UserSessionService {
  private currUser!: User;

  changeCurrUser(user: User) {
    this.currUser = user;
  }

  getCurrUser() {
    return this.currUser;
  }
}
