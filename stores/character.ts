export const useCharacterStore = defineStore("character", () => {
  const name = ref("");

  const statistics = ref({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const proficiency = ref(2);

  const proficiencies = ref({
    strength: {
      savingThrows: false,
      athletics: false,
    },
    dexterity: {
      savingThrows: false,
      acrobatics: false,
      sleightOfHand: false,
      stealth: false,
    },
    constitution: {
      savingThrows: false,
    },
    intelligence: {
      savingThrows: false,
      investigation: false,
      nature: false,
      religion: false,
      arcana: false,
      history: false,
    },
    wisdom: {
      savingThrows: false,
      animalHandling: false,
      medicine: false,
      insight: false,
      survival: false,
      perception: false,
    },
    charisma: {
      savingThrows: false,
      deception: false,
      intimidation: false,
      performance: false,
      persuasion: false,
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

  function calculateSkill(statistic: number, hasProficiency = false): number {
    return statistic + (hasProficiency ? proficiency.value : 0);
  }

  const skills = computed(() => ({
    strength: {
      savingThrows: calculateSkill(
        modifiers.value.strength,
        proficiencies.value.strength.savingThrows
      ),
      athletics: calculateSkill(
        modifiers.value.strength,
        proficiencies.value.strength.athletics
      ),
    },
    dexterity: {
      savingThrows: calculateSkill(
        modifiers.value.dexterity,
        proficiencies.value.dexterity.savingThrows
      ),
      acrobatics: calculateSkill(
        modifiers.value.dexterity,
        proficiencies.value.dexterity.acrobatics
      ),
      sleightOfHand: calculateSkill(
        modifiers.value.dexterity,
        proficiencies.value.dexterity.sleightOfHand
      ),
      stealth: calculateSkill(
        modifiers.value.dexterity,
        proficiencies.value.dexterity.stealth
      ),
    },
    constitution: {
      savingThrows: calculateSkill(
        modifiers.value.constitution,
        proficiencies.value.constitution.savingThrows
      ),
    },
    intelligence: {
      savingThrows: calculateSkill(
        modifiers.value.intelligence,
        proficiencies.value.intelligence.savingThrows
      ),
      investigation: calculateSkill(
        modifiers.value.intelligence,
        proficiencies.value.intelligence.investigation
      ),
      nature: calculateSkill(
        modifiers.value.intelligence,
        proficiencies.value.intelligence.nature
      ),
      religion: calculateSkill(
        modifiers.value.intelligence,
        proficiencies.value.intelligence.religion
      ),
      arcana: calculateSkill(
        modifiers.value.intelligence,
        proficiencies.value.intelligence.arcana
      ),
      history: calculateSkill(
        modifiers.value.intelligence,
        proficiencies.value.intelligence.history
      ),
    },
    wisdom: {
      savingThrows: calculateSkill(
        modifiers.value.wisdom,
        proficiencies.value.wisdom.savingThrows
      ),
      animalHandling: calculateSkill(
        modifiers.value.wisdom,
        proficiencies.value.wisdom.animalHandling
      ),
      medicine: calculateSkill(
        modifiers.value.wisdom,
        proficiencies.value.wisdom.medicine
      ),
      insight: calculateSkill(
        modifiers.value.wisdom,
        proficiencies.value.wisdom.insight
      ),
      survival: calculateSkill(
        modifiers.value.wisdom,
        proficiencies.value.wisdom.survival
      ),
      perception: calculateSkill(
        modifiers.value.wisdom,
        proficiencies.value.wisdom.perception
      ),
    },
    charisma: {
      savingThrows: calculateSkill(
        modifiers.value.charisma,
        proficiencies.value.charisma.savingThrows
      ),
      deception: calculateSkill(
        modifiers.value.charisma,
        proficiencies.value.charisma.deception
      ),
      intimidation: calculateSkill(
        modifiers.value.charisma,
        proficiencies.value.charisma.intimidation
      ),
      performance: calculateSkill(
        modifiers.value.charisma,
        proficiencies.value.charisma.performance
      ),
      persuasion: calculateSkill(
        modifiers.value.charisma,
        proficiencies.value.charisma.persuasion
      ),
    },
  }));

  return {
    name,
    statistics,
    proficiency,
    proficiencies,
    skills,
    modifiers,
    calculateModifier,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot));
}
