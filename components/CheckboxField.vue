<template>
  <InputField :class="classes" :size="size" :name="name">
    <CheckboxInput :name="name" v-model="value" />

    <template #labelAfter v-if="slots.label || label">
      <slot name="label">
        {{ label }}
      </slot>
    </template>

    <template #append>
      <InputField v-if="slots.calculated" class="is-calculated" :size="calculatedSize">
        <slot name="calculated" />
      </InputField>
    </template>
  </InputField>
</template>

<script setup lang="ts">
import { InputFontSize } from "~/types/html";

export interface Props {
  name: string;
  size?: InputFontSize;
  calculatedSize?: InputFontSize;
  label?: string;
  disable?: boolean;
  modelValue: boolean | number;
}

const props = withDefaults(defineProps<Props>(), {
  size: "big",
  calculatedSize: "medium",
  disable: false,
});

const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

const classes = computed(() => {
  const classes = ["o-field--checkbox", `is-${props.size}`];

  if (slots.calculated) {
    classes.push("has-calculated");
  }

  return classes;
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss">
.o-field {
  $this: &;

  &#{$this}--checkbox {
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    cursor: pointer;
    user-select: none;
    text-align: left;

    #{$this}__label {
      margin: 0 0.5rem;
    }

    & > .is-calculated {
      margin-left: auto;
    }
  }
}
</style>
