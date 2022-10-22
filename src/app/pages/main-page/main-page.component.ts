import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiaryEntryPageComponent } from '../diary-entry-page/diary-entry-page.component';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})

export class MainPageComponent {
  constructor(public dialog: MatDialog) {}

  openCreateDiaryEntry() {
    this.dialog.open(DiaryEntryPageComponent, {
      enterAnimationDuration: "100ms",
      exitAnimationDuration: "100ms"
    });
  }
}
