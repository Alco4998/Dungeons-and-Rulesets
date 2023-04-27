import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterDataService } from '../character-data.service';

@Component({
  selector: 'app-character-link',
  templateUrl: './character-link.component.html',
  styleUrls: ['./character-link.component.scss']
})
export class CharacterLinkComponent implements OnInit {
  @Input() character_Id?: number;
  @Input() character?: Character;

  constructor(
    private characterDataService: CharacterDataService
  ) { 
    if (this.character) {
      this.character_Id = this.character.character_id
    } else {
      console.error("character nor character_Id Not defined");
    }
  }

  ngOnInit(): void {
    this.characterDataService.getCharacterById$(this.character_Id!)
    .subscribe((response) => {
      if (response.items) {
        this.character = response.items[0]
      }
    });
  }

}
