import { Injectable } from '@angular/core';
import { Character as Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private data: Character[] = [
    {
      characterId: 1,
      name: "Volksa"
    },
    {
      characterId: 2,
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
}
