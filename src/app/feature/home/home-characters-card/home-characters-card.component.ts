import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CharacterDataService } from '../../character/character-data.service';
import { Observable } from 'rxjs';
import { Character } from '../../character/models/character';

@Component({
  selector: 'app-home-characters-card',
  templateUrl: './home-characters-card.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeCharactersCardComponent {
  public characters$: Observable<Character[] | undefined>;

  constructor(
    characterDataService: CharacterDataService,
  ) {
    this.characters$ = characterDataService.getAllCharacters()
  }
}
