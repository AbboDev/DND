<template>
  <div class="o-field" :class="classes">
    <label v-if="slots.label"><slot name="label" /></label>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { InputFontSize } from "~/types/html";

export interface Props {
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

  label {
    display: block;
    font-size: 1rem;
    margin: 0 auto 0.5rem;
  }

  input {
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
