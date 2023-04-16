import { Character } from "../character/character";

export class Campaign {
    campaignId!: number;
    name!: string;
    description!: string;
    DMNotes?: string;
    players?: Character[];
    // Rules
    // NPCs
    // Encounters
}