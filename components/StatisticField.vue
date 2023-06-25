<template>
  <InputField :class="classes" :size="size">
    <template #label v-if="slots.label || label">
      <slot name="label">
        {{ label }}
      </slot>
    </template>

    <div class="o-field__inputs">
      <NumberInput
        :name="name"
        :min="min"
        :step="step"
        :max="max"
        :disable="disable"
        :readonly="readonly"
        v-model="value"
      />
      <slot name="inputs" />
    </div>

    <InputField v-if="slots.calculated" class="is-calculated" :size="calculatedSize">
      <slot name="calculated" />
    </InputField>
  </InputField>
</template>

<script setup lang="ts">
import { InputFontSize } from "~/types/html";

export interface Props {
  name: string;
  size?: InputFontSize;
  calculatedSize?: InputFontSize;
  label?: string;
  min?: number;
  step?: number;
  max?: number;
  disable?: boolean;
  readonly?: boolean;
  modelValue: NumericalString;
}

const props = withDefaults(defineProps<Props>(), {
  size: "big",
  calculatedSize: "medium",
  min: 0,
  step: 1,
  disable: false,
  readonly: false,
});

const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

const classes = computed(() => {
  const classes = ["o-field--statistic", `is-${props.size}`];

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

  &#{$this}--statistic {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    #{$this}__inputs {
      display: flex;
      flex-wrap: nowrap;

      input {
        @at-root .has-calculated#{&} {
          padding-bottom: 1.5rem;
        }
      }
    }

    & > .is-calculated {
      margin: -1rem auto 0;
    }
  }
}
</style>
