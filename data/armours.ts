import { Armour, ArmourType } from "~/types/armour";
import { Coin } from "~/types/costs";

export const armours: Armour[] = [
  {
    id: "padded",
    name: "Padded",
    cost: [5, Coin.GP],
    ac: {
      base: 11,
      modifier: "dexterity",
    },
    stealth: false,
    weight: 8,
    type: ArmourType.LIGHT,
  },
  {
    id: "leather",
    name: "Leather",
    cost: [10, Coin.GP],
    ac: {
      base: 11,
      modifier: "dexterity",
    },
    stealth: false,
    weight: 10,
    type: ArmourType.LIGHT,
  },
  {
    id: "studded",
    name: "Studded leather",
    cost: [45, Coin.GP],
    ac: {
      base: 12,
      modifier: "dexterity",
    },
    stealth: false,
    weight: 13,
    type: ArmourType.LIGHT,
  },

  {
    id: "hide",
    name: "Hide",
    cost: [10, Coin.GP],
    ac: {
      base: 12,
      modifier: "dexterity",
      maxModifier: 2,
    },
    stealth: false,
    weight: 12,
    type: ArmourType.MEDIUM,
  },
  {
    id: "chain-shirt",
    name: "Chain shirt",
    cost: [50, Coin.GP],
    ac: {
      base: 13,
      modifier: "dexterity",
      maxModifier: 2,
    },
    stealth: false,
    weight: 20,
    type: ArmourType.MEDIUM,
  },
  {
    id: "scale-mail",
    name: "Scale mail",
    cost: [50, Coin.GP],
    ac: {
      base: 14,
      modifier: "dexterity",
      maxModifier: 2,
    },
    stealth: true,
    weight: 45,
    type: ArmourType.MEDIUM,
  },
  {
    id: "breastplate",
    name: "Breastplate",
    cost: [400, Coin.GP],
    ac: {
      base: 14,
      modifier: "dexterity",
      maxModifier: 2,
    },
    stealth: false,
    weight: 20,
    type: ArmourType.MEDIUM,
  },
  {
    id: "half-plate",
    name: "Half plate",
    cost: [750, Coin.GP],
    ac: {
      base: 15,
      modifier: "dexterity",
      maxModifier: 2,
    },
    stealth: true,
    weight: 40,
    type: ArmourType.MEDIUM,
  },

  {
    id: "ring-mail",
    name: "Ring mail",
    cost: [30, Coin.GP],
    ac: {
      base: 14,
    },
    stealth: true,
    weight: 40,
    type: ArmourType.HEAVY,
  },
  {
    id: "chain-mail",
    name: "Chain mail",
    cost: [75, Coin.GP],
    ac: {
      base: 16,
    },
    require: {
      strength: 13,
    },
    stealth: true,
    weight: 55,
    type: ArmourType.HEAVY,
  },
  {
    id: "splint",
    name: "Splint",
    cost: [200, Coin.GP],
    ac: {
      base: 17,
    },
    require: {
      strength: 15,
    },
    stealth: true,
    weight: 60,
    type: ArmourType.HEAVY,
  },
  {
    id: "plate",
    name: "Plate",
    cost: [1500, Coin.GP],
    ac: {
      base: 18,
    },
    require: {
      strength: 15,
    },
    stealth: true,
    weight: 65,
    type: ArmourType.HEAVY,
  },
];
