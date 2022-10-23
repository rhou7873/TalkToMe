import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';
import { User } from "../models/user.model";

@Injectable({providedIn: "root"})
export class CredentialsService {
  private credentialsList = new Map<string, User>([
    ["user1", {
      firstName: "Ryan",
      lastName: "Hou",
      username: "user1",
      passwordHash: this.getPasswordHash("hello"),
      email: "rhou7873@gmail.com",
      diaryEntries: [
        {
          subject: "I hated it today",
          content: "Today, I woke up at 6:00 am to finish a project for my class. I stressed myself out the whole day " +
            "trying to complete the assignment, not realizing that I was already late with it. After I realized that, I checked " +
            "my gradebook and found out I failed an exam for another class. Quite a rough day...",
          date: new Date(2021, 9, 23),
        },
        {
          subject: "Felt super productive today",
          content: "Today kinda started out iffy. I was supposed to call David at 9 am, and " +
          "I woke up at 8:30 for the call, but he didn't even pick up (what a shocker). It's ok " +
          "though because it got me up early and forced me to start the day productive. My " +
          "entrepreneurship got canceled since my professor got COVID, but I still had to meet "+
          "with my team, so it wasn't an unproductive class.",
          date: new Date(2022, 9, 17),
        },
        {
          subject: "Things are pretty good right now",
          content: "I'm gettig increasingly more excited to fly out to Atlanta this weekend for " +
          "HackGT. I love to attend hackathons, and I'm also especially excited to see my friend " +
          "Chris who goes to GT. I also got my grade for my big comp arch exam and I got a 96, way " +
          "above the average. I hope I can get ahead on my work so I can enjoy this weekend.",
          date: new Date(2022, 9, 18),
        },
        {
          subject: "Tomorrow is the day",
          content: "Not gonna lie, I've been slacking today because I'm super excited to go to Atlanta " +
          "tomorrow. Wednesdays are also my chill day, meaning I only have a few classes and no " +
          "extracurriculuar commitments. I still gotta pack though...",
          date: new Date(2022, 9, 19),
        },
        {
          subject: "I'm so tired...but having a great time",
          content: "I was super excited to go to Atlanta today, but I also was so tired all day. I had to " +
          "wake up at 5:30 am to catch my flight, and had to pay $20 for an Uber to the airport (wasn't the " +
          "greatest start to the day). The flight was pretty good though, since the person in the middle of my " +
          "row moved up so I had more space. It was also super awesome finally getting to see Chris again.",
          date: new Date(2022, 9, 20),
        },
      ]
    }],
    ["user2", {
      firstName: "Chris",
      lastName: "Cheung",
      username: "user2",
      passwordHash: this.getPasswordHash("hello"),
      email: "crisc25@gmail.com",
      diaryEntries: [
        { // hardcoded diary entries for now
          subject: "today was super tiring",
          content: "Today, I woke up at 6:00 am to start coding for this project at HackGT. I tried sleeping a little " +
            "longer to get myself in the right headspace, but I was just too anxious to get going on the project. I worked " +
            "super hard all day on this, and now I'm mentally drained.",
          date: new Date(2022, 9, 17),
        },
        {
          subject: "I got the job! :(",
          content: "Dear diary, I got a co-op offer for the company I interviewed with last week.",
          date: new Date(2022, 9, 18),
        },
        {
          subject: "Doubts",
          content: "Dear diary, I'm having second doubts about this offer because I really want to " +
            "take classes in the Spring and would prefer to work in the summer and take Summer classes " +
            "for two consecutive summers.",
          date: new Date(2022, 9, 19),
        },
        {
          subject: "More doubts",
          content: "Dear diary, I miss home and am stressed out at school. Now I also have to consider " +
          "this co-op offer and give a response by Wednesday after they just gave me the decision THursday. " +
          "I'm thinkin gof declining the offer.",
          date: new Date(2022, 9, 20),
        },
        {
          subject: "Opportunity Costs",
          content: "Dear diary, I know if I decline this co-op offer I will have passed up on a secure 3 work " +
          "term work experience. However, I also want to keep my doors open for other internships, but with this " +
          "co-op I cannot do it. I am also waiting on other interview results to get back to me and don't want to " +
          "be hasty in my decision making especially when I can definitely do better than the company I would be " +
          "potentially working at.",
          date: new Date(2022, 9, 21),
        },
        {
          subject: "Crisis",
          content: "Help...",
          date: new Date(2022, 9, 22),
        },
      ]
    }]
  ]);

  validCredentials(username: string, password: string) {
    console.log(`stored password hash: ${this.credentialsList.get(username)?.passwordHash}`
      + `\ngiven password hash: ${this.getPasswordHash(password)}`);
    return this.credentialsList.get(username)?.passwordHash == this.getPasswordHash(password);
  }

  createUser(firstName: string, lastName: string, username: string, password: string, email: string): User {
    let newUser: User = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      passwordHash: this.getPasswordHash(password),
      email: email,
      diaryEntries: []
    }
    this.credentialsList.set(newUser.username, newUser);
    return newUser;
  }

  private getPasswordHash(password: string): string {
    return CryptoJS.SHA256(password).toString();
  }

  getUser(username: string): User {
    return this.credentialsList.get(username)!;
  }

  showUsers() {
    this.credentialsList.forEach(user => {
      console.log(user);
    });
    console.log(this.credentialsList.size);
  }
}
