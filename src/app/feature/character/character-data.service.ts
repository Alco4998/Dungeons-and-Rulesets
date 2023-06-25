import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHelperService } from 'src/app/Common/data-service/rest-helper.service';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Character } from './models/character';
import { CharacterRequest } from './models/character-requests';
import { Ability } from './models/ability'

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  constructor(
    public restHelperService: RestHelperService,
    private http: HttpClient
  ) { }

  public getAllCharacters() {
    return this.restHelperService.get<Character>(CharacterRequest.readAll)
  }

  public getCharacterById(id: number) {
    return this.restHelperService.get<Character>(CharacterRequest.read + id.toString())
      .pipe(
        map((items) => items ? items[0] : undefined),
        map((character) => { if (!character) { throw new Error("Cannot Find Character") } else { return character } }),
        // withLatestFrom(this.restHelperService.get<Ability>(CharacterRequest.ability + id.toString())),
        switchMap((character) => this.restHelperService.get<Ability>(CharacterRequest.ability + character.character_id.toString()).pipe(
          tap((character) => console.log(character)),
          map((abilities) => { character!.abilities = abilities; return character })
        )),
      )
  }
}
