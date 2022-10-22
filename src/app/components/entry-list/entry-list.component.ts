import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiaryEntry } from 'src/app/models/diary-entry.model';
import { MemoryComponent } from '../../components/memory/memory.component';
import { DiaryEntriesService } from 'src/app/services/diary-entries.service';

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.css"]
})

export class EntryListComponent implements OnInit, OnDestroy {
  diaryEntries: DiaryEntry[] = [];
  private diaryEntriesSub = new Subscription();

  constructor(public diaryEntriesService: DiaryEntriesService) {}

  ngOnInit() {
    this.diaryEntries = this.diaryEntriesService.getDiaryEntries();
    this.diaryEntriesSub = this.diaryEntriesService.getDiaryEntriesUpdated().subscribe((diaryEntries: DiaryEntry[]) => {
      this.diaryEntries = diaryEntries;
    });
    console.log(this.diaryEntries);
  }

  ngOnDestroy() {
    this.diaryEntriesSub.unsubscribe();
  }
}
