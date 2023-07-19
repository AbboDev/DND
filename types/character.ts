import { Alignment } from "./alignments";
import { Armour } from "./armour";
import { Dice } from "./dice";
import { Race } from "./race";

export interface Character {
  name: string;
  level: number;

  hitPoints: number;
  temporaryHitPoints: number;
  maxHitPoints: number;

  hitDiceUsed: number;
  hitDie: Dice;

  statistics: Statistics;
  statisticsVariations: Record<keyof Statistics, number[]>;
  proficiency: number;
  proficiencies: AbilitySkills;
  languages: CoreLanguages;
  armourProficiencies: ArmourProficiencies;
  weaponProficiencies: WeaponProficiencies;

  race: Race | null;
  class: CoreClasses;
  background: CoreBackgrounds;
  alignment: keyof typeof Alignment;

  spellcastingAbility: keyof Statistics;
  spellSlots: SpellSlotsPerLevel;
  spellSlotsUsed: SpellSlotsPerLevel;

  armour: Armour | null;
  baseArmourClass: number;
  shieldArmourClass: number;

  baseSpeed: number;
}

export type Statistics = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export type SpellSlotsPerLevel = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
};

export type Skills = {
  athletics: number | boolean;
  acrobatics: number | boolean;
  sleightOfHand: number | boolean;
  stealth: number | boolean;
  investigation: number | boolean;
  nature: number | boolean;
  religion: number | boolean;
  arcana: number | boolean;
  history: number | boolean;
  animalHandling: number | boolean;
  medicine: number | boolean;
  insight: number | boolean;
  survival: number | boolean;
  perception: number | boolean;
  deception: number | boolean;
  intimidation: number | boolean;
  performance: number | boolean;
  persuasion: number | boolean;
};

export type BasicSkills = {
  savingThrows: number;
};

export type StrengthSkills = BasicSkills & Pick<Skills, "athletics">;

export type DexteritySkills = BasicSkills &
  Pick<Skills, "acrobatics" | "sleightOfHand" | "stealth">;

export type ConstitutionSkills = BasicSkills;

export type IntelligenceSkills = BasicSkills &
  Pick<Skills, "investigation" | "nature" | "religion" | "arcana" | "history">;

export type WisdomSkills = BasicSkills &
  Pick<
    Skills,
    "animalHandling" | "medicine" | "insight" | "survival" | "perception"
  >;

export type CharismaSkills = BasicSkills &
  Pick<Skills, "deception" | "intimidation" | "performance" | "persuasion">;

export type AbilitySkills = {
  strength: StrengthSkills;
  dexterity: DexteritySkills;
  constitution: ConstitutionSkills;
  intelligence: IntelligenceSkills;
  wisdom: WisdomSkills;
  charisma: CharismaSkills;
};

export type ArmourProficiencies = {
  light: boolean;
  medium: boolean;
  heavy: boolean;
  shields: boolean;
};

export type WeaponProficiencies = {
  simple: boolean;
  martial: boolean;
  firearms: boolean;
};

export type Proficiencies = ArmourProficiencies & WeaponProficiencies;

export enum CoreClasses {
  ARTIFICER = "Artificer",
  BARBARIAN = "Barbarian",
  BARD = "Bard",
  CLERIC = "Cleric",
  DRUID = "Druid",
  FIGHTER = "Fighter",
  MONK = "Monk",
  PALADIN = "Paladin",
  RANGER = "Ranger",
  ROGUE = "Rogue",
  SORCERER = "Sorcerer",
  WARLOCK = "Warlock",
  WIZARD = "Wizard",
}

export enum CoreBackgrounds {
  ACOLYTE = "Acolyte",
  CHARLATAN = "Charlatan",
  CRIMINAL = "Criminal / Spy",
  SPY = CoreBackgrounds.CRIMINAL,
  ENTERTAINER = "Entertainer",
  FOLKHERO = "Folk Hero",
  GLADIATOR = "Gladiator",
  ARTISAN = "Guild Artisan / Guild Merchant",
  MERCHANT = CoreBackgrounds.ARTISAN,
  HERMIT = "Hermit",
  KNIGHT = "Knight",
  NOBLE = "Noble",
  OUTLANDER = "Outlander",
  PIRATE = "Pirate",
  SAGE = "Sage",
  SAILOR = "Sailor",
  SOLDIER = "Soldier",
  URCHIN = "Urchin",
}

export type CoreLanguages = {
  abyssal: boolean;
  celestial: boolean;
  common: boolean;
  deepSpeech: boolean;
  draconic: boolean;
  druidic: boolean;
  dwarvish: boolean;
  elvish: boolean;
  giant: boolean;
  gnomish: boolean;
  goblin: boolean;
  halfling: boolean;
  infernal: boolean;
  orc: boolean;
  primordial: boolean;
  sylvan: boolean;
  thievesCant: boolean;
  undercommon: boolean;
  aquan: boolean;
  auran: boolean;
  ignan: boolean;
  terran: boolean;
};
