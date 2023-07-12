<template>
  <InputField :size="size">
    <template #label v-if="slots.label || label">
      <slot name="label">
        {{ label }}
      </slot>
    </template>

    <div class="o-field__inputs" v-if="!pending">
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
import { Armour } from "~/types/armour";

export interface Props {
  name: string;
  size?: InputFontSize;
  label?: string;
  disable?: boolean;
  readonly?: boolean;
  modelValue: Armour | null;
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
    return props.modelValue?.id || null;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const { data: values, pending } = await useAsyncData<DataListRecord[]>(async () => {
  const values: DataListRecord[] = [];

  try {
    const armours: Armour[] = await $fetch("/api/armour");
    for (const armour of armours) {
      values.push({
        value: armour.id,
        label: armour.name,
      });
    }
  } catch (error) {
    console.error(error);
  }

  return values;
});
</script>
