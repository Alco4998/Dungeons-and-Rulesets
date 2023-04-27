import { Injectable } from '@angular/core';
import { Character as Character } from './character';
import { HttpClient } from '@angular/common/http';
import { characterRequest } from './character-requests';
import { OracleResponse } from '../data-service/response';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters$() {
    return this.http.get<OracleResponse<Character>>(characterRequest.readAll)
  }

  public getCharacterById$(character_Id: number) {
    return this.http.get<OracleResponse<Character>>(characterRequest.read + character_Id.toString())
  }
}
