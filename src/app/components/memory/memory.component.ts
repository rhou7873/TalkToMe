import { Component } from '@angular/core';
import { DiaryEntry } from '../../diary-entry.model';

@Component({
  selector: "app-memory",
  templateUrl: "./memory.component.html",
  styleUrls: ["./memory.component.css"]
})

export class MemoryComponent {
  diaryEntryMemory: DiaryEntry = {
    subject: "today was super tiring",
    content: "Today, I woke up at 6:00 am to start coding for this project at HackGT. I tried sleeping a little " +
      "longer to get myself in the right headspace, but I was just too anxious to get going on the project. I worked " +
      "super hard all day on this, and now I'm mentally drained.",
    date: new Date(2022, 8, 22),
  };
}
