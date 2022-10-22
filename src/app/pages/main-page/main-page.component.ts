import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDiaryEntryComponent } from '../../components/create-diary-entry/create-diary-entry.component';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})

export class MainPageComponent {
  constructor(public dialog: MatDialog) {}

  openCreateDiaryEntry() {
    this.dialog.open(CreateDiaryEntryComponent, {
      width: "800px",
      enterAnimationDuration: "100ms",
      exitAnimationDuration: "100ms"
    });
  }
}
