import {
  useLocalStorage,
  StorageSerializers,
  RemovableRef,
} from "@vueuse/core";

import { Statistics, Skills } from "~/types/character";
import { Dice } from "~/types/dice";

export interface CharacterStore {
  name: RemovableRef<string>;
  level: RemovableRef<number>;
  hitPoints: RemovableRef<number>;
  temporaryHitPoints: RemovableRef<number>;
  maxHitPoints: RemovableRef<number>;
  hitDiceUsed: RemovableRef<number>;
  hitDie: RemovableRef<Dice>;
  statistics: RemovableRef<Statistics>;
  proficiency: RemovableRef<number>;
  proficiencies: RemovableRef<Skills>;

  calculatedSkill: globalThis.ComputedRef<
    (statistic: keyof Statistics) => number
  >;
  calculatedModifier: globalThis.ComputedRef<
    (statistic: keyof Statistics, skill: keyof Statistics) => number
  >;
  initiative: globalThis.ComputedRef<number>;
  armorClass: globalThis.ComputedRef<number>;
  speed: globalThis.ComputedRef<number>;
  passivePerception: globalThis.ComputedRef<number>;
  passiveInsight: globalThis.ComputedRef<number>;

  toggleProficiency(
    statistic: keyof Statistics,
    skill: string,
    add: number
  ): void;
}

export const useCharacterStore = defineStore(
  // export const useCharacterStore = defineStore<"character", CharacterStore>(
  "character",
  () => {
    const name = useLocalStorage<string>("characterName", "");
    const level = useLocalStorage<number>("level", 1);
    const hitDie = useLocalStorage<Dice>("hitDie", Dice.D8);
    const hitDiceUsed = useLocalStorage<number>("hitDiceUsed", 0);
    const armorClass = useLocalStorage<number>("armorClass", 10);
    const speed = useLocalStorage<number>("speed", 9);

    const hitPoints = useLocalStorage<number>("hitPoints", 0);
    const temporaryHitPoints = useLocalStorage<number>("temporaryHitPoints", 0);
    const maxHitPoints = useLocalStorage<number>("maxHitPoints", 0);

    const statistics = useLocalStorage<Statistics>(
      "statistics",
      {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
      { serializer: StorageSerializers.object }
    );

    const proficiency = useLocalStorage<number>("proficiencyBonus", 2);

    const proficiencies = useLocalStorage<Skills>("proficiencies", {
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
    });

    const calculatedModifier = computed(
      () => (statistic: keyof Statistics) =>
        Math.floor(((statistics.value[statistic] || 0) - 10) / 2)
    );

    const calculatedSkill = computed(
      () => (statistic: keyof Statistics, skill: string) => {
        return (
          calculatedModifier.value(statistic) +
          proficiency.value * (proficiencies.value?.[statistic]?.[skill] || 0)
        );
      }
    );

    const initiative = computed<number>(() =>
      calculatedModifier.value("dexterity")
    );

    const passivePerception = computed<number>(() =>
      10 + calculatedSkill.value("wisdom", "perception")
    );

    const passiveInsight = computed<number>(() =>
      10 + calculatedSkill.value("wisdom", "insight")
    );

    const toggleProficiency = (
      statistic: keyof Statistics,
      skill: string,
      add = 0
    ): void => {
      if (!proficiencies.value.hasOwnProperty(statistic)) {
        proficiencies.value[statistic] = {};
      }

      if (add) {
        // @ts-ignore
        proficiencies.value[statistic][skill] = add;
        return;
      }

      // @ts-ignore
      proficiencies.value[statistic][skill] = 0;
    };

    return {
      name: skipHydrate(name),
      level: skipHydrate(level),
      hitDie: skipHydrate(hitDie),
      hitDiceUsed: skipHydrate(hitDiceUsed),
      statistics: skipHydrate(statistics),
      proficiency: skipHydrate(proficiency),
      proficiencies: skipHydrate(proficiencies),
      calculatedSkill,
      calculatedModifier,
      initiative,
      armorClass,
      speed,
      passivePerception,
      passiveInsight,
      hitPoints,
      temporaryHitPoints,
      maxHitPoints,
      toggleProficiency,
    };
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot));
}
