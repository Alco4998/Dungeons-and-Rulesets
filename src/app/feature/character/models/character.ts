import { Ability } from "./ability"

export class Character {
    character_id!: number
    campaignId!: number
    name!: string
    abilities?: Ability[]
    // Character details WIP
    /* characterExtras?: CharacterExtra
    characterStatistics?: CharacterStatistics
    inventory?: CharacterInventory */
}