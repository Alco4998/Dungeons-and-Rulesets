import { environment } from "src/environments/environment";

export class CharacterRequest {
    public static module = `${environment.BaseUrl}/character`;
    public static create = `${CharacterRequest.module}/create`;
    public static read = `${CharacterRequest.module}/character/`;
    public static update = `${CharacterRequest.module}/character/`;
    public static delete = `${CharacterRequest.module}/character/`;
    public static readAll = `${CharacterRequest.module}/allcharacters`;
    public static ability = `${CharacterRequest.module}/abilities/`;
}