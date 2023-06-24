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
  [P in keyof Statistics]?: Record<string, number>;
};
