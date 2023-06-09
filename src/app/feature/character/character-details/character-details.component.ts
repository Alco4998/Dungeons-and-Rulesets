import { Component, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from '../character-data.service';
import { Character } from '../models/character';

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
    private route: ActivatedRoute
  ) { };

  ngOnInit() {
    const character_Id = this.route.snapshot.params["id"]
    this.characterDataService.getCharacterById(character_Id)
      .subscribe((items) => this.character = items);
  }
}
