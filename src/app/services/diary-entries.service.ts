import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DiaryEntry } from '../models/diary-entry.model';

@Injectable({providedIn: "root"})
export class DiaryEntriesService {
  private diaryEntries: DiaryEntry[] = [

    {
      subject: "today was super tiring",
      content: "Today, I woke up at 6:00 am to start coding for this project at HackGT. I tried sleeping a little " +
        "longer to get myself in the right headspace, but I was just too anxious to get going on the project. I worked " +
        "super hard all day on this, and now I'm mentally drained.",
      date: new Date(2022, 9, 19),
    },
    {
      subject: "today was super tiring",
      content: "Today, I woke up at 6:00 am to start coding for this project at HackGT. I tried sleeping a little " +
        "longer to get myself in the right headspace, but I was just too anxious to get going on the project. I worked " +
        "super hard all day on this, and now I'm mentally drained.",
      date: new Date(2022, 9, 20),
    },
    {
      subject: "today was super tiring",
      content: "Today, I woke up at 6:00 am to start coding for this project at HackGT. I tried sleeping a little " +
        "longer to get myself in the right headspace, but I was just too anxious to get going on the project. I worked " +
        "super hard all day on this, and now I'm mentally drained.",
      date: new Date(2022, 9, 21),
    },
    {
      subject: "today was super tiring",
      content: "Today, I woke up at 6:00 am to start coding for this project at HackGT. I tried sleeping a little " +
        "longer to get myself in the right headspace, but I was just too anxious to get going on the project. I worked " +
        "super hard all day on this, and now I'm mentally drained.",
      date: new Date(2022, 9, 22),
    }
  ];
  private onDiaryEntriesUpdated = new Subject<DiaryEntry[]>();

  getDiaryEntries() {
    this.diaryEntries.sort((a, b) => b.date.getTime() - a.date.getTime()); // ensure latest entries at the top
    return [...this.diaryEntries];
  }

  getDiaryEntriesUpdated() {
    return this.onDiaryEntriesUpdated.asObservable();
  }

  addDiaryEntry(subject: string, content: string, date: Date) {
    this.diaryEntries.push({
      subject: subject,
      content: content,
      date: date
    });
    this.onDiaryEntriesUpdated.next([...this.diaryEntries]);
  }
}
