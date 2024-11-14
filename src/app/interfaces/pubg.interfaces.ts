export interface Player {
  position: number
  name: string
  score: number
  id?: number
  pubgAccountId?: string
}

export interface TeamsConfiguration {
  teams: Player[][];
  teamNames: string[];
}

export interface PUBGTeam {
  name: string;
  players: Player[];
  score: number;
  kills: number;
  placement: number;
  participants: IPubgMatchParticipant[]
}

export interface PubgApiPlayerMatch {
  type: string;
  id: string;
}

export interface PubgApiPlayerRelationships {
  assets: {
    data: any[]; // Adjust type based on actual data structure if known
  };
  matches: {
    data: PubgApiPlayerMatch[];
  };
}

export interface PubgApiPlayerAttributes {
  shardId: string;
  patchVersion: string;
  banType: string;
  clanId: string;
  name: string;
  stats: any | null; // Adjust type if stats structure is known
  titleId: string;
}

export interface PubgApiPlayerData {
  type: string;
  id: string;
  attributes: PubgApiPlayerAttributes;
  relationships: PubgApiPlayerRelationships;
  links: {
    schema: string;
    self: string;
  };
}

export interface PubgApiPlayer {
  data: PubgApiPlayerData;
  links: {
    self: string;
  };
  meta: any; // Adjust type if meta structure is known
}

export interface PubgApiMatchDataAttributes {
  duration: number;
  stats: any | null;
  gameMode: string;
  titleId: string;
  shardId: string;
  tags: any | null;
  mapName: string;
  createdAt: string;
  seasonState: string;
  isCustomMatch: boolean;
  matchType: string;
}

export interface PubgApiMatchRelationshipItem {
  type: string;
  id: string;
}

export interface MatchRelationships {
  rosters: {
    data: PubgApiMatchRelationshipItem[];
  };
  assets: {
    data: PubgApiMatchRelationshipItem[];
  };
}

export interface PubgApiMatchData {
  type: string;
  id: string;
  attributes: PubgApiMatchDataAttributes;
  relationships: MatchRelationships;
  links: {
    self: string;
    schema: string;
  };
}

export interface PubgApiMatch {
  data: PubgApiMatchData;
  included: Array<PubgApiMatchParticipant | PubgApiMatchRoster | PubgApiMatchAsset>;
  links: {
    self: string;
  };
  meta: any;
}

export interface IPubgMatch {
  pubgApiMatchId: string;
  participants: IPubgMatchParticipant[]
}

export interface IPubgMatchParticipant {
  name: string;
  id: number;
  teamName: string;
  kills: number;
  score: number;
  placement: number
}

// Subtypes for the `included` array items
export interface PubgApiMatchParticipantAttributesStats {
  DBNOs: number;
  assists: number;
  boosts: number;
  damageDealt: number;
  deathType: string;
  headshotKills: number;
  heals: number;
  killPlace: number;
  killStreaks: number;
  kills: number;
  longestKill: number;
  name: string;
  playerId: string;
  revives: number;
  rideDistance: number;
  roadKills: number;
  swimDistance: number;
  teamKills: number;
  timeSurvived: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;
  winPlace: number;
}

interface ParticipantAttributes {
  stats: PubgApiMatchParticipantAttributesStats;
  actor: string;
  shardId: string;
}

export interface PubgApiMatchParticipant {
  type: "participant";
  id: string;
  attributes: ParticipantAttributes;
}

interface PubgApiMatchRosterAttributesStats {
  rank: number;
  teamId: number;
}

interface PubgApiMatchRosterAttributes {
  stats: PubgApiMatchRosterAttributesStats;
  won: string;
  shardId: string;
}

interface PubgApiMatchRosterRelationships {
  team: {
    data: any | null; // Adjust if team structure is known
  };
  participants: {
    data: PubgApiMatchRelationshipItem[];
  };
}

interface PubgApiMatchRoster {
  type: "roster";
  id: string;
  attributes: PubgApiMatchRosterAttributes;
  relationships: PubgApiMatchRosterRelationships;
}

interface PubgApiMatchAssetAttributes {
  createdAt: string;
  URL: string;
  name: string;
  description: string;
}

interface PubgApiMatchAsset {
  type: "asset";
  id: string;
  attributes: PubgApiMatchAssetAttributes;
}


