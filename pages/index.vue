<template>
  <main>
    <InputField :full-width="true">
      <template #label> Character Name </template>
      <TextInput v-model="character.name" name="name" />
    </InputField>

    <ol>
      <li>
        <AlignmentField name="alignment" size="normal" v-model="character.alignment">
          <template #label> Alignment </template>
        </AlignmentField>
      </li>
      <li>
        <ClassField name="class" size="normal" v-model="character.class">
          <template #label> Class </template>
        </ClassField>
      </li>
      <li>
        <BackgroundField name="background" size="normal" v-model="character.background">
          <template #label> Background </template>
        </BackgroundField>
      </li>
      <li>
        <RaceField
          name="race"
          size="normal"
          :model-value="character.race"
          @update:model-value="(race: string | null) => fetchRace(race)"
        >
          <template #label> Race </template>
        </RaceField>
      </li>
    </ol>

    <ol>
      <li>
        <StatisticField
          name="level"
          label="Level"
          :min="1"
          :model-value="character.level"
          @update:model-value="(level: number) => updateLevel(level)"
        />
      </li>

      <li>
        <StatisticField
          name="proficiency"
          label="Proficiency"
          v-model="character.proficiency"
        />
      </li>

      <li>
        <StatisticField
          name="hitDiceUsed"
          label="Hit Dice"
          v-model="character.hitDiceUsed"
          :min="0"
          :max="character.level"
        >
          <template #calculated>
            <TextInput
              name="hitDie"
              :readonly="true"
              :model-value="`d${character.hitDie}`"
            />
          </template>
        </StatisticField>
      </li>

      <li>
        <StatisticField
          name="hitPoints"
          label="Hit Points"
          v-model="character.hitPoints"
          :min="-character.maxHitPoints"
          :max="character.maxHitPoints"
        >
          <template #calculated>
            <NumberInput
              name="maxHitPoints"
              label="Hit Points"
              :min="0"
              :model-value="character.maxHitPoints"
              @update:model-value="(hp: number) => updateMaxHitPoints(hp)"
            />
          </template>
        </StatisticField>
      </li>

      <li></li>

      <li>
        <StatisticField
          name="temporaryHitPoints"
          label="Temporary Hit Points"
          v-model="character.temporaryHitPoints"
          :min="1"
        />
      </li>
    </ol>

    <ol>
      <li>
        <StatisticField
          name="initiative"
          label="Initiative"
          v-model="initiative"
          :readonly="true"
        />
      </li>

      <li>
        <StatisticField
          name="armourClass"
          label="AC"
          v-model="armourClass"
          :readonly="true"
        >
          <template #calculated>
            <NumberInput
              name="shieldArmourClass"
              :min="0"
              :max="2"
              v-model="character.shieldArmourClass"
            />
          </template>
        </StatisticField>
      </li>

      <li>
        <StatisticField
          name="speed"
          label="Speed"
          :model-value="environmentStore.parseDistanceUnit(speed, DistanceUnit.CELL)"
          :readonly="true"
        >
          <template #calculated>
            <TextInput
              name="speedUnit"
              :model-value="environmentStore.unit"
              :readonly="true"
            />
          </template>
        </StatisticField>
      </li>

      <li>
        <StatisticField
          name="passivePerception"
          label="Passive Perception"
          v-model="passivePerception"
          :readonly="true"
        />
      </li>

      <li>
        <StatisticField
          name="passiveInsight"
          label="Passive Insight"
          v-model="passiveInsight"
          :readonly="true"
        />
      </li>
    </ol>

    <ol>
      <li v-for="(_, statistic) in character.statistics" :key="statistic">
        <StatisticField
          :name="statistic"
          :label="capitalize(statistic)"
          v-model="character.statistics[statistic]"
        >
          <template #calculated>
            <NumberInput
              :name="`${statistic}Modifier`"
              :model-value="calculatedModifier(statistic)"
              :readonly="true"
            />
          </template>
        </StatisticField>

        <ol>
          <li v-for="(__, skill) in character.proficiencies[statistic]" :key="skill">
            <CheckboxField
              :name="`${statistic}${capitalize(skill)}`"
              :label="capitalize(skill)"
              :model-value="(character.proficiencies[statistic]?.[skill] || 0) > 0"
              @update:model-value="(event: boolean) => addProficiency(event, statistic, skill as keyof Skills)"
            >
              <template #inputs v-if="skill !== 'savingThrows'">
                <Transition>
                  <CheckboxInput
                    v-if="character.proficiencies[statistic]?.[skill]"
                    class="is-absolute"
                    :name="skill"
                    :model-value="(character.proficiencies[statistic]?.[skill] || 0) > 1"
                    @update:model-value="(event: boolean) => addDoubleProficiency(event, statistic, skill as keyof Skills)"
                  />
                </Transition>
              </template>

              <template #calculated>
                <NumberInput
                  :name="`${statistic}${capitalize(skill)}Modifier`"
                  :model-value="calculatedSkill(statistic, skill as keyof Skills)"
                  :readonly="true"
                />
              </template>
            </CheckboxField>
          </li>
        </ol>
      </li>
    </ol>

    <ol>
      <li>
        <CheckboxField
          v-for="(value, weaponType) in character.weaponProficiencies"
          :key="weaponType"
          :name="weaponType"
          :label="`${capitalize(weaponType)} Weapons`"
          v-model="character.weaponProficiencies[weaponType]"
        />

        <CheckboxField
          v-for="(value, armourType) in character.armourProficiencies"
          :key="armourType"
          :name="armourType"
          :label="capitalize(armourType) + (armourType !== 'shields' ? ' Armour' : '')"
          v-model="character.armourProficiencies[armourType]"
        />
      </li>
      <li>
        <CheckboxField
          v-for="(value, language) in character.languages"
          :key="language"
          :name="language"
          :label="capitalize(language)"
          v-model="character.languages[language]"
        />
      </li>
    </ol>

    <ol>
      <li>
        <StatisticField
          name="spellAttackBonus"
          label="Spell Attack Bonus"
          v-model="spellAttackBonus"
          :readonly="true"
        />
      </li>
      <li>
        <StatisticField
          name="spellSaveDC"
          label="Spell Save DC"
          v-model="spellSaveDC"
          :readonly="true"
        />
      </li>
      <li>
        <ol>
          <template v-for="(slots, level) in character.spellSlots">
            <li v-if="slots > 0" :key="level">
              <RangeField
                :name="`usedSpellSlotsLevel${level}`"
                :min="0"
                :max="slots"
                v-model="character.spellSlotsUsed[level]"
                :values="slots"
              >
                <template #output>
                  <InputField size="medium">
                    <NumberInput
                      :name="`remainingSpellSlotsLevel${level}`"
                      :min="0"
                      :max="character.spellSlots[level]"
                      v-model="character.spellSlotsUsed[level]"
                    />
                  </InputField>
                </template>

                {{ ordinalSuffix(level) }} Spell Slots

                <template #max>
                  <InputField size="medium">
                    <NumberInput
                      :name="`maxSpellSlotsLevel${level}`"
                      :min="1"
                      :modelValue="character.spellSlots[level]"
                      @update:model-value="(slot: number) => updateSpellSlots(level, slot)"
                    />
                  </InputField>
                </template>
              </RangeField>
            </li>
          </template>
        </ol>
      </li>
    </ol>

    <ol>
      <li>
        <ArmourField
          name="armour"
          size="normal"
          :model-value="character.armour"
          @update:model-value="(armour: string | null) => fetchArmour(armour)"
        />
      </li>
    </ol>
  </main>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/character";
