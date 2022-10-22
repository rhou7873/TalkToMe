import { DiaryEntry } from './diary-entry.model';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
  email: string;
  diaryEntries: DiaryEntry[];
}
