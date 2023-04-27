export class characterRequest {
    public static module = "https://g6561517105460a-rjp2y0z28teb18xs.adb.ap-sydney-1.oraclecloudapps.com/ords/dungeonsandrulsets/character";
    public static get create()  { return this.module + "/create" }
    public static get read()    { return this.module + "/character/" }
    public static get update()  { return this.module + "/character/" }
    public static get delete()  { return this.module + "/character/" }
    public static get readAll() { return this.module + "/allcharacters" }
}