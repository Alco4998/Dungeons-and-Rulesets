import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OracleResponse } from '../../Common/data-service/response';
import { RestHelperService } from 'src/app/Common/data-service/rest-helper.service';
import { map } from 'rxjs/operators';
import { Character } from './models/character';
import { CharacterRequest } from './models/character-requests';

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
        map((items) => {
          if (items) {
            return items[0];
          }
          return;
        }),
      )
  }
}
