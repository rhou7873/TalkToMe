import { Component } from '@angular/core';
import { DiaryEntry } from '../../diary-entry.model';
import { DiaryEntryComponent } from '../diary-entry/diary-entry.component';

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.css"]
})

export class EntryListComponent {
  diaryEntryList!: DiaryEntry[];

}
