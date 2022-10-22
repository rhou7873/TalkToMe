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
