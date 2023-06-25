<template>
  <select
    :name="name"
    :disable="disable"
    :readonly="readonly"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
    "
  >
    <option v-for="(value, index) in options" :key="index" :value="value.value">
      {{ value.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { DataListRecord } from "~/types/html";
import { instanceOfDataListRecord } from "~/utilities/typeGuards";

export interface Props {
  values: DataListRecord[] | string[] | number[] | number | string;
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

const options = computed(() => {
  const records: DataListRecord[] = [];
  let values = parseInt(props.values.toString());

  if (!isNaN(values)) {
    let index = values;
    for (; index >= 0; index--) {
      records.push({
        value: index,
        label: index.toString(),
      });
    }

    return records;
  }

  // @ts-ignore
  // The exclusion of not iterable types is made with isNaN method
  for (const value of props.values) {
    let record: DataListRecord | null = null;

    if (instanceOfDataListRecord(value)) {
      record = {
        value: value.value,
        label: (value.label || value.value).toString(),
      };
    } else if (Array.isArray(value)) {
      if (value.length === 1) {
        record = {
          value: value[0],
          label: value[0].toString(),
        };
      } else if (value.length > 1) {
        record = {
          value: value[0],
          label: value[1].toString(),
        };
      }
    }

    if (record) {
      records.push(record);
    }
  }

  return records;
});
</script>
