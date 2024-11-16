import { inject, Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FirebaseApp } from '@firebase/app';
import { FirestoreDbService } from './firestore-db.service';
import { PubgApiService } from './pubg-api.service';

const firebaseConfig = {
  apiKey: "AIzaSyDaJY0ZlB0_ZcdIw7iPTNQjD4mrh6i8ifo",
  authDomain: "shelter-tools.firebaseapp.com",
  projectId: "shelter-tools",
  storageBucket: "shelter-tools.firebasestorage.app",
  messagingSenderId: "667870815788",
  appId: "1:667870815788:web:9c6a0c81661e1d0f135389"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseAppService {
  private app!: FirebaseApp;
  private dbService = inject(FirestoreDbService);
  private pubgApiService = inject(PubgApiService)

  init(): void {
    this.app = initializeApp(firebaseConfig);
    this.dbService.init(this.application);
    this.pubgApiService.init();
  }

  get application(): FirebaseApp {
    return this.app;
  }
}
