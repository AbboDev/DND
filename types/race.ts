import { CoreLanguages, Skills, Statistics, WeaponProficiencies } from "./character";
import { Condition, DamageType } from "./damage";

export type Race = {
  name: string;
  source?: string;
  size: Size[];
  speed: number | Speed;
  blindsight?: number;
  darkvision?: number;
  age?: Age;

  ability?: Choosable<Statistics>;
  skillProficiencies?: {
    any?: number;
    choose?: Selectable<string>;
  } & Partial<Skills>;

  toolProficiencies?: {
    any?: number;
    [key: string]: boolean | number | undefined;
  };

  immune?: DamageType[];
  vulnerable?: DamageType[];
  resist?:
    | {
        choose?: Selectable<DamageType>;
      }
    | DamageType[];
  conditionImmune?: Condition[];
  languageProficiencies?: Partial<CoreLanguages> & {
    anyStandard?: boolean | number;
    other?: boolean;
    choose?: Selectable<keyof CoreLanguages | "other">;
  };

  // TODO
  feats?: Record<string, boolean | number> & {
    any?: number;
  };
  weaponProficiencies?: Partial<WeaponProficiencies> & Record<string, boolean>;
  traitTags?: string[];
  creatureTypes?: string[];
  creatureTypeTags?: string[];

  entries?: Array<Entries | string>;

  additionalSpells?: any[];
  _versions?: any[];
};

export type Choosable<T> = Partial<T> & {
  choose?: Selectable<keyof T>[][];
};

export type Selectable<T> = {
  count?: number;
  from: "any" | Array<T>;
};

export type Age = {
  mature?: number;
  max?: number;
};

export type Speed = {
  walk?: number | boolean;
  swim?: number | boolean;
  fly?: number | boolean;
  climb?: number | boolean;
};

export type Entries = {
  name: string;
  type: string;
  entries: string[] | any;
  // data?: ;
};

export enum Size {
  TINY,
  SMALL,
  MEDIUM,
  LARGE,
  HUGE,
  GARGANTUAN,
}
