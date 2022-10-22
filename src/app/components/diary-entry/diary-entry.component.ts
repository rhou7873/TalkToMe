import { Component, Input } from '@angular/core';
import { DiaryEntry } from '../../models/diary-entry.model';

@Component({
  selector: "app-diary-entry",
  templateUrl: "./diary-entry.component.html",
  styleUrls: ["./diary-entry.component.css"]
})

export class DiaryEntryComponent {
  @Input() diaryEntry: DiaryEntry = {
    subject: "",
    content: "",
    date: new Date()
  }
}
