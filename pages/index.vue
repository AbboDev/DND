<template>
  <main>
    <h1>Hello from the edge!</h1>

    <ul>
      <li v-for="(value, statistic) in statistics" :key="statistic">
        <Statistic v-model:value="statistics[statistic]" :name="statistic">
          {{ statistic.toUpperCase() }}
        </Statistic>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/character";
const store = useCharacterStore();
const { name, statistics } = storeToRefs(store);
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

ul {
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

@media (min-width: 640px) {
  h1 {
    font-size: min(8vw, 4rem);
  }
}
</style>
