import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DiaryEntry } from 'src/app/models/diary-entry.model';
import { DiaryEntriesService } from '../../services/diary-entries.service';
import { UserSessionService } from 'src/app/services/user-session.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-create-diary-entry",
  templateUrl: "./create-diary-entry.component.html",
  styleUrls: ["./create-diary-entry.component.css"]
})

export class CreateDiaryEntryComponent {
  createdDiaryEntry!: DiaryEntry;

  constructor(public dialogRef: MatDialogRef<CreateDiaryEntryComponent>, private _ngZone: NgZone,
    public diaryEntriesService: DiaryEntriesService, public userService: UserSessionService) {}

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  submitDiaryEntry(form: NgForm) {
    if (form.value.subject.length > 0 && form.value.content.length > 0) {
      this.diaryEntriesService.addDiaryEntry(this.userService.getCurrUser()!, form.value.subject,
        form.value.content, new Date());
      this.dialogRef.close();
      console.log(this.userService.getCurrUser());
    }
  }
}
