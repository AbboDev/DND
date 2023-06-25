<template>
  <div class="o-field" :class="classes">
    <slot name="prepend" />

    <label class="o-field__label" :for="name" v-if="slots.label"
      ><slot name="label"
    /></label>

    <slot />

    <label class="o-field__label" :for="name" v-if="slots.labelAfter"
      ><slot name="labelAfter"
    /></label>

    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import { InputFontSize } from "~/types/html";

export interface Props {
  name?: string;
  size?: InputFontSize;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "normal",
  fullWidth: false,
});

const slots = useSlots();

const classes = computed(() => {
  const classes = [`is-${props.size}`];

  if (props.fullWidth) {
    classes.push("o-field--full-width");
  }

  return classes;
});
</script>

<style lang="scss">
.o-field {
  display: block;
  text-align: center;
  font-size: 1rem;
  width: auto;

  #{&}__label {
    display: block;
    font-size: 1rem;
    margin: 0 auto 0.5rem;
    cursor: pointer;
  }

  input:not([type="checkbox"]):not([type="radio"]):not([type="range"]) {
    width: auto;
    border-radius: 4px;
    padding: 0.5rem;
    border: 1px solid var(--fg);
    background-color: var(--bg);
    color: var(--fg);
    font-size: 1em;
    text-align: inherit;

    @at-root .o-field--full-width#{&} {
      width: 100%;
    }
  }

  &.is-big {
    font-size: 2rem;
  }

  &.is-medium {
    font-size: 1.5rem;
  }
}
</style>
