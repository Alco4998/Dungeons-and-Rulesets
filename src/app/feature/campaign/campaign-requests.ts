import { environment } from "src/environments/environment";

export class CampaignRequest {
    public static module = `${environment.BaseUrl}/campaign`;
    public static create =  `${CampaignRequest.module}/create`;
    public static readAll =  `${CampaignRequest.module}/allcampaigns`;
    public static read =  `${CampaignRequest.module}/campaign/`;
    public static readCharacters =  `${CampaignRequest.module}/characters/`;
    public static update =  `${CampaignRequest.module}/campaign/`;
    public static delete =  `${CampaignRequest.module}/campaign/`;
}