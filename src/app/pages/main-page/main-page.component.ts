import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiaryEntry } from 'src/app/models/diary-entry.model';
import { UserSessionService } from 'src/app/services/user-session.service';
import { CreateDiaryEntryComponent } from '../../components/create-diary-entry/create-diary-entry.component';
import { Router } from '@angular/router';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})

export class MainPageComponent implements OnInit {
  memoryForToday!: DiaryEntry;

  constructor(public dialog: MatDialog, public userService: UserSessionService,
    public router: Router) {}

  ngOnInit() {
    if (this.userService.getCurrUser() == null) {
      this.router.navigateByUrl("/");
    }
    const entries = this.userService.getCurrUser()?.diaryEntries;
    const today = new Date();
    entries?.forEach(entry => {
      if (entry.date != today &&
          today.getFullYear() - entry.date.getFullYear() == 1 &&
          entry.date.getMonth() == today.getMonth() &&
          entry.date.getDate() == today.getDate()) {
        this.memoryForToday = entry;
      }
    })
  }

  openCreateDiaryEntry() {
    this.dialog.open(CreateDiaryEntryComponent, {
      width: "800px",
      enterAnimationDuration: "100ms",
      exitAnimationDuration: "100ms"
    });
  }
}
