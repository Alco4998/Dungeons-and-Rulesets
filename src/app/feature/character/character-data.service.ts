import { Injectable } from '@angular/core';
import { Character as Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private data: Character[] = [
    {
      characterId: 1,
      campaignId: 1,
      ownerId: 1,
      name: "Volksa"
    },
    {
      characterId: 2,
      campaignId: 2,
      ownerId: 1,
      name: "Warven"
    }
  ]

  constructor() { }

  public getAllCharacters() {
    return this.data;
  }

  public getCharacterById(characterId: number) {
    return this.data.find(c => c.characterId == characterId);
  }

  public getCharactersByCampaignId(campaignId: number) {
    return this.data.filter(c => c.campaignId == campaignId);
  }
}
