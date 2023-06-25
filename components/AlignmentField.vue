<template>
  <InputField :size="size">
    <template #label v-if="slots.label || label">
      <slot name="label">
        {{ label }}
      </slot>
    </template>

    <div class="o-field__inputs">
      <SelectInput
        :name="name"
        :disable="disable"
        :readonly="readonly"
        v-model="value"
        :values="values"
      />
      <slot name="inputs" />
    </div>
  </InputField>
</template>

<script setup lang="ts">
import { DataListRecord, InputFontSize } from "~/types/html";
import { Alignment } from "~/types/alignments";

export interface Props {
  name: string;
  size?: InputFontSize;
  label?: string;
  disable?: boolean;
  readonly?: boolean;
  modelValue: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  size: "big",
  disable: false,
  readonly: false,
});

const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const values = ref<DataListRecord[]>([]);
onMounted(() => {
  const options = [];

  for (const [value, text] of Object.entries(Alignment)) {
    let label = text.join(" ");
    if (text[0] === text[1]) {
      label = `True ${text[0]}`;
    }

    options.push({
      value,
      label,
    });
  }

  values.value = options;
});
</script>
