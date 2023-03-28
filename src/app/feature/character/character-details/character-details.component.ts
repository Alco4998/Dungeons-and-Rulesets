import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';
import { CharacterDataService } from '../character-data.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  public character?: Character;
  public isEditing = false;

  constructor(
    private characterDataService: CharacterDataService,
    route: ActivatedRoute
  ) {
    const characterId = route.snapshot.params["id"]
    this.character = this.characterDataService.getCharacterById(characterId as number)
  };
}
