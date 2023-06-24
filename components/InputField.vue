<template>
  <div class="o-field" :class="classes">
    <label v-if="slots.default"><slot /></label>
    <slot name="input" />
  </div>
</template>

<script setup lang="ts">
export interface Props {
  size?: "big" | "medium" | "normal";
}

const props = withDefaults(defineProps<Props>(), {
  size: "normal",
});

const slots = useSlots();

const classes = computed(() => {
  return [`is-${props.size}`];
});
</script>

<style lang="scss">
.o-field {
  display: block;
  text-align: center;
  font-size: 1rem;
  width: auto;

  span {
    display: block;
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
  }

  &.is-big {
    font-size: 2rem;
  }

  &.is-medium {
    font-size: 1.5rem;
  }
}
</style>
