import { Component, OnInit } from '@angular/core';
import { CreateDiaryEntryComponent } from 'src/app/components/create-diary-entry/create-diary-entry.component';
import { DiaryEntriesService } from '../../services/diary-entries.service';
import { DiaryEntry } from '../../models/diary-entry.model';

@Component({
  selector: "app-diary-entry-page",
  templateUrl: "./diary-entry-page.component.html",
  styleUrls: ["./diary-entry-page.component.css"]
})

export class DiaryEntryPageComponent {

}
