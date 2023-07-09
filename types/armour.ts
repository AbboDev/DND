import { Statistics } from "./character";
import { CostInCoin } from "./costs";

export type Armour = {
  id: string;
  name: string;
  cost: CostInCoin;
  ac: ArmourClass;
  require?: Record<string | keyof Statistics, any>;
  stealth?: boolean;
  weight?: number;
  type: ArmourType;
};

export type ArmourClass = {
  base: number;
  modifier?: keyof Statistics;
  maxModifier?: number;
};

export enum ArmourType {
  LIGHT,
  MEDIUM,
  HEAVY,
}
