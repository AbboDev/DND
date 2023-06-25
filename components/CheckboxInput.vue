<template>
  <label class="o-checkbox">
    <input
      type="checkbox"
      :id="name"
      :name="name"
      :checked="!!modelValue"
      :disable="disable"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />
    <span></span>
  </label>
</template>

<script setup lang="ts">
export interface Props {
  name: string;
  disable?: boolean;
  modelValue: boolean | number;
}

withDefaults(defineProps<Props>(), {
  disable: false,
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss">
.o-checkbox {
  display: block;
  border-radius: 4px;
  padding: 0;
  position: relative;
  border: 1px solid var(--fg);
  background-color: var(--bg);
  color: var(--fg);
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  margin: 0;
  cursor: pointer;

  span {
    --opacity: 0;
    display: block;
    position: absolute;
    inset: 50% 0 0 50%;
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
    opacity: var(--opacity);

    height: 12px;
    width: 12px;

    border-radius: 3px;
    outline: 1px solid var(--fg);
    border: 3px solid var(--bg);

    background: var(--fg);
    cursor: ew-resize;
    box-shadow: 0 0 2px 3px var(--bg);
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: left top;
  }

  input[type="checkbox"] {
    margin: 0;
    padding: 0;
    border: 0;
    appearance: none;
    position: absolute;

    &:checked {
      & + span {
        --opacity: 1;
      }
    }
  }
}
</style>
