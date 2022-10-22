import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DiaryEntry } from 'src/app/models/diary-entry.model';

@Component({
  selector: "app-create-diary-entry",
  templateUrl: "./create-diary-entry.component.html",
  styleUrls: ["./create-diary-entry.component.css"]
})

export class CreateDiaryEntryComponent {
  createdDiaryEntry!: DiaryEntry;

  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  submitDiaryEntry(form: NgForm) {
    this.createdDiaryEntry = {
      subject: form.value.subject,
      content: form.value.content,
      date: new Date()
    };
    console.log(this.createdDiaryEntry);
    form.reset("subject");
    form.reset("content");
  }
}
