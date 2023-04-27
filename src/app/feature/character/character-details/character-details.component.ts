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
    private route: ActivatedRoute
  ) {  };
  
  ngOnInit(): void {
    const character_Id = this.route.snapshot.params["id"]
    this.characterDataService.getCharacterById$(character_Id)
    .subscribe((response) => {
      if (response.items) {
        this.character = response.items[0]
      }
    });
  }
}
