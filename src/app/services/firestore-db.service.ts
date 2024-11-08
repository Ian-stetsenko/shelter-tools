import { inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@firebase/app';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
import { Firestore } from '@firebase/firestore';
import { from, map, Observable } from 'rxjs';
import { Player } from '../interfaces/pubg.interfaces';

enum PUBG_COLLECTIONS {
  Players = 'shelter_pubg_players'
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreDbService {
  private db!: Firestore

  init(app: FirebaseApp): void {
    this.db = getFirestore(app);
  }

  getPlayers(): Observable<Player[]> {
    return from(
      getDocs(
        collection(this.db, PUBG_COLLECTIONS.Players)
      )
    ).pipe(
      map((snapshot) => {
        const players = [];

        snapshot.forEach((doc) => players.push(doc.data()))

        return players;
      })
    )
  }

  addPlayer(player: Player): Observable<void> {
    const id = this.generateId();

    try {
      return from(
        setDoc(
          doc(this.db, PUBG_COLLECTIONS.Players, `${id}`),
          {
            id,
            ...player
          } as any
        )
      ) as any
    } catch (e) {
      return e;
    }
  }

  private generateId(): number {
    return Math.floor(100000000 + Math.random() * 900000000);
  }

  // date
  // id
  // teams -> { placement, players: [ { id, kills } ]
}
