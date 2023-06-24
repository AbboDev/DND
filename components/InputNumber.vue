<template>
  <input
    type="number"
    :size="size"
    :name="name"
    :min="min"
    :step="step"
    :max="max"
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        parseFloat(($event.target as HTMLInputElement).value)
      )
    "
  />
</template>

<script setup lang="ts">
export interface Props {
  name: string;
  min?: number;
  step?: number;
  max?: number;
  disable?: boolean;
  readonly?: boolean;
  modelValue: NumericalString;
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  step: 1,
  disable: false,
  readonly: false,
});

defineEmits(["update:modelValue"]);

const slots = useSlots();

const size = computed(() => {
  const { length } = props.modelValue.toString();

  if (length === 1) {
    return length;
  }

  return length - 1;
});
</script>
