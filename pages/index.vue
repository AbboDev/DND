<template>
  <main>
    <InputField :full-width="true">
      <template #label> Character Name </template>
      <TextInput v-model="name" :name="name" />
    </InputField>

    <ClientOnly>
      <ol>
        <li>
          <StatisticField name="level" label="Level" v-model="level" :min="1" />
        </li>

        <li>
          <StatisticField name="proficiency" label="Proficiency" v-model="proficiency" />
        </li>

        <li>
          <StatisticField
            name="hitDie"
            label="Hit Dice"
            v-model="hitDiceUsed"
            :min="0"
            :max="level"
          >
            <template #calculated>
              <TextInput :name="name" :readonly="true" :model-value="`d${hitDie}`" />
            </template>
          </StatisticField>
        </li>

        <li>
          <StatisticField
            name="hitPoints"
            label="Hit Points"
            v-model="hitPoints"
            :min="-maxHitPoints"
            :max="maxHitPoints"
          >
            <template #calculated>
              <NumberInput
                name="maxHitPoints"
                label="Hit Points"
                v-model="maxHitPoints"
                :min="1"
              />
            </template>
          </StatisticField>
        </li>

        <li></li>

        <li>
          <StatisticField
            name="temporaryHitPoints"
            label="Temporary Hit Points"
            v-model="temporaryHitPoints"
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
            name="armorClass"
            label="AC"
            v-model="armorClass"
            :readonly="true"
          />
        </li>

        <li>
          <StatisticField name="speed" label="Speed" v-model="speed" :readonly="true">
            <template #calculated>
              <TextInput :name="name" :readonly="true" model-value="m" />
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
        <li v-for="(statisticValue, statistic) in statistics" :key="statistic">
          <StatisticField
            :name="statistic"
            :label="capitalize(statistic)"
            v-model="statistics[statistic]"
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
            <li v-for="(skillValue, skill) in proficiencies[statistic]" :key="skill">
              <Transition v-if="skill !== 'savingThrows'">
                <CheckboxField
                  v-if="proficiencies[statistic]?.[skill]"
                  class="is-absolute"
                  :name="skill"
                  :model-value="(proficiencies[statistic]?.[skill] || 0) > 1"
                  @update:model-value="(event: boolean) => addDoubleProficiency(event, statistic, skill)"
                />
              </Transition>

              <CheckboxField
                :name="`${statistic}${capitalize(skill)}`"
                :label="capitalize(skill)"
                :model-value="(proficiencies[statistic]?.[skill] || 0) > 0"
                @update:model-value="(event: boolean) => addProficiency(event, statistic, skill)"
              >
                <template #calculated>
                  <NumberInput
                    :name="`${statistic}${capitalize(skill)}Modifier`"
                    :model-value="calculatedSkill(statistic, skill)"
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
            <template v-for="(slots, level) in spellSlots">
              <li v-if="slots > 0" :key="level">
                <RangeField
                  :name="`usedSpellSlotsLevel${level}`"
                  :min="0"
                  :max="slots"
                  v-model="spellSlotsUsed[level]"
                  :values="slots"
                >
                  <template #output>
                    <InputField size="medium">
                      <NumberInput
                        :name="`remainingSpellSlotsLevel${level}`"
                        :min="0"
                        :max="spellSlots[level]"
                        v-model="spellSlotsUsed[level]"
                      />
                    </InputField>
                  </template>

                  {{ ordinalSuffix(level) }} Spell Slots

                  <template #max>
                    <InputField size="medium">
                      <NumberInput
                        :name="`maxSpellSlotsLevel${level}`"
                        :min="1"
                        :modelValue="spellSlots[level]"
                        @update:model-value="(slot) => updateSpellSlots(level, slot)"
                      />
                    </InputField>
                  </template>
                </RangeField>
              </li>
            </template>
          </ol>
        </li>
      </ol>
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/character";
import { Statistics } from "~/types/character";
import { ordinalSuffix } from "~/utilities/number";
import { capitalize } from "~/utilities/string";

const store = useCharacterStore();
const {
  name,
  level,
  hitDie,
  hitDiceUsed,
  statistics,
  proficiency,
  proficiencies,
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
  spellAttackBonus,
  spellSaveDC,
  spellSlots,
  spellSlotsUsed,
} = storeToRefs(store);

const { toggleProficiency, updateSpellSlots } = store;

function addProficiency(add: boolean, statistic: keyof Statistics, skill: string) {
  toggleProficiency(statistic, skill, add ? 1 : 0);
}

function addDoubleProficiency(add: boolean, statistic: keyof Statistics, skill: string) {
  toggleProficiency(statistic, skill, add ? 2 : 1);
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
  margin: 0 0 1rem;
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
