import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-create-diary-entry",
  templateUrl: "./create-diary-entry.component.html",
  styleUrls: ["./create-diary-entry.component.css"]
})

export class CreateDiaryEntryComponent {
  subject: string = "";
  content: string = "";

  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  submitDiaryEntry() {

  }
}
