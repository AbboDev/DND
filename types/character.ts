export type Statistics = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export type Skills = {
  [P in keyof Statistics]?: Record<string, number>;
};
