import {
  useLocalStorage,
  StorageSerializers,
  RemovableRef,
} from "@vueuse/core";

import {
  Statistics,
  SpellSlotsPerLevel,
  CoreBackgrounds,
  CoreClasses,
  Character,
} from "~/types/character";
import { Dice } from "~/types/dice";
import { Armour } from "~/types/armour";

export interface CharacterStore {
  character: RemovableRef<Character>;

  speed: globalThis.ComputedRef<number>;

  calculatedModifier: globalThis.ComputedRef<
    (statistic: keyof Statistics) => number
  >;
  calculatedSkill: globalThis.ComputedRef<
    (statistic: keyof Statistics, skill: string) => number
  >;

  armourClass: globalThis.ComputedRef<number>;
  initiative: globalThis.ComputedRef<number>;

  passivePerception: globalThis.ComputedRef<number>;
  passiveInsight: globalThis.ComputedRef<number>;

  spellAttackBonus: globalThis.ComputedRef<number>;
  spellSaveDC: globalThis.ComputedRef<number>;

  updateLevel(newLevel: number): void;
  updateMaxHitPoints(hp: number, remove?: boolean): void;
  toggleProficiency(
    statistic: keyof Statistics,
    skill: string,
    add?: number
  ): void;
  applyArmour(armour: Armour | null): void;
  updateSpellSlots(level: keyof SpellSlotsPerLevel, slot: number): void;
}

export const STORE_NAME = 'character';

