import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterDataService } from '../character-data.service';

@Component({
  selector: 'app-character-link',
  templateUrl: './character-link.component.html',
  styleUrls: ['./character-link.component.scss']
})
export class CharacterLinkComponent implements OnInit {
  @Input() characterId?: number;
  @Input() character?: Character;

  constructor(
    characterDataService: CharacterDataService
  ) { 
    if (this.character) {
      this.characterId = this.character.characterId
    } else if (this.characterId) {
      this.character = characterDataService.getCharacterById(this.characterId)
    } else {
      console.error("character nor characterId Not defined");
      
    }
  }

  ngOnInit(): void {
  }

}
