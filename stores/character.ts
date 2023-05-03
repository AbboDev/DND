export const useCharacterStore = defineStore("character", () => {
  const name = ref("");

  const statistics = ref({
    strength: 12,
    dexterity: 9,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const skills = ref({
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

  function calculateModifier(statistic: number): number {
    return Math.floor((statistic - 10) / 2);
  }

  const modifiers = computed(() => ({
    strength: calculateModifier(statistics.value.strength),
    dexterity: calculateModifier(statistics.value.dexterity),
    constitution: calculateModifier(statistics.value.constitution),
    intelligence: calculateModifier(statistics.value.intelligence),
    wisdom: calculateModifier(statistics.value.wisdom),
    charisma: calculateModifier(statistics.value.charisma),
  }));

  return { name, statistics, skills, modifiers, calculateModifier };
});
