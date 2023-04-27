import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Character } from '../../character/character';
import { CharacterDataService } from '../../character/character-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.characters$ = characterDataService.getAllCharacters$().pipe(
      map((response) => response.items),
    )
  }
}
