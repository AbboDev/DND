<template>
  <label class="o-text-field">
    <span><slot /></span>
    <input
      type="checkbox"
      :name="props.name"
      :checked="props.modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
});

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
