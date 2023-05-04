<template>
  <main>
    <TextField v-model="name">Character Name</TextField>

    <ClientOnly>
      <ol>
        <li v-for="(value, statistic) in statistics" :key="statistic">
          <StatisticField
            :name="statistic"
            v-model="statistics[statistic]"
            :calculated="modifiers[statistic]"
          >
            {{ statistic.toUpperCase() }}
          </StatisticField>

          <ol>
            <li v-for="(skillValue, skill) in skills[statistic]" :key="skill">
              <CheckboxField :name="skill" v-model="proficiencies[statistic][skill]">
                {{ skill.toUpperCase() }}

                <template #calculated>{{ skillValue }}</template>
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

const store = useCharacterStore();
const { name, statistics, proficiencies, modifiers, skills } = storeToRefs(store);
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
