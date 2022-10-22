import { DiaryEntry } from './diary-entry.model';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  entries: DiaryEntry[];
}
