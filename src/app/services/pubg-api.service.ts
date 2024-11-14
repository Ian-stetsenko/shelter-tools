import { inject, Injectable } from '@angular/core';
import { FirestoreDbService } from './firestore-db.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player, PubgApiMatch, PubgApiPlayer } from '../interfaces/pubg.interfaces';
import { filter, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubgApiService {
  private readonly dbService = inject(FirestoreDbService);
  private readonly httpService = inject(HttpClient);
  private readonly PUBG_API_URL = 'https://api.pubg.com/shards/steam'
  private PUBG_API_KEY: string

  private readonly httpHeaders = new HttpHeaders({
    'Accept': 'application/vnd.api+json'
  })

  // TODO: add logic to check with first request if there is an api key setup if there is no key, request api key first

  init(): void {
    this.dbService.getPubgAPIKey().subscribe(key => {
      this.PUBG_API_KEY = key;
      this.httpHeaders.set('Authorization', `Bearer ${this.PUBG_API_KEY}`);
    });
  }

  getLastCommonMatch(players: Player[]): Observable<PubgApiMatch> {
    return this.httpService.get(`${this.PUBG_API_URL}/players?filter[playerIds]=${this.getPlayersIdsAsString(players)}`, { headers: this.httpHeaders })
      .pipe(
        map((players: PubgApiPlayer[] ) => {
          return players[0]['data']['relationships']['matches']['data'][0].id
        }),
        switchMap((id) => this.getMatchById(id))
      )
  }

  getMatchById(id: string): Observable<PubgApiMatch> {
    return this.httpService.get(`${this.PUBG_API_URL}/matches/${id}`, { headers: this.httpHeaders }) as Observable<PubgApiMatch>
  }

  private getPlayersIdsAsString(players: Player[]): string {
    return players.reduce((ids, player) => {
      return player?.pubgAccountId ? [...ids, player.pubgAccountId] : [...ids];
    }, []).join(',')
  }
}
