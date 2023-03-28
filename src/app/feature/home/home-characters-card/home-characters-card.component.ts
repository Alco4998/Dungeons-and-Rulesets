import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Character } from '../../character/character';
import { CharacterDataService } from '../../character/character-data.service';

@Component({
  selector: 'app-home-characters-card',
  templateUrl: './home-characters-card.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeCharactersCardComponent {
  public characters: Character[];

  constructor(
    characterDataService: CharacterDataService,
  ) { 
    this.characters = characterDataService.getAllCharacters();
  }
}