export const useCharacterStore = defineStore<typeof STORE_NAME, CharacterStore>(
  STORE_NAME,
  () => {
    const defaultSpellSlotsStack = {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
    };

    const character: RemovableRef<Character> = useLocalStorage<Character>(
      "character",
      {
        name: "",

        level: 1,
        hitDie: Dice.D8,
        hitDiceUsed: 0,

        temporaryHitPoints: 0,
        maxHitPoints: 1,
        hitPoints: 1,

        class: CoreClasses.ARTIFICER,
        background: CoreBackgrounds.ACOLYTE,
        alignment: "Neutral",

        armour: null,
        baseArmourClass: 10,
        shieldArmourClass: 0,

        languages: {
          abyssal: false,
          celestial: false,
          common: true,
          deepSpeech: false,
          draconic: false,
          druidic: false,
          dwarvish: false,
          elvish: false,
          giant: false,
          gnomish: false,
          goblin: false,
          halfling: false,
          infernal: false,
          orc: false,
          primordial: false,
          sylvan: false,
          thievesCant: false,
          undercommon: false,
        },

        baseSpeed: 6,

        proficiency: 2,
        statistics: {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10,
        },
        proficiencies: {
          strength: {
            savingThrows: 0,
            athletics: 0,
          },
          dexterity: {
            savingThrows: 0,
            acrobatics: 0,
            sleightOfHand: 0,
            stealth: 0,
          },
          constitution: {
            savingThrows: 0,
          },
          intelligence: {
            savingThrows: 0,
            investigation: 0,
            nature: 0,
            religion: 0,
            arcana: 0,
            history: 0,
          },
          wisdom: {
            savingThrows: 0,
            animalHandling: 0,
            medicine: 0,
            insight: 0,
            survival: 0,
            perception: 0,
          },
          charisma: {
            savingThrows: 0,
            deception: 0,
            intimidation: 0,
            performance: 0,
            persuasion: 0,
          },
        },

        spellcastingAbility: "intelligence",

        spellSlots: { ...defaultSpellSlotsStack },

        spellSlotsUsed: { ...defaultSpellSlotsStack },

        armourProficiencies: {
          light: false,
          medium: false,
          heavy: false,
          shields: false,
        },

        weaponProficiencies: {
          simple: false,
          martial: false,
          firearms: false,
        },
      },
      { serializer: StorageSerializers.object }
    );

    const speed = computed<number>(() => {
      let speed: number = character.value.baseSpeed;

      if (!character.value.armour) {
        return speed;
      }

      if (!character.value.armour.require) {
        return speed;
      }

      for (const [statistic, value] of Object.entries(
        character.value.armour.require
      )) {
        if (character.value.statistics[statistic as keyof Statistics]) {
          if (
            character.value.statistics[statistic as keyof Statistics] < value
          ) {
            speed -= 2;
            break;
          }
        }
      }

      return speed;
    });

    const calculatedModifier = computed(
      () => (statistic: keyof Statistics) =>
        Math.floor(((character.value.statistics[statistic] || 0) - 10) / 2)
    );

    const calculatedSkill = computed(
      () => (statistic: keyof Statistics, skill: string) => {
        return (
          calculatedModifier.value(statistic) +
          character.value.proficiency *
            (character.value.proficiencies?.[statistic]?.[skill] || 0)
        );
      }
    );

    const armourClass = computed<number>(() => {
      let value: number = character.value.shieldArmourClass;

      if (character.value.armour) {
        const { ac } = character.value.armour;

        value += ac.base;

        if (ac.modifier) {
          let modifier = calculatedModifier.value(ac.modifier);

          if (ac.maxModifier) {
            modifier = Math.min(modifier, ac.maxModifier);
          }

          value += modifier;
        }
      } else {
        value +=
          character.value.baseArmourClass +
          calculatedModifier.value("dexterity");
      }

      return value;
    });

    const initiative = computed<number>(() =>
      calculatedModifier.value("dexterity")
    );

    const passivePerception = computed<number>(
      () => 10 + calculatedSkill.value("wisdom", "perception")
    );

    const passiveInsight = computed<number>(
      () => 10 + calculatedSkill.value("wisdom", "insight")
    );

    const spellAttackBonus = computed<number>(
      () =>
        calculatedModifier.value(character.value.spellcastingAbility) +
        character.value.proficiency
    );
    const spellSaveDC = computed<number>(() => 8 + spellAttackBonus.value);

    const updateLevel = (newLevel: number): void => {
      character.value.level = newLevel;

      if (character.value.hitDiceUsed > character.value.level) {
        character.value.hitDiceUsed = character.value.level;
      }
    };

    const updateMaxHitPoints = (hp: number, remove = false): void => {
      if (remove) {
        character.value.maxHitPoints -= hp;
      } else {
        character.value.maxHitPoints = hp;
      }

      if (character.value.maxHitPoints < 0) {
        character.value.maxHitPoints = 0;
      }

      if (character.value.hitPoints > character.value.maxHitPoints) {
        character.value.hitPoints = character.value.maxHitPoints;
      }
    };

    const toggleProficiency = (
      statistic: keyof Statistics,
      skill: string,
      add = 0
    ): void => {
      if (!character.value.proficiencies.hasOwnProperty(statistic)) {
        character.value.proficiencies[statistic] = {};
      }

      if (add) {
        // @ts-ignore
        character.value.proficiencies[statistic][skill] = add;
        return;
      }

      // @ts-ignore
      character.value.proficiencies[statistic][skill] = 0;
    };

    const applyArmour = (armour: Armour | null): void => {
      if (!armour) {
        character.value.armour = null;
        return;
      }

      character.value.armour = armour;
    };

    const updateSpellSlots = (
      level: keyof SpellSlotsPerLevel,
      slot: number
    ): void => {
      character.value.spellSlots[level] = slot;

      if (character.value.spellSlotsUsed[level] > slot) {
        character.value.spellSlotsUsed[level] = slot;
      }
    };

    return {
      character: skipHydrate(character),
      armourClass,
      applyArmour,

      calculatedSkill,
      calculatedModifier,
      initiative,

      speed,

      passivePerception,
      passiveInsight,
      spellAttackBonus,
      spellSaveDC,
      updateMaxHitPoints,
      updateLevel,
      updateSpellSlots,
      toggleProficiency,
    };
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot));
}
