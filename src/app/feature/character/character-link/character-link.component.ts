import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CharacterDataService } from '../character-data.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-link',
  templateUrl: './character-link.component.html',
  styleUrls: ['./character-link.component.scss']
})
export class CharacterLinkComponent {
  @Input() character_Id?: number;
  @Input() character?: Character;

  constructor(
    private characterDataService: CharacterDataService
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.character) {
      this.character_Id = this.character_Id
    }

    if (changes.character_Id) {
      this.characterDataService.getCharacterById(this.character_Id!)
        .subscribe((items) => this.character = items);
    }
  }
}
