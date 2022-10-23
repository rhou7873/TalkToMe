import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({providedIn: "root"})
export class UserSessionService {
  private currUser: User | null = null;

  changeCurrUser(user: User | null) {
    this.currUser = user;
  }

  getCurrUser() {
    return this.currUser;
  }
}
