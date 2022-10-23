import { Component, Input } from '@angular/core';
import { DiaryEntry } from 'src/app/models/diary-entry.model';

@Component({
  selector: "app-memory",
  templateUrl: "./memory.component.html",
  styleUrls: ["./memory.component.css"]
})

export class MemoryComponent {
  @Input() diaryEntryMemory: DiaryEntry = {
    subject: "",
    content: "",
    date: new Date()
  };
}
