import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateDiaryEntryComponent } from './components/create-diary-entry/create-diary-entry.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { MemoryComponent } from './components/memory/memory.component';
import { DiaryEntryComponent } from './components/diary-entry/diary-entry.component';

import { DiaryEntriesService } from './services/diary-entries.service';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { DiaryEntryPageComponent } from './pages/diary-entry-page/diary-entry-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateDiaryEntryComponent,
    MainPageComponent,
    DiaryEntryPageComponent,
    EntryListComponent,
    MemoryComponent,
    DiaryEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
