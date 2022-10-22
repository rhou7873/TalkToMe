import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable({providedIn: "root"})
export class CredentialsService {
  private credentialsList = new Map([
    ["rhou7873", {
      firstName: "Ryan",
      lastName: "Hou",
      username: "rhou7873",
      passwordHash: this.getPasswordHash("hello"),
      email: "rhou7873@gmail.com",
      diaryEntries: []
    }]
  ]);

  validCredentials(username: string, password: string) {
    console.log(`stored password hash: ${this.credentialsList.get(username)?.passwordHash}`
      + `\ngiven password hash: ${this.getPasswordHash(password)}`);
    return this.credentialsList.get(username)?.passwordHash == this.getPasswordHash(password);
  }

  createUser(firstName: string, lastName: string, username: string, password: string, email: string) {
    this.credentialsList.set(username, {
      firstName: firstName,
      lastName: lastName,
      username: username,
      passwordHash: this.getPasswordHash(password),
      email: email,
      diaryEntries: []
    });
    console.log(this.credentialsList.get(username)?.passwordHash);
  }

  private getPasswordHash(password: string) {
    return CryptoJS.SHA256(password).toString();
  }
}
