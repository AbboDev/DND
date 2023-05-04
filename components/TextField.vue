<template>
  <label class="o-text-field">
    <span><slot /></span>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </label>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style lang="scss">
.o-text-field {
  display: block;
  text-align: center;
  font-size: 1rem;

  span {
    display: block;
  }

  input {
    display: block;
    width: 100%;
    border-radius: 4px;
    padding: 0.5rem;
    border: 1px solid var(--fg);
    background-color: var(--bg);
    color: var(--fg);
  }
}
</style>
