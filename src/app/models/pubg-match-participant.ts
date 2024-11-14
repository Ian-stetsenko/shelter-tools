import { IPubgMatchParticipant } from '../interfaces/pubg.interfaces';

export class PubgMatchParticipant implements IPubgMatchParticipant {
  id: number = 0;
  kills: number = 0;
  name: string = '';
  placement: number = 9;
  score: number = 0;
  teamName: string = '';

  constructor(participant?: IPubgMatchParticipant) {
    if (participant) this.setData(participant);
  }

  setData(participant: IPubgMatchParticipant) {
    Object.assign(this as any, participant);
  }
}
