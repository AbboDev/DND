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
  AbilitySkills,
  Skills,
} from "~/types/character";
import { Dice } from "~/types/dice";
import { Armour } from "~/types/armour";
import { Race } from "~/types/race";

export interface CharacterStore {
  character: RemovableRef<Character>;

  speed: globalThis.ComputedRef<number>;

  setStatistic(statistic: keyof Statistics, value: number): void;
  getStatistic: globalThis.ComputedRef<(statistic: keyof Statistics) => number>;
  getModifier: globalThis.ComputedRef<(statistic: keyof Statistics) => number>;
  getSkill: globalThis.ComputedRef<
    (statistic: keyof AbilitySkills, skill: keyof Skills) => number
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
    statistic: keyof AbilitySkills,
    skill: keyof Skills,
    add?: number
  ): void;
  applyArmour(armour: Armour | null): void;
  applyRace(race: Race | null): void;
  updateSpellSlots(level: keyof SpellSlotsPerLevel, slot: number): void;
}

export const STORE_NAME = "character";

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

        race: null,
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
          aquan: false,
          auran: false,
          ignan: false,
          terran: false,
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
        statisticsVariations: {
          strength: [],
          dexterity: [],
          constitution: [],
          intelligence: [],
          wisdom: [],
          charisma: [],
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
        let requiredStatistic = getStatistic.value(
          statistic as keyof Statistics
        );

        if (requiredStatistic && requiredStatistic < value) {
          speed -= 2;
          break;
        }
      }

      return speed;
    });

    const setStatistic = (statistic: keyof Statistics, value: number): void => {
      character.value.statistics[statistic] = value;
    };

    const getStatistic = computed(() => (statistic: keyof Statistics) => {
      let value = character.value.statistics[statistic] || 0;

      const variations = character.value.statisticsVariations[statistic] || [];
      if (variations.length > 0) {
        for (const variation in variations) {
          if (Object.prototype.hasOwnProperty.call(variations, variation)) {
            value += variations[variation];
          }
        }
      }

      if (character.value.race) {
        let raceAbility = character.value.race.ability[statistic];
        if (raceAbility) {
          value += raceAbility;
        } else {
        }
      }

      return value;
    });

    const getModifier = computed(
      () => (statistic: keyof Statistics) =>
        Math.floor((getStatistic.value(statistic) - 10) / 2)
    );

    const getSkill = computed(
      () => (statistic: keyof AbilitySkills, skill: keyof Skills) => {
        let proficiency = getModifier.value(statistic);

        if (skill in character.value.proficiencies[statistic]) {
          proficiency +=
            character.value.proficiency *
            // @ts-ignore

            character.value.proficiencies[statistic][skill];
        }

        return proficiency;
      }
    );

    const armourClass = computed<number>(() => {
      let value: number = character.value.shieldArmourClass;

      if (character.value.armour) {
        const { ac } = character.value.armour;

        value += ac.base;

        if (ac.modifier) {
          let modifier = getModifier.value(ac.modifier);

          if (ac.maxModifier) {
            modifier = Math.min(modifier, ac.maxModifier);
          }

          value += modifier;
        }
      } else {
        value +=
          character.value.baseArmourClass + getModifier.value("dexterity");
      }

      return value;
    });

    const initiative = computed<number>(() => getModifier.value("dexterity"));

    const passivePerception = computed<number>(
      () => 10 + getSkill.value("wisdom", "perception")
    );

    const passiveInsight = computed<number>(
      () => 10 + getSkill.value("wisdom", "insight")
    );

    const spellAttackBonus = computed<number>(
      () =>
        getModifier.value(character.value.spellcastingAbility) +
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
      statistic: keyof AbilitySkills,
      skill: keyof Skills,
      add = 0
    ): void => {
      if (!(skill in character.value.proficiencies[statistic])) {
        return;
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

    const applyRace = (race: Race | null): void => {
      if (!race) {
        character.value.race = null;
        return;
      }

      console.debug(race);

      character.value.race = race;
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
      applyRace,

      setStatistic,
      getStatistic,
      getSkill,
      getModifier,
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
