export class Character {
    character_id!: number
    campaignId!: number
    name!: string
    // Character
    characterExtras?: CharacterExtra
    characterStatistics?: CharacterStatistics
    inventory?: CharacterInvetory
}