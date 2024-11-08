import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Player } from '../../../../interfaces/pubg.interfaces';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-team-cards',
  standalone: true,
  imports: [MatChipsModule, CommonModule, MatCardModule],
  templateUrl: './team-cards.component.html',
  styleUrl: './team-cards.component.scss'
})
export class TeamCardsComponent implements OnChanges {
  @Input() teams: Player[][];

  teamNames = []

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.generateTeamNames();
  }

  generatePUBGTeamName(): string {
    // Lists of PUBG-themed adjectives, maps, and items
    const pubgMaps = [
      'Erangel', 'Miramar', 'Sanhok', 'Vikendi', 'Rondo', 'Taego'
    ];

    const funnyAdjectivesForMaps = [
      'Campers', 'Looters', 'Sneaky Squad', 'Hide-and-Seek Masters',
      'Survivors', 'Kings', 'Snakes', 'Airdropers', 'Raiders', 'Drippers'
    ];

    const generalAdjectives = [
      'Red Zone', 'Looted', 'Flanking', 'Stealthy', 'Airdropers', 'Explosive',
      'Crouching', 'Prone', 'Ambushing', 'Sniping', 'Suppressing', 'Fragging',
      'Pan-frying', 'Helmetless', 'Fearless'
    ];

    const pubgItems = [
      'AWM', 'Pan', 'Kar98', 'M416', 'Molotov', 'Level 3 Helmet',
      'First Aid Kit', 'Smoke Grenade', 'UMP45', 'S12K', 'Tommy Gun',
      'Frag Grenade', 'Groza', '8x Scope', 'Flare Gun', 'Backpack',
      'Ghillie Suit', 'Energy Drink', 'Crossbow', 'Red Zone Survivors', 'Noob Squad',
      'Chicken Eaters', 'Grass Snakes'
    ];

    // Determine whether to use a map-based name or an item-based name
    const isMapTeamName = Math.random() < 0.5; // 50% chance to choose a map-based name

    let teamName = '';

    if (isMapTeamName) {
      // Choose a map and a funny descriptor for that map
      const randomMap = pubgMaps[Math.floor(Math.random() * pubgMaps.length)];
      const randomFunnyAdjective = funnyAdjectivesForMaps[Math.floor(Math.random() * funnyAdjectivesForMaps.length)];
      teamName = `${randomMap} ${randomFunnyAdjective}`;
    } else {
      // Choose a PUBG item
      const randomItem = pubgItems[Math.floor(Math.random() * pubgItems.length)];
      if (randomItem.includes(' ')) {
        // If the item has multiple words, use it as is
        teamName = randomItem;
      } else {
        // If the item has only one word, pair it with a general adjective
        const randomAdjective = generalAdjectives[Math.floor(Math.random() * generalAdjectives.length)];
        teamName = `${randomAdjective} ${randomItem}`;
      }
    }

    return teamName;
  }

  private generateTeamNames(): void {
    this.teamNames = this.teams.map(() => this.generatePUBGTeamName());
  }
}
