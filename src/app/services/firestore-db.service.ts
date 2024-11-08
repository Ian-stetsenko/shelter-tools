import { inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@firebase/app';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDbService {
  private db

  init(app: FirebaseApp): void {
    this.db = getFirestore(app);
  }
}