import { useEnvironmentStore } from "@/stores/environment";
import { Armour } from "~/types/armour";
import { AbilitySkills, Skills } from "~/types/character";
import { DistanceUnit } from "~/types/unit";
import { ordinalSuffix } from "~/utilities/number";
import { capitalize } from "~/utilities/string";

const characterStore = useCharacterStore();
const environmentStore = useEnvironmentStore();
const {
  character,

  speed,
  calculatedModifier,
  calculatedSkill,

  armourClass,
  initiative,

  passivePerception,
  passiveInsight,

  spellAttackBonus,
  spellSaveDC,
} = storeToRefs(characterStore);

const {
  toggleProficiency,
  updateSpellSlots,
  updateMaxHitPoints,
  updateLevel,
  applyArmour,
  applyRace,
} = characterStore;

function addProficiency(
  add: boolean,
  statistic: keyof AbilitySkills,
  skill: keyof Skills
) {
  toggleProficiency(statistic, skill, add ? 1 : 0);
}

function addDoubleProficiency(
  add: boolean,
  statistic: keyof AbilitySkills,
  skill: keyof Skills
) {
  toggleProficiency(statistic, skill, add ? 2 : 1);
}

async function fetchArmour(armour: string | null) {
  if (!armour) {
    applyArmour(null);
    return;
  }

  try {
    let chooseArmour: Armour = await $fetch(`/api/armour/${armour}`);

    applyArmour(chooseArmour);
  } catch (error) {
    console.error(error);
  }
}

async function fetchRace(race: string | null) {
  if (!race) {
    applyRace(null);
    return;
  }

  try {
    let chooseRace: Race = await $fetch(`/api/races/${race}`);
    applyRace(chooseRace);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
}

h1 {
  font-size: min(16vw, 4rem);
  font-weight: 600;
  margin: 0 0 2rem;
  text-align: center;
  width: 100%;
  padding: 0 2.5rem;
  box-sizing: border-box;
  line-height: 1;
}

ol {
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0;

  & > li {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    & > ol {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      list-style: none;
      justify-content: space-between;
      margin: 0;
      padding: 0;

      & > li {
        width: 100%;
        position: relative;

        .is-absolute {
          position: absolute;
          inset: 50% auto auto 0;
          transform: scale(0.8) translate(-50%, -100%);
          z-index: 1;
        }
      }
    }
  }
}

@media (min-width: 640px) {
  h1 {
    font-size: min(8vw, 4rem);
  }
}
</style>
