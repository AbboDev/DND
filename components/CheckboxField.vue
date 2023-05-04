<template>
  <label class="o-checkbox-field">
    <span class="o-checkbox-field__input">
      <input
        type="checkbox"
        :name="props.name"
        :checked="props.value"
        @input="$emit('change', $event.target.checked)"
      />
      <span></span>
    </span>

    <span class="o-checkbox-field__label"><slot /></span>

    <span class="o-checkbox-field__calculated"><slot name="calculated" /></span>
  </label>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
});

defineEmits(["change"]);
</script>

<style lang="scss">
.o-checkbox-field {
  display: flex;
  text-align: center;
  font-size: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  cursor: pointer;
  user-select: none;

  #{&}__input {
    --radius: 4px;
    margin: 0;
    display: block;
    border-radius: var(--radius);
    padding: 0;
    position: relative;
    border: 1px solid var(--fg);
    background-color: var(--bg);
    color: var(--fg);
    flex: 0 0 auto;
    width: 1rem;
    height: 1rem;
    overflow: hidden;

    span {
      --opacity: 0;
      position: absolute;
      inset: 3px;
      pointer-events: none;
      background-color: var(--fg);
      border-radius: var(--radius);
      transition: opacity 300ms ease-in-out;
      opacity: var(--opacity);
    }

    input {
      appearance: none;

      &:checked {
        & + span {
          --opacity: 1;
        }
      }
    }
  }

  #{&}__label {
    margin: 0 0.5rem;
    display: block;
  }

  #{&}__calculated {
    border: 1px solid var(--fg);
    border-radius: 4px;
    padding: 0.25rem;
    font-size: 1rem;
    background-color: var(--bg);
    color: var(--fg);
    margin: 0 0 0 auto;
    width: auto;
  }
}
</style>
