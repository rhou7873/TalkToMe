import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-diary-entry-page",
  templateUrl: "./diary-entry-page.component.html",
  styleUrls: ["./diary-entry-page.component.css"]
})

export class DiaryEntryPageComponent {
  constructor(public dialogRef: MatDialogRef<DiaryEntryPageComponent>) {}
}
