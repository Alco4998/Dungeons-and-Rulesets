import { Character } from "../character/models/character";

export class Campaign {
    campaign_id!: number;
    name!: string;
    description!: string;
    DMNotes?: string;
    players?: Character[];
    // Rules
    // NPCs
    // Encounters
}