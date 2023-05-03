<template>
  <div class="o-statistic">
    <label class="o-statistic__main">
      <span class="o-statistic__title"><slot /></span>
      <input
        :min="0"
        type="number"
        :name="props.name"
        class="o-statistic__input"
        :value="value"
        @input="$emit('update:value', parseInt($event.target.value))"
      />
      <span class="o-statistic__calculated">{{ calculated }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
    required: true,
    validate(value) {
      return !isNaN(value);
    },
  },
  calculated: {
    type: Number,
    required: true,
  },
});

defineEmits(["update:value"]);
</script>

<style lang="scss">
.o-statistic {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 3px ridge var(--fg);

  #{&}__main {
    display: flex;
    flex-direction: column;
  }

  #{&}__title {
    display: block;
    margin: 0 auto 0.5rem;
  }

  #{&}__input {
    text-align: center;
    border: 1px solid var(--fg);
    border-radius: 4px;
    padding: 0.5rem 0.5rem 1.5rem;
    font-size: 2rem;
    background-color: var(--bg);
    color: var(--fg);
    width: 200px;
  }

  #{&}__calculated {
    border: 1px solid var(--fg);
    border-radius: 4px;
    padding: 0.25rem;
    font-size: 1.5rem;
    background-color: var(--bg);
    color: var(--fg);
    margin: -1rem auto 0;
    width: auto;
    min-width: 20%;
  }
}
</style>
