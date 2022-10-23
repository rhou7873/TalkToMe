import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DiaryEntry } from '../models/diary-entry.model';
import { User } from '../models/user.model';

@Injectable({providedIn: "root"})
export class DiaryEntriesService {
  private diaryEntries: DiaryEntry[] = [];
  private onDiaryEntriesUpdated = new Subject<DiaryEntry[]>();

  getDiaryEntries(user: User) {
    this.diaryEntries = user.diaryEntries;
    this.diaryEntries.sort((a, b) => b.date.getTime() - a.date.getTime()); // ensure latest entries at the top
    return [...this.diaryEntries];
  }

  getDiaryEntriesUpdated() {
    return this.onDiaryEntriesUpdated.asObservable();
  }

  addDiaryEntry(user: User, subject: string, content: string, date: Date) {
    user.diaryEntries.push({
      subject: subject,
      content: content,
      date: date
    });
    user.diaryEntries.sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    })
    this.onDiaryEntriesUpdated.next([...user.diaryEntries]);
  }
}
