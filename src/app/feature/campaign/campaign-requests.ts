export class campaignRequest {
    public static module = "https://g6561517105460a-rjp2y0z28teb18xs.adb.ap-sydney-1.oraclecloudapps.com/ords/dungeonsandrulsets/campaign";
    public static get create()  { return this.module + "/create" }
    public static get readAll() { return this.module + "/allcampaigns" }
    public static get read()    { return this.module + "/campaign/" }
    public static get readCharacters()    { return this.module + "/characters/" }
    public static get update()  { return this.module + "/campaign/" }
    public static get delete()  { return this.module + "/campaign/" }
}