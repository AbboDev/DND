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
import { CoreClasses } from "~/types/character";

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

  for (const [value, label] of Object.entries(CoreClasses)) {
    options.push({
      value,
      label,
    });
  }

  values.value = options;
});
</script>
