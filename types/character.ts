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
  Artificer = "Artificer",
  Barbarian = "Barbarian",
  Bard = "Bard",
  Cleric = "Cleric",
  Druid = "Druid",
  Fighter = "Fighter",
  Monk = "Monk",
  Paladin = "Paladin",
  Ranger = "Ranger",
  Rogue = "Rogue",
  Sorcerer = "Sorcerer",
  Warlock = "Warlock",
  Wizard = "Wizard",
}

export enum CoreBackgrounds {
  Acolyte = "Acolyte",
  Charlatan = "Charlatan",
  Criminal = "Criminal / Spy",
  Spy = CoreBackgrounds.Criminal,
  Entertainer = "Entertainer",
  FolkHero = "Folk Hero",
  Gladiator = "Gladiator",
  Artisan = "Guild Artisan / Guild Merchant",
  Merchant = CoreBackgrounds.Artisan,
  Hermit = "Hermit",
  Knight = "Knight",
  Noble = "Noble",
  Outlander = "Outlander",
  Pirate = "Pirate",
  Sage = "Sage",
  Sailor = "Sailor",
  Soldier = "Soldier",
  Urchin = "Urchin",
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
