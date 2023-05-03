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

  const skills = computed(() => ({
    strength: {
      savingThrows: modifiers.value.strength,
      athletics: modifiers.value.strength,
    },
    dexterity: {
      savingThrows: modifiers.value.dexterity,
      acrobatics: modifiers.value.dexterity,
      sleightOfHand: modifiers.value.dexterity,
      stealth: modifiers.value.dexterity,
    },
    constitution: {
      savingThrows: modifiers.value.constitution,
    },
    intelligence: {
      savingThrows: modifiers.value.intelligence,
      investigation: modifiers.value.intelligence,
      nature: modifiers.value.intelligence,
      religion: modifiers.value.intelligence,
      arcana: modifiers.value.intelligence,
      history: modifiers.value.intelligence,
    },
    wisdom: {
      savingThrows: modifiers.value.wisdom,
      animalHandling: modifiers.value.wisdom,
      medicine: modifiers.value.wisdom,
      insight: modifiers.value.wisdom,
      survival: modifiers.value.wisdom,
      perception: modifiers.value.wisdom,
    },
    charisma: {
      savingThrows: modifiers.value.charisma,
      deception: modifiers.value.charisma,
      intimidation: modifiers.value.charisma,
      performance: modifiers.value.charisma,
      persuasion: modifiers.value.charisma,
    },
  }));

  return { name, statistics, skills, modifiers, calculateModifier };
});
