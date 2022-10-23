import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiaryEntry } from 'src/app/models/diary-entry.model';
import { DiaryEntriesService } from 'src/app/services/diary-entries.service';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.css"]
})

export class EntryListComponent implements OnInit, OnDestroy {
  diaryEntries: DiaryEntry[] = [];
  private diaryEntriesSub = new Subscription();

  constructor(public diaryEntriesService: DiaryEntriesService, public userService: UserSessionService) {}

  ngOnInit() {
    this.diaryEntries = this.diaryEntriesService.getDiaryEntries(this.userService.getCurrUser()!);
    this.diaryEntriesSub = this.diaryEntriesService.getDiaryEntriesUpdated().subscribe((diaryEntries: DiaryEntry[]) => {
      this.diaryEntries = [...diaryEntries];
    });
    console.log(this.diaryEntries);
  }

  ngOnDestroy() {
    this.diaryEntriesSub.unsubscribe();
  }
}
