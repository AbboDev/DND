<template>
  <input
    type="text"
    :name="name"
    :disable="disable"
    :readonly="readonly"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
export interface Props {
  name: string;
  disable?: boolean;
  readonly?: boolean;
  modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  disable: false,
  readonly: false,
});

defineEmits(["update:modelValue"]);
</script>
