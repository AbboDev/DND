<template>
  <div class="o-statistic" :class="{ 'has-calculated': slots.calculated }">
    <label class="o-statistic__main">
      <span v-if="slots.default" class="o-statistic__title"><slot /></span>

      <input
        :min="min"
        :max="max"
        type="number"
        :name="props.name"
        class="o-statistic__input"
        :value="modelValue"
        :disable="disable"
        :readonly="readonly"
        autocomplete="off"
        @input="
          $emit(
            'update:modelValue',
            parseFloat(($event.target as HTMLInputElement).value)
          )
        "
      />

      <span v-if="slots.calculated" class="o-statistic__calculated"
        ><slot name="calculated"
      /></span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: null,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String],
    required: true,
    validate(value: any) {
      return !isNaN(value);
    },
  },
});

defineEmits(["update:modelValue"]);

const slots = useSlots();
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
    padding: 0.5rem;
    font-size: 2rem;
    background-color: var(--bg);
    color: var(--fg);
    width: 200px;

    @at-root .has-calculated#{&} {
      padding-bottom: 1.5rem;
    }
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
