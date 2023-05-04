<template>
  <main>
    <TextField v-model="name">Character Name</TextField>

    <ClientOnly>
      <ol>
        <li>
          <StatisticField name="level" v-model="level" :min="1"> Level </StatisticField>
        </li>

        <li>
          <StatisticField name="proficiency" v-model="proficiency">
            Proficiency
          </StatisticField>
        </li>

        <li>
          <StatisticField
            name="passivePerception"
            v-model="passivePerception"
            :readonly="true"
          >
            Passive Perception
          </StatisticField>
        </li>

        <li>
          <StatisticField name="passiveInsight" v-model="passiveInsight" :readonly="true">
            Passive Insight
          </StatisticField>
        </li>

        <li>
          <StatisticField name="initiative" v-model="initiative" :readonly="true">
            Initiative
          </StatisticField>
        </li>
      </ol>

      <ol>
        <li v-for="(statisticValue, statistic) in statistics" :key="statistic">
          <StatisticField :name="statistic" v-model="statistics[statistic]">
            {{ statistic.toUpperCase() }}

            <template #calculated>{{ calculatedModifier(statistic) }}</template>
          </StatisticField>

          <ol>
            <li v-for="(skillValue, skill) in proficiencies[statistic]" :key="skill">
              <Transition>
                <CheckboxField
                  v-if="proficiencies[statistic]?.[skill]"
                  class="is-absolute"
                  :name="skill"
                  :value="(proficiencies[statistic]?.[skill] || 0) > 1"
                  @change="(event: boolean) => addDoubleProficiency(event, statistic, skill)"
                />
              </Transition>

              <CheckboxField
                :name="skill"
                :value="proficiencies[statistic]?.[skill]"
                @change="(event: boolean) => addProficiency(event, statistic, skill)"
              >
                {{ skill.toUpperCase() }}

                <template #calculated>{{ calculatedSkill(statistic, skill) }}</template>
              </CheckboxField>
            </li>
          </ol>
        </li>
      </ol>
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/character";
import { Statistics } from "~/types/character";

const store = useCharacterStore();
const {
  name,
  level,
  statistics,
  proficiency,
  proficiencies,
  calculatedSkill,
  calculatedModifier,
  initiative,
  passivePerception,
  passiveInsight,
} = storeToRefs(store);

const { toggleProficiency } = store;

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
  margin: 0;
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
